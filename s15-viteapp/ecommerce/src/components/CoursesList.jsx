import React, { useState } from 'react';

export default function CoursesList() {
  const [courses, setCourses] = useState([]); // State to store the list of courses
  const [courseName, setCourseName] = useState(''); // State to track the input value

  // Function to handle adding a new course
  const handleAddCourse = (event) => {
    event.preventDefault(); // Prevent form submission
    if (courseName.trim()) {
      setCourses([...courses, courseName]); // Add the course to the list
      setCourseName(''); // Reset the input field
    } else {
      alert('Please enter a valid course name');
    }
  };

  return (
    <div>
      <h1>COURSES</h1>

      {/* Form to add a new course */}
      <form onSubmit={handleAddCourse}>
        <input
          type="text"
          value={courseName}
          placeholder="Enter course name"
          onChange={(e) => setCourseName(e.target.value)}
        />
        <button type="submit">Add Course</button>
      </form>

      {/* Display the list of courses */}
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
}

