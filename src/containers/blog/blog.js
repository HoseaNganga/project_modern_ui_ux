import React from "react";
import "./blog.css";
import blog1 from "../../assets/blog01.png";
import blog2 from "../../assets/blog02.png";
import blog3 from "../../assets/blog03.png";
import blog4 from "../../assets/blog04.png";
import blog5 from "../../assets/blog05.png";

const blog = () => {
  return (
    <div className="blog">
      <div className="blogContainer">
        <h2 className="gradient-text">
          a lot is happening, we are blogging about it
        </h2>
        <div className="blogFlex">
          <div className="flexBlog">
            <img src={blog1} alt="blog1" />
            <div className="descr">
              <p className="datetime">Feb 03,2024</p>
              <h3>gpt-3 and open ai is the future.let us explore how it is</h3>
              <p className="articlep">read full article</p>
            </div>
          </div>
          <div className="flexBlogs">
            <div className="flexedBlogs">
              <img src={blog2} alt="blog2" />
              <div className="descr">
                <p className="datetime">Feb 03,2024</p>
                <h3>
                  gpt-3 and open ai is the future.let us explore how it is
                </h3>
                <p className="articlep">read full article</p>
              </div>
            </div>
            <div className="flexedBlogs">
              <img src={blog3} alt="blog3" />
              <div className="descr">
                <p className="datetime">Feb 03,2024</p>
                <h3>
                  gpt-3 and open ai is the future.let us explore how it is
                </h3>
                <p className="articlep">read full article</p>
              </div>
            </div>
            <div className="flexedBlogs">
              <img src={blog4} alt="blog4" />
              <div className="descr">
                <p className="datetime">Feb 03,2024</p>
                <h3>
                  gpt-3 and open ai is the future.let us explore how it is
                </h3>
                <p className="articlep">read full article</p>
              </div>
            </div>
            <div className="flexedBlogs">
              <img src={blog5} alt="blog5" />
              <div className="descr">
                <p className="datetime">Feb 03,2024</p>
                <h3>
                  gpt-3 and open ai is the future.let us explore how it is
                </h3>
                <p className="articlep">read full article</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;
