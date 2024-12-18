import React from 'react';

import { SiLeetcode } from "react-icons/si";

import Section from '../components/Section';

const HomeSection1 = () => {

    return (
        <div>
            <Section>
                <div className='h-[90.5vh] bg-color-2 flex justify-center items-center text-color-3'>
                    <div className='flex justify-center'>
                        <div className="flex flex-col items-center justify-center">
                            <div>
                                <h1 className="buttonHashTo" data-text="Awesome">
                                    <span className="actual-text text-shadow">&nbsp;HashTo&nbsp;</span>
                                    <span aria-hidden="true" className="hover-text">&nbsp;HashTo&nbsp;</span>
                                </h1>
                            </div>
                            <div className='mt-2 sm:mt-0'>
                                <h2 className='text-color-9 text-sm sm:text-[1.3rem] flex justify-center items-center'>
                                    Map Books Exercise into&nbsp;<SiLeetcode className='text-color-4'/>&nbsp;LeetCode Problems
                                </h2>
                            </div>
                            <div className='flex justify-center w-[70%] mt-12'>
                                <button 
                                    onClick={() => window.location.href = '/books'}
                                    className="buttonHomePage"
                                >
                                        Exercises
                                </button>
                                {/* <button className="buttonHomePage">Cheet Sheet</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default HomeSection1;