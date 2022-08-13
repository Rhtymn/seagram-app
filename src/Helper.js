export const sortCourse = (courseList, sortBy) => {
    const result = [...courseList];
    if (sortBy === "Name") {
        return result.sort((a,b)=>{
            return a.courseName > b.courseName ? 1 : -1;
        })
    }
    if (sortBy === "Instructor") {
        return result.sort((a,b)=>{
            return a.instructor > b.instructor ? 1 : -1;
        })
    }
    if (sortBy === "Progress") {
        return result.sort((a,b) => {
            return parseInt(a.progress) > parseInt(b.progress) ? 1 : -1;
        })
    }
    if (sortBy === "Enrolled") {
        return result.sort((a,b) => {
            return parseInt(a.enrolledStudent) > parseInt(b.enrolledStudent) ? 1 : -1;
        })
    }
}