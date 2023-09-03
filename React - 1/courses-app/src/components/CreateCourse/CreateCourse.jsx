import React, { useState } from 'react';
import { mockedAuthorsList } from './constants';
import Input from './Input';
import Button from './Button';

// eslint-disable-next-line react/prop-types
const CreateCourse = ({ onClose, onAddCourse }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [authorsToAdd, setAuthorsToAdd] = useState([...mockedAuthorsList]);
  const [courseAuthors, setCourseAuthors] = useState([]);
  const [newAuthorName, setNewAuthorName] = useState('');

  const handleAddAuthorToCourse = (author) => {
    setCourseAuthors((prevAuthors) => [...prevAuthors, author]);
    setAuthorsToAdd((prevAuthors) =>
      prevAuthors.filter((existingAuthor) => existingAuthor.id !== author.id)
    );
  };

  const handleRemoveAuthorFromCourse = (author) => {
    setAuthorsToAdd((prevAuthors) => [...prevAuthors, author]);
    setCourseAuthors((prevAuthors) =>
      prevAuthors.filter((existingAuthor) => existingAuthor.id !== author.id)
    );
  };

  const handleAddNewAuthor = () => {
    if (newAuthorName.trim().length >= 2) {
      const newAuthor = {
        id: Math.random().toString(36).substring(2, 9),
        name: newAuthorName,
      };
      setAuthorsToAdd((prevAuthors) => [...prevAuthors, newAuthor]);
      setNewAuthorName('');
    }
  };

  const handleCreateCourse = () => {
    if (!title || !description || !duration || courseAuthors.length === 0) {
      alert('Please, fill in all fields.');
      return;
    }

    const newCourse = {
      id: Math.random().toString(36).substring(2, 9),
      title,
      description,
      creationDate: new Date().toLocaleDateString(),
      duration: parseInt(duration, 10),
      authors: courseAuthors.map((author) => author.id),
    };

    onAddCourse(newCourse);
    onClose();
  };

  return (
    <div className="create-course">
      <h2>Create New Course</h2>
      <Input labelText="Title:" placeholderText="Enter course title" onChange={(e) => setTitle(e.target.value)} />
      <textarea
        placeholder="Enter course description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input
        labelText="Duration (minutes):"
        placeholderText="Enter course duration"
        onChange={(e) => setDuration(e.target.value.replace(/\D/, ''))}
      />
      <div className="authors-section">
        <h3>Authors:</h3>
        {authorsToAdd.map((author) => (
          <div key={author.id} className="author">
            {author.name}
            <Button buttonText="Add author" onClick={() => handleAddAuthorToCourse(author)} />
          </div>
        ))}
        <div className="new-author">
          <Input
            labelText="New Author:"
            placeholderText="Enter author name"
            onChange={(e) => setNewAuthorName(e.target.value)}
            value={newAuthorName}
          />
          <Button buttonText="Create author" onClick={handleAddNewAuthor} />
        </div>
      </div>
      <div className="course-authors-section">
        <h3>Course Authors:</h3>
        {courseAuthors.map((author) => (
          <div key={author.id} className="author">
            {author.name}
            <Button buttonText="Delete author" onClick={() => handleRemoveAuthorFromCourse(author)} />
          </div>
        ))}
      </div>
      <Button buttonText="Create Course" onClick={handleCreateCourse} />
    </div>
  );
};

export default CreateCourse;
