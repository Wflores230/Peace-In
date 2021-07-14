import React, { Component } from "react";
import '../css/reset.css';
import '../css/style.css';
import Meditation from '../images/medit.jpg';
import Yoga from '../images/yog.jpg';
import Stretching from '../images/str.jpg';
import Homeworkout from '../images/hw.jpg';
import { Link } from 'react-router-dom'
// TODO Use effect hook to query the backend api
// TODO Store the array of quotes in the state
// TODO Implement random index formula, max = lenght of array minus 1, min = 0


const Homepage = () => {
    return (

        <>
            <header>

                <h1>Peace In</h1>

            </header>
            <main>
                <section>
                    <div class="wrapper">
                        <h2>All things are difficult, before they are easy!</h2>
                        {/* TODO render the randomly index quote */}
                    </div>
                </section>
                <section>
                    <div class="work">
                        <h2>ready to start?</h2>
                    </div>
                    <div class="work-container">
                        <div class="content_img">
                            <Link to ="/meditation"><img src={Meditation} /></Link>
                            <div>Meditation</div>
                        </div>
                        <div class="content_img">
                            <Link to ="/yoga"><img src={Yoga} /></Link>
                            <div>Yoga</div>
                        </div>
                        <div class="content_img">
                            <Link to ="/stretching"><img src={Stretching} /></Link>
                            <div>Stretching</div>
                        </div>
                        <div class="content_img">
                            <Link to ="/homeworkout"><img src={Homeworkout} /></Link>
                            <div>Home Workout</div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="about">
                        <h2>About</h2>
                    </div>
                </section>
            </main>
        </>

    );
}

export default Homepage;
