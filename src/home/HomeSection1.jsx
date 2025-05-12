import React from 'react';

// Importing the LeetCode icon from react-icons
import { SiLeetcode } from "react-icons/si";

import { cheatsheet } from '../constants/';

// Importing the Section component for consistent layout
import Section from '../components/Section';

const HomeSection1 = () => {

    return (
        <div>
            {/* Section component for layout */}
            <Section>
                {/* Main container with a full-height background and centered content */}
                <div className='h-[90.5vh] bg-color-2 flex justify-center items-center text-color-3'>
                    <div className='flex justify-center'>
                        {/* Flex column to center the content */}
                        <div className="flex flex-col items-center justify-center">
                            
                            {/* Header for the HashTo title */}
                            <div>
                                <h1 className="buttonHashTo" data-text="Awesome">
                                    <span className="actual-text text-shadow">&nbsp;HashTo&nbsp;</span>
                                    <span aria-hidden="true" className="hover-text">&nbsp;HashTo&nbsp;</span>
                                </h1>
                            </div>
                            
                            {/* Subtitle with a description of what the app does */}
                            <div className='mt-2 sm:mt-0'>
                                <h2 className='text-color-9 text-sm sm:text-[1.3rem] flex justify-center items-center'>
                                    Map Books Exercise into&nbsp;<SiLeetcode className='text-color-4'/>&nbsp;LeetCode Problems
                                </h2>
                            </div>

                            {/* Button that navigates to the Resources page */}
                            <div className='flex justify-center w-[70%] mt-12 flex-wrap gap-8 md:gap-24'>
                                <button
                                    onClick={() => window.location.href = '/Resources'}
                                    className="buttonHomePage buttonHomePage1"
                                >
                                    Exercises
                                </button>

                                <button
                                    onClick={() => window.open(cheatsheet, '_blank')}
                                    className="buttonHomePage buttonHomePage2"
                                >
                                    Cheat Sheet
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default HomeSection1;