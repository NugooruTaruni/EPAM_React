/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import { mockedAuthorsList } from './constants'; 

function CourseCard({ course }) {
  const { title, duration, creationDate, description, authors } = course;

  // Function to format duration
  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h:${mins}m`;
  };

  const displayAuthors = (authors) => {
    const MAX_AUTHORS_LENGTH = 20; 
    const authorNames = authors.map((authorId) =>
      mockedAuthorsList.find((author) => author.id === authorId)?.name
    );
    const displayedNames = authorNames.join(', ');
    return displayedNames.length > MAX_AUTHORS_LENGTH
      ? displayedNames.slice(0, MAX_AUTHORS_LENGTH) + '...'
      : displayedNames;
  };

  return (
    <div className="course-card">
      <h2>{title}</h2>
      <p>Duration: {formatDuration(duration)} hours</p>
      <p>Creation Date: {creationDate}</p>
      <p>Description: {description}</p>
      <p>Authors: {displayAuthors(authors)}</p>
      <button>Show Course</button>
    </div>
  );
}

export default CourseCard;


