import React from 'react';

import { PiWarningFill } from "react-icons/pi";

import Section from '../components/Section';

const BookSection2 = () => {

    return (
        <div>
            <Section>
                <div className='bg-yellow-200 flex justify-center items-center'>
                    <div>
                        <div className='flex justify-center items-center my-1'>
                            <div>
                                <PiWarningFill />
                            </div>
                            <span>
                                &nbsp;<strong>DISCLAIMER</strong>&nbsp;
                            </span>
                            <div>
                                <PiWarningFill />
                            </div>
                        </div>
                        <div className='flex-col justify-center items-center text-sm my-1'>
                            <div className='text-center'>
                                This website is solely intended to help users easily find corresponding LeetCode problems based on the titles of exercises from popular books and courses. <strong>No content from these books or courses is hosted, shared, or reproduced here.</strong>
                            </div>
                            <div className='text-center'>
                                We respect the intellectual property rights of all authors and publishers. This tool only provides a reference for publicly available LeetCode problems and does not include any proprietary material from external resources.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-20 w-full'></div>
            </Section>
        </div>
    );
};

export default BookSection2;