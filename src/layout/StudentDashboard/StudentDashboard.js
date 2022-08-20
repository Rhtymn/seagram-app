import React, { useEffect, useState } from "react";
import styles from "./StudentDashboard.module.css";
import ContentContainer from "../../UI/ContentContainer/ContentContainer";
import CourseListContainer from "../../UI/CourseListContainer/CourseListContainer";
import CourseContainer from "../../UI/CourseContainer/CourseContainer";
import { useDispatch, useSelector } from "react-redux";
import CourseDetailsContainer from "../../UI/CourseDetailsContainer/CourseDetailsContainer";
import EnrolledCourseDetails from "../../components/EnrolledCourseDetails/EnrolledCourseDetails";
import { enrolledCourseActions } from "../../store/enrolledCourse-slice";
import { uiStudentActions } from "../../store/ui-student-slice";
import { sortCourse } from "../../Helper";
import useSort from "../../hooks/useSort";
import SelectContainer from "../../UI/SelectContainer/SelectContainer";
import Options from "../../UI/Options/Options";
import OptionItem from "../../UI/Options/OptionItem";
import { useNavigate, useLocation } from "react-router-dom";

const ProgressBar = (props) => {
  return (
    <div className={`${styles.course_progress}`}>
      <div className={`${styles.progress_bar}`}></div>
      <span>{props.progress}</span>
    </div>
  );
};

const EnrolledCourse = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const courseClickHandler = () => {
    navigate(`/student/dashboard/enrolledcourse/${props.id}`, {
      state: {
        type: "enrolled",
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
      courseType="enrolled"
      onClickCourse={courseClickHandler}
    >
      <ProgressBar progress={props.progress} />
    </CourseContainer>
  );
};

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const isShowCourseDetails = useSelector(
    (state) => state.uiStudent.isShowCourseDetails
  );
  const enrolledCourse = useSelector((state) => state.enrolledCourse.data);
  const user = useSelector((state) => state.user.information);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Nanti logicnya diubah ambil course yang udah di-enroll student
    // Sekarang ambil verified course aja
    const getEnrolledCourse = async () => {
      try {
        fetch(
          `https://seagram-api.herokuapp.com/api/accounts/enrolledCourses?access_token=${user.token}`
        )
          .then((response) => {
            if (response.ok) return response.json();
            else return Promise.reject(response);
          })
          .then(async (data) => {
            const { enrolledCourses } = data;
            console.log(enrolledCourses);

            const urls = enrolledCourses.map((course) => {
              return `https://seagram-api.herokuapp.com/api/Courses/${course.courseId}`;
            });
            const requests = urls.map((url) =>
              fetch(url).then((response) => response.json())
            );

            Promise.all(requests)
              .then((datas) => {
                const result = [];
                datas.forEach((data) => {
                  result.push(data);
                });
                return result;
              })
              .then(async (data) => {
                const courseData = [...data];
                const urls = data.map((course) => {
                  return `https://seagram-api.herokuapp.com/api/Courses/${course.id}/baseUser`;
                });
                const requests = urls.map((url) =>
                  fetch(url).then((response) => response.json())
                );

                const instructors = await Promise.all(requests).then(
                  (datas) => {
                    const result = [];
                    datas.forEach((data) => {
                      result.push(data);
                    });
                    return result;
                  }
                );

                const fixedCourseData = courseData.map((course, idx) => {
                  const newCourseData = {
                    ...course,
                    instructor: instructors[idx].name,
                  };
                  return newCourseData;
                });

                dispatch(enrolledCourseActions.setData([...fixedCourseData]));
                setIsLoading(false);
              });
          });
      } catch (error) {}
    };
    getEnrolledCourse();
  }, []);

  // SORTING
  const {
    selectedSortBy,
    isShowSortOption,
    selectSortClickHandler,
    optionSortClickHandler,
  } = useSort("enrolledCourse", enrolledCourseActions);
  const sortedEnrolledCourse = sortCourse(enrolledCourse, selectedSortBy);
  const totalCourse = enrolledCourse.length;

  // PAGINATION
  const coursePerPage = useSelector(
    (state) => state.enrolledCourse.selectedRowNumber
  );
  const isShowCPPOptions = useSelector(
    (state) => state.enrolledCourse.isShowRowOption
  );
  const currentPage = useSelector((state) => state.enrolledCourse.currentPage);
  const clickedCPPSelectorHandler = () => {
    dispatch(enrolledCourseActions.toggleRowOption());
  };
  const clickedCPPOptionHandler = (newCPP) => {
    dispatch(enrolledCourseActions.resetCurrentPage());
    dispatch(enrolledCourseActions.setSelectedRowNumber(newCPP));
  };
  const maxIdx = currentPage * parseInt(coursePerPage);
  const minIdx = maxIdx - parseInt(coursePerPage);
  const maximumPage =
    totalCourse % parseInt(coursePerPage) === 0
      ? totalCourse / parseInt(coursePerPage)
      : Math.floor(totalCourse) / parseInt(coursePerPage) + 1;
  const nextPageHandler = () => {
    if (currentPage + 1 > maximumPage) return;
    dispatch(enrolledCourseActions.nextPage());
  };
  const prevPageHandler = () => {
    if (currentPage === 1) return;
    dispatch(enrolledCourseActions.prevPage());
  };
  const enrolledCourseList = sortedEnrolledCourse
    .slice(minIdx, maxIdx)
    .map((course) => <EnrolledCourse key={course.id} {...course} />);

  let pageInformation;
  if (coursePerPage > totalCourse) {
    pageInformation = `${minIdx + 1}-${
      coursePerPage > totalCourse ? totalCourse : coursePerPage
    } of ${totalCourse}`;
  } else {
    pageInformation = `${minIdx + 1}-${maxIdx} of ${totalCourse}`;
  }

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
      <CourseListContainer listName="Enrolled Course" {...ctx}>
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
            <OptionItem onOptionClick={optionSortClickHandler}>
              Progress
            </OptionItem>
          </Options>
        </SelectContainer>
        {enrolledCourseList}
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
      <EnrolledCourseDetails />
    </CourseDetailsContainer>
  );

  return (
    <>
      {!isShowCourseDetails && Content}
      {isShowCourseDetails && CourseDetails}
    </>
  );
};

export default StudentDashboard;
