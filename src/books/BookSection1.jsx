import React from 'react';

import TypingEffect from "react-typing-effect";

import Section from '../components/Section';

import BookImg from "../assets/webp/bookEx.webp";


const BookSection1 = () => {
    return (
        <div>
            <Section>
                <div className='lg:flex'>
                    <div className=''>
                        <div className="h-[45.5vh] lg:h-[90.5vh] md:px-20 flex flex-col justify-center md:items-start items-center">
                            <h1 className="text-[4rem] md:text-[6rem] xl:text-[8rem] font-bold text-white leading-none">
                                Exercises
                            </h1>
                            <div className="flex justify-start items-center">
                                <TypingEffect
                                    text={[
                                        "Level up your coding game!",
                                        "Crack books, master LeetCode!",
                                        "Map books to coding greatness!",
                                        "Bridge books to practice!",
                                        "Theory to LeetCode success!",
                                    ]}
                                    speed={100}
                                    eraseSpeed={50}
                                    typingDelay={500}
                                    eraseDelay={1000}
                                    cursorClassName="custom-cursor"
                                    displayTextRenderer={(text, i) => (
                                        <h1 className="text-lg md:text-2xl xl:text-4xl font-bold text-[#226356] leading-tight">
                                            {text}
                                        </h1>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='opacity-90 px-5 md:px-32 lg:px-10'>
                            <img 
                                src={BookImg}
                                alt="Book"
                                className="max-h-full w-auto"
                            />
                        </div>
                    </div>
                </div>
                <div className="h-24 lg:hidden"></div>
            </Section>
        </div>
    );
};

export default BookSection1;