import React from "react";
import blogData from "../data/blog";

// Importing components
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

// Main App component
function App() {
  return (
    <div className="App">
      <Header
        name={blogData.name}
        image={blogData.image}
      />

      <About about={blogData.about} />

      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;

