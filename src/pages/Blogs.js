import React from "react";

const sampleBlogData = [
  {
    id: 1,
    title: "Getting Started with React",
    content:
      "React is a popular JavaScript library for building user interfaces. In this article, we'll learn the basics of React development.",
  },
  {
    id: 2,
    title: "JavaScript Fundamentals",
    content:
      "JavaScript is the programming language of the web. This article covers fundamental concepts in JavaScript programming.",
  },
  // Add more sample blog data here
];

const BlogArticle = ({ title, content }) => (
  <div className="bg-white p-4 rounded-md shadow-md mb-4">
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-700">{content}</p>
  </div>
);

const Blogs = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Blog Articles</h1>
      <div>
        {sampleBlogData.map((blog) => (
          <BlogArticle key={blog.id} title={blog.title} content={blog.content} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
