import { createSlice } from "@reduxjs/toolkit";

const enrolledCourseSlice = createSlice({
  name: "enrolledCourse",
  initialState: {
    data: [],
    lectures: [],
    lectureDetails: [],
    currentPage: 1,
    selectedRowNumber: "5",
    selectedSortBy: "Name",
    isShowRowOption: false,
    isShowSortOption: false,
  },
  reducers: {
    setData(state, actions) {
      state.data = actions.payload;
    },
    addedLectures(state, actions) {
      if (state.lectures.length === 0) {
        const newLectures = [...actions.payload, ...state.lectures];
        state.lectures = newLectures;
      } else {
        actions.payload.forEach((element) => {
          const isExist = state.lectures.findIndex((el) => {
            return el.id === element.id;
          });
          if (isExist === -1) {
            const newLectures = [...state.lectures, element];
            state.lectures = newLectures;
          }
        });
      }
    },
    addedLectureDetails(state, actions) {
      if (state.lectureDetails.length === 0) {
        state.lectureDetails = [{ ...actions.payload }];
      } else {
        const isExist = state.lectureDetails.findIndex((el) => {
          return el.lectureId === actions.payload.lectureId;
        });
        if (isExist === -1) {
          const newLectureDetails = [
            ...state.lectureDetails,
            { ...actions.payload },
          ];
          state.lectureDetails = newLectureDetails;
        }
      }
    },
    toggleRowOption(state) {
      state.isShowRowOption = !state.isShowRowOption;
    },
    toggleSortOption(state) {
      state.isShowSortOption = !state.isShowSortOption;
    },
    setSelectedRowNumber(state, actions) {
      state.selectedRowNumber = actions.payload;
    },
    setSelectedSortBy(state, actions) {
      state.selectedSortBy = actions.payload;
    },
    resetCurrentPage(state) {
      state.currentPage = 1;
    },
    nextPage(state) {
      state.currentPage = state.currentPage + 1;
    },
    prevPage(state) {
      state.currentPage = state.currentPage - 1;
    },
  },
});

export const enrolledCourseActions = enrolledCourseSlice.actions;
export default enrolledCourseSlice;
