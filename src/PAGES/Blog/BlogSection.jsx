import React from 'react';
import './BlogSection.css';

// Import images from the assets folder
import carImage1 from '../../assets/lb-1.jpg';
import carImage2 from '../../assets/lb-2.jpg';
import carImage3 from '../../assets/lb-3.jpg';

const blogs = [
  {
    title: "Benjamin Franklin’s Method Of Habit Formation",
    author: "Polly Williams",
    date: "Dec 19, 2018",
    comment: "Comment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: carImage1,  // Use imported image here
  },
  {
    title: "How To Set Intentions That Energize You",
    author: "Mattie Ramirez",
    date: "Dec 19, 2018",
    comment: "Comment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: carImage2,  // Use imported image here
  },
  {
    title: "Burning Desire Golden Key Or Red Herring",
    author: "Nicholas Brewer",
    date: "Dec 19, 2018",
    comment: "Comment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: carImage3,  // Use imported image here
  },
];

const BlogSection = () => {
  return (
    <div className="blog-container">
      <h2 className="blog-title">Our Blog</h2>
      <h3>Latest News Updates</h3>
      <p>
        Sign up for the latest Automobile Industry information and more. <br />
        <em>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </em>
      </p>

      <div className="blog-list">
      {blogs.map((blog, index) => (
  <div key={index} className="blog-card">
    <div className="blog-image">
      <img src={blog.img} alt={blog.title} />
      <div className="blog-author-overlay">
        By {blog.author} {blog.date} {blog.comment}
      </div>
    </div>
    <h3>{blog.title}</h3>
    <p>{blog.description}</p>
    <a href="#">View More</a>
  </div>
))}

      </div>
    </div>
  );
};

export default BlogSection;
