// import ProgressTracking from "./ProgressTracking";
// import Collaborate from "./Collaborate";
import React, { useState } from 'react';
import "./Features.css";


const Features = () => {

    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    return (
        <section className="features">
            <div className="wrapper-progress-icon">
                <img
                    className="progress-icon"
                    loading="lazy"
                    alt=""
                    src="/vector-2.svg"
                />
            </div>
            <h1 className="features-unlocking-cosmic">
                Features: Unlocking Cosmic Potential 🚀
            </h1>
            <button className="btn-1" onClick={toggleVisibility} role="button">{visible ? 'Hide All' : 'Open All' }</button>

            <div className="features-flexbox">
                <div className={`single-feature ${visible ? 'show' : ''}`}>
                    <div className="single-feature-img-container">
                        <img
                            className="single-feature-img"
                            loading="lazy"
                            alt=""
                            src="/oneonone-1@2x.png"
                        />
                    </div>
                    <div className="feature-text-container">
                        <h3 className="feature-text-header">
                            Personalized 1-on-1 Private Classes
                        </h3>
                        <div className={`feature-text-box ${visible ? 'show' : ''}`}>
                            <span>
                                <i>Tailored Learning</i>
                                <span>
                                    : Our students benefit from one-on-one private classes with
                                    experienced instructors. Each lesson is personalized to
                                    match the student's pace and learning style, ensuring
                                    maximum comprehension and growth.
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={`single-feature ${visible ? 'show' : ''}`}>
                    <div className="single-feature-img-container">
                        <img
                            className="single-feature-img"
                            loading="lazy"
                            alt=""
                            src="/planning@2x.png"
                        />
                    </div>
                    <div className="feature-text-container">
                        <h3 className="feature-text-header">
                            Project-Based Learning
                        </h3>
                        <div className={`feature-text-box ${visible ? 'show' : ''}`}>
                            <span>
                                <i>Boost Your Skills:</i>
                                <span>
                                    {" "}
                                    Our curriculum includes engaging projects that challenge
                                    students to apply their knowledge in real-world scenarios.
                                    These projects enhance problem-solving skills, creativity, and
                                    critical thinking.
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={`single-feature ${visible ? 'show' : ''}`}>
                    <div className="single-feature-img-container">
                        <img
                            className="single-feature-img"
                            loading="lazy"
                            alt=""
                            src="/progress-2@2x.png"
                        />
                    </div>
                    <div className="feature-text-container">
                        <h3 className="feature-text-header">
                        Progress Tracking
                        </h3>
                        <div className={`feature-text-box ${visible ? 'show' : ''}`}>
                            <span>
                                <i>Stay Informed: </i>
                                <span>
                                    {" "}
                                    Parents and students can easily track their academic journey through our 
                                    intuitive progress tracking system. Monitor performance, 
                                    view completed assignments, and access valuable insights into 
                                    your child's educational development.
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={`single-feature ${visible ? 'show' : ''}`}>
                    <div className="single-feature-img-container">
                        <img
                            className="single-feature-img"
                            loading="lazy"
                            alt=""
                            src="/collab-3@2x.png"
                        />
                    </div>
                    <div className="feature-text-container">
                        <h3 className="feature-text-header">
                        Collaborative Group Classes
                        </h3>
                        <div className={`feature-text-box ${visible ? 'show' : ''}`}>
                            <span>
                                <i>Learn Together: </i>
                                <span>
                                    {" "}
                                    COSMO also offers the opportunity for students 
                                    to attend group classes, where they can interact,
                                     share ideas, and collaborate with peers. Learning becomes 
                                     a cosmic adventure when you explore together!
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className={`single-feature ${visible ? 'show' : ''}`}>
                    <div className="single-feature-img-container">
                        <img
                            className="single-feature-img"
                            loading="lazy"
                            alt=""
                            src="/achievement-2@2x.png"
                        />
                    </div>
                    <div className="feature-text-container">
                        <h3 className="feature-text-header">
                        Achievement Showcase
                        </h3>
                        <div className={`feature-text-box ${visible ? 'show' : ''}`}>
                            <span>
                                <i>Celebrate Success: </i>
                                <span>
                                    {" "}
                                    COSMO believes in recognizing and celebrating every 
                                    achievement, big or small. Students can showcase their 
                                    accomplishments, from mastering a programming language 
                                    to acing a math quiz, in their personalized achievement 
                                    portfolio.
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={`single-feature ${visible ? 'show' : ''}`}>
                    <div className="single-feature-img-container">
                        <img
                            className="single-feature-img"
                            loading="lazy"
                            alt=""
                            src="/safety-3@2x.png"
                        />
                    </div>
                    <div className="feature-text-container">
                        <h3 className="feature-text-header">
                        Safety and Supportive Environment
                        </h3>
                        <div className={`feature-text-box ${visible ? 'show' : ''}`}>
                            <span>
                                <i>Cosmic Community: </i>
                                <span>
                                    {" "}
                                    At COSMO, we prioritize creating a safe and supportive learning environment 
                                    where students can thrive. We foster a sense of belonging and encourage
                                    open communication.
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                {/* <div className="single-feature">
                    <div className="project-learning-child" />
                    <div className="project-image-container">
                        <div className="project-image">
                            <img
                                className="planning-icon"
                                loading="lazy"
                                alt=""
                                src="/planning@2x.png"
                            />
                        </div>
                        <h3 className="project-based-learning">Project-Based Learning</h3>
                    </div>
                    <div className="project-description">
                        <div className="boost-your-skills-container">
                            <span>
                                <i>Boost Your Skills:</i>
                                <span>
                                    {" "}
                                    Our curriculum includes engaging projects that challenge
                                    students to apply their knowledge in real-world scenarios.
                                    These projects enhance problem-solving skills, creativity, and
                                    critical thinking.rs
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="single-feature">
                    <div className="safety-supportive-child" />
                    <div className="safety-image-container">
                        <div className="safety-image">
                            <img
                                className="safety-icon"
                                loading="lazy"
                                alt=""
                                src="/p/safety-3@2x.png"
                            />
                        </div>
                        <h3 className="safety-supportive-h3">Safety and Supportive Environment</h3>
                    </div>
                    <div className="safety-description">
                        <div className="cosmic-community-container">
                            <span>
                                <i>Cosmic Community:</i>
                                <span>
                                    {" "}
                                    At COSMO, we prioritize creating a safe and supportive learning environment
                                    where students can thrive. We foster a sense of belonging and encourage
                                    open communication.
                                </span>
                            </span>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default Features;
