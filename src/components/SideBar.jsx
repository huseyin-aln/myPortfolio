import React from "react";
import { BsLinkedin, BsGithub, BsFillEnvelopeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      <div className="icons linkedin text-light fs-3 d-flex justify-content-between align-items-center">
        <Link
          to="//www.linkedin.com/in/h%C3%BCseyin-arslan444/"
          target="_blank"
        >
          Linkedin
        </Link>
        <span className="display-5 d-flex align-items-center p-2">
          <BsLinkedin />
        </span>
      </div>

      <div className="icons github text-light text-light fs-3 d-flex justify-content-between align-items-center">
        <Link to="//github.com/huseyin-aln" target="_blank">
          Github
        </Link>
        <span className="display-5 d-flex align-items-center p-2">
          <BsGithub />
        </span>
      </div>

      <div className="icons email text-light fs-3 d-flex justify-content-between align-items-center">
        <a href="mailto:huseyinarslan06@gmail.com" target="_blank">
          Email
        </a>
        <span className="display-5 d-flex align-items-center p-2">
          <BsFillEnvelopeFill />
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
