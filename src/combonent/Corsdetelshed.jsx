import React from "react";
import style from "./Corsdetelshed.module.css";
import img from "../assets/img/Group236.png";
import cimg from "../assets/img/business-video-chat-laptop.jpg";
import mainstyle from "./main.module.css";
import { NavLink } from "react-router-dom";
import Deteles from "./Deteles";

function Corsdetelshed({ data }) {
  console.log(data);
  return (
    <>
      <section>
        <img className={style.bigimg} src={img} />
        <div className="container mt-4">
          {/* <div className="row">
            <div className="col-8">
              <div className="btn d-flex align-items-start">
                <button className={style.btnn}>Overview</button>
                <button className={style.btnn}>Overview</button>
                <button className={style.btnn}>Overview</button>
                <button className={style.btnn}>Overview</button>
              </div> */}

          <div class="row">
            <div class="col-sm-8  mb-3 mb-sm-0 mt-5">
              <Deteles course={data} />
            </div>
            <div class="col-sm-3 ms-5  mb-3 mb-sm-0">
              <div
                className={`card border-0 h-100 d-flex justify-content-center align-items-center ${style.card}`}
              >
                <img
                  src={`http://localhost:4000/imgs/${data.imgURL}`}
                  className={style.cardimg}
                />
                <div className={`card-body`}>
                  <div className="techerimg d-flex justify-content-lg-between align-items-center">
                    <div className="d-flex justify-content-start align-items-center  mt-2">
                      <h3 className={`${mainstyle.linkes}`}>${data.price}</h3>
                    </div>
                  </div>
                  <p className={`card-title ${mainstyle.linkes}`}>
                    Created at: {new Date(data.created_at).toLocaleString()}
                  </p>
                  <button className={style.btn}>
                    <NavLink
                      className="nav-link active ms-3 me-3"
                      to="/checkout"
                    >
                      Enroll Now
                    </NavLink>
                  </button>
                  <hr className={style.line} />
                  <h4>This Course included</h4>
                  <div className=" d-flex  align-items-center justify-content-between mt-3">
                    <span>
                      <p>Enrolled student </p>
                    </span>
                    <p className="mr-3">
                      {data.enrolledStudents.length} Students
                    </p>
                  </div>
                  <div className=" d-flex  align-items-center justify-content-between">
                    <span>
                      <p className=""> Course Level</p>
                    </span>
                    <p className={style.botomtext}>{data.level}</p>
                  </div>
                  <div className=" d-flex  align-items-center justify-content-between">
                    <span>
                      <p className=""> Lessons</p>
                    </span>
                    <p className={style.botomtext}>
                      {data.lessons.length} lessons
                    </p>
                  </div>

                  <hr className={style.line} />
                  <h4>This Course included</h4>
                  <p className="w75">
                    Class, launched less than a year ago by Blackboard
                    co-founder Michael Chasen, integrates exclusively...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* </div>
        </div> */}
      </section>
    </>
  );
}

export default Corsdetelshed;