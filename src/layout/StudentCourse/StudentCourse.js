import React, { useEffect, useState } from "react";
import styles from "./StudentCourse.module.css";
import ContentContainer from "../../UI/ContentContainer/ContentContainer";
import CourseListContainer from "../../UI/CourseListContainer/CourseListContainer";
import CourseContainer from "../../UI/CourseContainer/CourseContainer";
import { useSelector, useDispatch } from "react-redux/es/exports";
import CourseDetailsContainer from "../../UI/CourseDetailsContainer/CourseDetailsContainer";
import VerifiedCourseDetails from "../../components/VerifiedCourseDetails/VerifiedCourseDetails";
import { verifiedCourseActions } from "../../store/verifiedCourse-slice";
import { sortCourse } from "../../Helper";
import { uiStudentActions } from "../../store/ui-student-slice";
import SelectContainer from "../../UI/SelectContainer/SelectContainer";
import Options from "../../UI/Options/Options";
import OptionItem from "../../UI/Options/OptionItem";
import useSort from "../../hooks/useSort";
import { useNavigate, useLocation } from "react-router-dom";

const VerifiedCourse = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const courseClickHandler = () => {
    navigate(`/student/course/${props.id}`, {
      state: {
        type: "verified",
        id: `${props.id}`,
        title: `${props.title}`,
        description: `${props.description}`,
        back: `${location.pathname}`,
        instructor: `${props.instructor}`,
      },
    });
  };

  return (
    <CourseContainer
      {...props}
      courseType="verified"
      onClickCourse={courseClickHandler}
    ></CourseContainer>
  );
};

const StudentCourse = () => {
  const dispatch = useDispatch();
  const isShowCourseDetails = useSelector(
    (state) => state.uiStudent.isShowCourseDetails
  );
  const verifiedCourse = useSelector((state) => state.verifiedCourse.data);
  const [isLoading, setIsLoading] = useState(true);

  // FETCH VERIFIED COURSE
  useEffect(() => {
    const getVerifiedCourse = async () => {
      try {
        const response = await fetch(
          "https://seagram-api.herokuapp.com/api/Courses/getAllVerified"
        );
        if (!response.ok) throw new Error("Something went wrong");
        const { courses } = await response.json();

        const urls = courses.map((course) => {
          return `https://seagram-api.herokuapp.com/api/Courses/${course.id}/baseUser`;
        });
        const requests = urls.map((url) =>
          fetch(url).then((response) => response.json())
        );

        const instructors = await Promise.all(requests).then((datas) => {
          const result = [];
          datas.forEach((data) => {
            result.push(data);
          });
          return result;
        });

        const fixedCourseData = courses.map((course, idx) => {
          const newCourseData = {
            ...course,
            instructor: instructors[idx].name,
          };
          return newCourseData;
        });

        dispatch(verifiedCourseActions.setData([...fixedCourseData]));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getVerifiedCourse();
  }, []);

  // SORTING
  const {
    selectedSortBy,
    isShowSortOption,
    selectSortClickHandler,
    optionSortClickHandler,
  } = useSort("verifiedCourse", verifiedCourseActions);
  const sortedVerifiedCourse = sortCourse(verifiedCourse, selectedSortBy);
  const totalCourse = verifiedCourse.length;

  // PAGINATION
  const coursePerPage = useSelector(
    (state) => state.verifiedCourse.selectedRowNumber
  ); // CPP = Course Per Page
  const isShowCPPOptions = useSelector(
    (state) => state.verifiedCourse.isShowRowOption
  );
  const currentPage = useSelector((state) => state.verifiedCourse.currentPage);
  const clickedCPPSelectorHandler = () => {
    dispatch(verifiedCourseActions.toggleRowOption());
  };
  const clickedCPPOptionHandler = (newCPP) => {
    dispatch(verifiedCourseActions.resetCurrentPage());
    dispatch(verifiedCourseActions.setSelectedRowNumber(newCPP));
  };
  const maxIdx = currentPage * parseInt(coursePerPage);
  const minIdx = maxIdx - parseInt(coursePerPage);
  const maximumPage =
    totalCourse % parseInt(coursePerPage) === 0
      ? totalCourse / parseInt(coursePerPage)
      : Math.floor(totalCourse) / parseInt(coursePerPage) + 1;
  const nextPageHandler = () => {
    if (currentPage + 1 > maximumPage) return;
    dispatch(verifiedCourseActions.nextPage());
  };
  const prevPageHandler = () => {
    if (currentPage === 1) return;
    dispatch(verifiedCourseActions.prevPage());
  };
  let pageInformation;
  if (currentPage < Math.floor(maximumPage)) {
    pageInformation = `${minIdx + 1}-${maxIdx} of ${totalCourse}`;
  } else {
    pageInformation = `${minIdx + 1}-${totalCourse} of ${totalCourse}`;
  }

  const verifiedCourseList = sortedVerifiedCourse
    .slice(minIdx, maxIdx)
    .map((course) => <VerifiedCourse key={course.id} {...course} />);
  const ctx = {
    nextPageHandler,
    prevPageHandler,
    pageInformation,
    currentPage,
    maximumPage,
    isLoading,
  };

  const Content = (
    <ContentContainer>
      <CourseListContainer
        listName="Verified Course"
        {...ctx}
        courseType="verified"
      >
        <SelectContainer
          label="Sort by:"
          selected={selectedSortBy}
          onSelectClick={selectSortClickHandler}
        >
          <Options active={isShowSortOption}>
            <OptionItem onOptionClick={optionSortClickHandler}>Name</OptionItem>
            <OptionItem onOptionClick={optionSortClickHandler}>
              Instructor
            </OptionItem>
          </Options>
        </SelectContainer>
        {verifiedCourseList}
        <SelectContainer
          label={"Course per page:"}
          selected={coursePerPage}
          onSelectClick={clickedCPPSelectorHandler}
        >
          <Options active={isShowCPPOptions}>
            <OptionItem onOptionClick={clickedCPPOptionHandler}>5</OptionItem>
            <OptionItem onOptionClick={clickedCPPOptionHandler}>10</OptionItem>
            <OptionItem onOptionClick={clickedCPPOptionHandler}>15</OptionItem>
          </Options>
        </SelectContainer>
      </CourseListContainer>
    </ContentContainer>
  );

  const toggleCourseDetails = () => {
    dispatch(uiStudentActions.toggleCourseDetails());
  };
  const CourseDetails = (
    <CourseDetailsContainer toggle={toggleCourseDetails}>
      <VerifiedCourseDetails />
    </CourseDetailsContainer>
  );

  return (
    <>
      {!isShowCourseDetails && Content}
      {isShowCourseDetails && CourseDetails}
    </>
  );
};

export default StudentCourse;
