import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import { motion } from 'framer-motion'

const Hero = () => {
    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false;

    return (
        <div className='hero'>
            <div className="blur hero-blur"></div>
            <a href='#' className="btn-fix">-- ScrollBar -></a>
            <div className="left-h">
                <Header />

                {/* the best ad */}
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile ? '165px' : '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    ></motion.div>
                    <span>the best fitness club in the town</span>
                </div>

                {/* hero heading */}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>

                {/* figures */}
                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>EXPERT COACHES</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>MEMBERS JOINED</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>FITNESS PROGRAMS</span>
                    </div>
                </div>

                {/* hero buttons */}
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn">Join Now</button>

                <motion.div
                    className="heart-rate"
                    transition={transition}
                    whileInView={{ right: '4rem' }}
                    initial={{ right: '-1rem' }}
                >
                    <img src={Heart} alt="Heart" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                {/* hero image */}
                <img className='hero_image' src={hero_image} alt="hero_image" />
                <motion.img
                    className='hero_image_back'
                    src={hero_image_back}
                    alt="hero_image_back"
                    transition={transition}
                    whileInView={{ right: '20rem' }}
                    initial={{ right: '11rem' }}
                />

                {/* calories */}
                <motion.div
                    className="calories"
                    transition={transition}
                   
                    initial={{ right: '28rem' }}
                >
                    <img src={Calories} alt="Calories" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero;