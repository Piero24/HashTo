import React from 'react';
import TypingEffect from "react-typing-effect";
import Section from '../components/Section';

// Optimized image import for better performance
import BookImage from "../assets/webp/bookEx.webp";

/**
 * ResourcesSection1 highlights the main exercise section with a dynamic typing effect
 * and an accompanying illustrative image.
 */
const ResourcesSection1 = () => {
    return (
        <Section>
            <div className="lg:flex">
                {/* Left Panel: Heading and Typing Effect */}
                <div className="flex flex-col justify-center items-center md:items-start h-[45.5vh] lg:h-[90.5vh] md:px-20 max-h-[1300px]"> 
                    <h1 className="text-[4rem] md:text-[6rem] xl:text-[8rem] font-bold text-white leading-none">
                        Exercises
                    </h1>
                    <TypingEffectContainer />
                </div>

                {/* Right Panel: Display Image */}
                <div className="flex justify-center items-center">
                    <div className="image-container opacity-90 px-5 md:px-32 lg:px-10">
                        <img 
                            src={BookImage}
                            alt="Illustration of a book"
                            className="max-h-full w-auto imgSafari"
                            width="1350"
                            height="800"
                        />
                    </div>
                </div>
            </div>

            {/* Spacer for mobile devices */}
            <div className="h-24 lg:hidden"></div>
        </Section>
    );
};

/**
 * TypingEffectContainer handles the dynamic typing animation with
 * motivational phrases to engage users.
 */
const TypingEffectContainer = () => {
    const typingPhrases = [
        "Level up your coding game!",
        "Crack books, master LeetCode!",
        "Map books to coding greatness!",
        "Bridge books to practice!",
        "Theory to LeetCode success!",
    ];

    return (
        <div className="flex justify-start items-center">
            <TypingEffect
                text={typingPhrases}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={1000}
                cursorClassName="custom-cursor"
                displayTextRenderer={(text) => (
                    <h1 className="text-lg md:text-2xl xl:text-4xl font-bold text-[#226356] leading-tight">
                        {text}
                    </h1>
                )}
            />
        </div>
    );
};

export default ResourcesSection1;