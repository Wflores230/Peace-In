import React, { Component, useState, useEffect } from "react";
import "../css/reset.css";
import "../css/style.css";
import Meditation from "../images/medit.jpg";
import Yoga from "../images/yog.jpg";
import Stretching from "../images/str.jpg";
import Homeworkout from "../images/hw.jpg";
import { Link } from "react-router-dom";
import API from "../utils/API";

const Homepage = () => {
  const [quote, setQuote] = useState({});
  useEffect(() => {
      API.getQuotesResults().then((res) => {
        const quotesArray = [];
      quotesArray.push(res.data);
      return quotesArray
    }).then((newres) => {
        console.log(newres);
        const newQuote =
          newres[0][Math.floor(Math.random() * newres[0].length)];
          console.log(newres.length)
        setQuote(newQuote);
      });
  }, []);
  return (
    <>
      <header>
        <h1 class="title">Peace In</h1>
      </header>
      <main>
        <section>
          <div class="wrapper">
            {quote ? (
              <>
                <h2>{quote.quote}</h2>
                <h4>{quote.author}</h4>
              </>
            ) : (
              ""
            )}
          </div>
        </section>
        <section>
          <div class="work-container">
            <div class="content_img">
              <Link to="/meditation">
                <img src={Meditation} />
              </Link>
              <div>Meditation</div>
            </div>
            <div class="content_img">
              <Link to="/yoga">
                <img src={Yoga} />
              </Link>
              <div>Yoga</div>
            </div>
            <div class="content_img">
              <Link to="/stretching">
                <img src={Stretching} />
              </Link>
              <div>Stretching</div>
            </div>
            <div class="content_img">
              <Link to="/homeworkout">
                <img src={Homeworkout} />
              </Link>
              <div>Home Workout</div>
            </div>
          </div>
        </section>
        <section>
          <div class="about">
            <h2 class ="title">About</h2>
            <h4>This is a mental health app intended to assist individuals to deal with stress.<br></br> This app allows users to choose their method of de-stressing with meditation, yoga, stretching, or at home workouts.  </h4>
          </div>
        </section>
      </main>
    </>
  );
};

export default Homepage;
