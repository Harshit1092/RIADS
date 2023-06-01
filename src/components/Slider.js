import React from 'react'
import HeroSlider, { Slide } from "hero-slider";

import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";

export const Slider = () => {
    return (
        <div className='h-10'>
        <HeroSlider
            slidingAnimation="left_to_right"
            orientation="horizontal"
            initialSlide={1}
            onBeforeChange={(previousSlide, nextSlide) =>console.log("onBeforeChange", previousSlide, nextSlide)}
            onChange={(nextSlide) => console.log("onChange", nextSlide)}
            onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.33)"
            }}
            settings={{
                slidingDuration: 250,
                slidingDelay: 100,
                shouldAutoplay: true,
                shouldDisplayButtons: true,
                autoplayDuration: 5000,
                height: "90vmin"
            }}
        >
            <Slide
                navDescription="1.jpg"
                background={{
                    backgroundImage:img1,
                    // backgroundAttachment: "fixed"
                }}
            />
            <Slide
                background={{
                    backgroundImage:img2,
                    backgroundAttachment: "fixed"
                }}
            />
            <Slide
                background={{
                    backgroundImage:img3,
                    backgroundAttachment: "fixed"
                }}
            />
            <Slide
                background={{
                    backgroundImage:img4,
                    backgroundAttachment: "fixed"
                }}
            />
            <Slide
                background={{
                    backgroundImage:img5,
                    backgroundAttachment: "fixed"
                }}
            />
            
            
        </HeroSlider>
        </div>
    )
}
