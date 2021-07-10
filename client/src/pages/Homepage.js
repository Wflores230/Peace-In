import React, { Component } from "react";
import '../css/reset.css';
import '../css/style.css';
import Meditation from '../images/medit.jpg'
import Yoga from '../images/yog.jpg'
import Stretching from '../images/str.jpg'
import Homeworkout from '../images/hw.jpg'


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
                    </div>
                </section>
                <section>
                    <div class="work">
                        <h2>ready to start?</h2>
                    </div>
                    <div class="work-container">
                        <div class="content_img">
                            <a href="/meditation"><img src={Meditation} /></a>
                            <div>Meditation</div>
                        </div>
                        <div class="content_img">
                            <a href="/yoga"><img src={Yoga} /></a>
                            <div>Yoga</div>
                        </div>
                        <div class="content_img">
                            <a href="/stretching"><img src={Stretching} /></a>
                            <div>Stretching</div>
                        </div>
                        <div class="content_img">
                            <a href="/homeworkout"><img src={Homeworkout} /></a>
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
