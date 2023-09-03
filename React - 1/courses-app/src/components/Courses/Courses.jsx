import React, { useState } from 'react';
import { mockedCoursesList, mockedAuthorsList } from './constants';
import { CourseCard, Button, SearchBar, CreateCourse } from './components';

const Courses = () => {
  const [filteredCourses, setFilteredCourses] = useState(mockedCoursesList);
  const [isCreatingCourse, setIsCreatingCourse] = useState(false);

  const handleSearch = (searchText) => {
    if (!searchText) {
      setFilteredCourses(mockedCoursesList);
      return;
    }

    const filtered = mockedCoursesList.filter(
      (course) =>
        course.title.toLowerCase().includes(searchText.toLowerCase()) ||
        course.id.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  const handleAddCourse = (newCourse) => {
    setFilteredCourses((prevCourses) => [...prevCourses, newCourse]);
  };

  return (
    <div className="courses">
      <SearchBar onSearch={handleSearch} />
      {filteredCourses.map((course) => (
        <CourseCard key={course.id} course={course} authors={mockedAuthorsList} />
      ))}
      {!isCreatingCourse && (
        <Button buttonText="Add New Course" onClick={() => setIsCreatingCourse(true)} />
      )}
      {isCreatingCourse ? (
        <CreateCourse onClose={() => setIsCreatingCourse(false)} onAddCourse={handleAddCourse} />
      ) : null}
    </div>
  );
};

export default Courses;
