import React from 'react';

import { PiWarningFill } from "react-icons/pi";

import Section from '../components/Section';

const BookSection2 = () => {

    return (
        <div>
            <Section>
                <div className="bg-gray-900 flex justify-center items-center relative">
                    {/* Floating Glass Effect */}
                    <div className="relative bg-gray-800 shadow-xl rounded-lg p-8 w-11/12 md:w-5/6 lg:w-3/4 mx-auto border border-yellow-500 transform transition duration-300 hover:scale-105 hover:shadow-yellow-400/50">
                        {/* Disclaimer Header */}
                        <div className="flex justify-center items-center text-yellow-400 space-x-2 mb-4">
                            <PiWarningFill className="text-3xl animate-pulse" />
                            <span className="font-bold text-xl uppercase tracking-wider text-yellow-300">
                                Disclaimer
                            </span>
                            <PiWarningFill className="text-3xl animate-pulse" />
                        </div>
                        {/* Disclaimer Content */}
                        <div className="text-gray-300 text-center leading-relaxed space-y-4">
                            <p>
                                This website helps users find <strong className="text-yellow-300">LeetCode problems</strong> based on exercise titles from popular books and courses. 
                                <strong className="text-yellow-300"> No book content is hosted or shared here.</strong>
                            </p>
                            <p>
                                We fully respect the intellectual property of authors and publishers. 
                                This tool serves only as a <strong className="text-yellow-300">reference guide</strong> to publicly available LeetCode problems and does not reproduce any proprietary material.
                            </p>
                        </div>
                        {/* Cool Glasses Emoji */}
                        <div className="absolute -top-6 right-8 text-gray-500 text-5xl rotate-12">😎</div>
                        <div className="absolute -top-6 left-8 text-gray-500 text-4xl -rotate-12">🤓</div>
                        <div className="absolute -bottom-5 left-[65%] text-gray-500 text-5xl -rotate-2">👨‍💻</div>
                    </div>
                </div>
                <div className='h-20 w-full'></div>
            </Section>
        </div>
    );
};

export default BookSection2;