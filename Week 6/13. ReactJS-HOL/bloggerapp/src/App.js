import React from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Blogger App</h1>
      </header>
      <main className="container">
        <BookDetails />
        <div className="divider"></div>
        <BlogDetails />
        <div className="divider"></div>
        <CourseDetails />
      </main>
    </div>
  );
}

export default App;
