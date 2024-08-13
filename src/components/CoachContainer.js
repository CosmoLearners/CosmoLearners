import "./CoachContainer.css"
import CoachTestimonies from "./CoachTestimonies";

const CoachContainer = () => {
    return (
        <div className="coach-container">
            <div className="coach-text-parent">
                <h1 className="coach-text">Meet Our Coaches!</h1>
                <CoachTestimonies />
                <div className="coach-text-description">
                    At Cosmo, our Coaches are more than just tutors; they are mentors,
                    motivators, and educators with a passion for igniting a love of
                    learning in every child. Each Coach is hand-selected for their deep
                    subject matter expertise, creative teaching approach, and an
                    unwavering commitment to student success. They are empathetic
                    communicators, skilled in connecting with students to make learning
                    engaging and effective.
                </div>
            </div>
            <div className="coach-qualities-container-parent">
                <div className="coach-qualities-container">
                    <img
                        className="coach-qualities-container-child"
                        loading="lazy"
                        alt=""
                        src="/rectangle-45@2x.png"
                    />
                </div>
                <div className="qualities-of-our-container">
                    <span className="qualities-of-our-container1">
                        <p className="qualities-of-our-coaches">
                            <span>
                                <span className="qualities-of-our">
                                    Qualities of Our Coaches
                                </span>
                            </span>
                        </p>
                        <p className="blank-line">
                            <span>
                                <span>&nbsp;</span>
                            </span>
                        </p>
                        <ul className="expert-knowledge-our-coaches">
                            <li className="expert-knowledge-our-coaches1">
                                <span>
                                    <b className="expert-knowledge">Expert Knowledge</b>
                                    <span>
                                        : Our Coaches possess a profound understanding of their
                                        subjects, ensuring your child learns from the best.
                                    </span>
                                </span>
                            </li>
                            <li className="engaging-methodologies-they-u">
                                <span>
                                    <b className="engaging-methodologies">
                                        Engaging Methodologies
                                    </b>
                                    <span className="they-use-innovative">
                                        : They use innovative, adaptive techniques tailored to
                                        your child's unique learning style.
                                    </span>
                                </span>
                            </li>
                            <li className="inspirational-mentors-with-th">
                                <span>
                                    <b className="inspirational-mentors">
                                        Inspirational Mentors
                                    </b>
                                    <span className="with-their-enthusiastic">
                                        : With their enthusiastic and supportive nature, our
                                        Coaches do more than teach; they inspire.
                                    </span>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <b className="empathetic-guides">Empathetic Guides</b>
                                    <span className="they-listen-and">
                                        : They listen and adjust, providing emotional and academic
                                        support to foster confidence and independence.
                                    </span>
                                </span>
                            </li>
                        </ul>
                    </span>
                </div>
            </div>


        </div>
    );

};

export default CoachContainer; 