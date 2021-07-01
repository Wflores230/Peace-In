import React, { Component } from "react";
import '../css/reset.css';
import '../css/style.css';
import Meditation from '../images/medit.jpg'
import Yoga from '../images/yog.jpg'
import Streching from '../images/str.jpg'
import Homeworkout from '../images/hw.jpg'


const Homepage = () => {
    return (
        <div class="wrapper_w">

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
                            <a href="https://github.com/GulshatT/TicketTask"><img src={Meditation} /></a>
                            <div>Meditation</div>
                        </div>
                        <div class="content_img">
                            <a href="https://gulshatt.github.io/lyric-search/"><img src={Yoga} /></a>
                            <div>Yoga</div>
                        </div>
                        <div class="content_img">
                            <a href="https://gulshatt.github.io/HW5-Scheduler/"><img src={Streching} /></a>
                            <div>Streching</div>
                        </div>
                        <div class="content_img">
                            <a href="https://github.com/GulshatT/HW-Weather-dashboard"><img src={Homeworkout} /></a>
                            <div>Home Workout</div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="review">
                        <h2>Review</h2>
                        <ul>
                            <li><a href="https://accounts.google.com" target="_blank">google</a></li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>


    );
}

export default Homepage;
