import React, { useState } from "react";
import { useParams } from 'react-router-dom';

import { SiLeetcode } from "react-icons/si";
import { books } from '../docs/books';

import { github_project_url } from '../constants/';

import Section from '../components/Section';
import TableOfContents from '../components/TableOfContents';

const ProductSection3 = () => {
    const { title } = useParams();

    const generateSlug = (title) => title.toLowerCase().replace(/\s+/g, '-');

    const book = books.find((b) => generateSlug(b.title) === title);

    if (!book || book.hidden) {
    return <div>-</div>;
    }

    return (
        <div>
            <Section>
                <div className="w-full">
                <div className="w-full text-center text-white text-4xl">
                    <h2 className="font-bold flex items-center justify-center space-x-2">
                        <SiLeetcode className="hidden sm:block text-color-4" />
                        <span>LeetCode Problems</span>
                        <SiLeetcode className="hidden sm:block text-color-4" />
                    </h2>
                    <h4 className="text-color-6 text-xl italic mt-2">{book.title}</h4>
                    <h4 className="text-color-9 text-base mt-5 mb-3 px-10 md:px-44">
                        Help us improve! If you notice any incorrectly assigned exercises or if you know of any that are currently unassigned, 
                        please report it or submit a pull request on <a href={github_project_url} target="_blank" class="text-blue-500">GitHub</a>.
                    </h4>
                </div>
                </div>
                <div className='h-10 w-full'></div>
                <div className="px-5 md:px-10">
                    <TableOfContents />
                </div>
                <div className='h-20 w-full'></div>
                <div className='text-center text-color-9 w-full px-5 sm:px-16 md:px-32'>
                    All solution videos are from the respective channels of <a href="https://www.youtube.com/@NeetCode/" target="_blank" class="text-blue-500">NeetCode</a>, <a href="https://www.youtube.com/@NeetCodeIO" target="_blank" class="text-blue-500">NeetCode.io</a>, <a href="https://www.youtube.com/@techdose4u" target="_blank" class="text-blue-500">Tech Dose</a>, and <a href="https://www.youtube.com/@GregHogg" target="_blank" class="text-blue-500">Greg Hogg</a>. Visit their channels for further explanations and tips for various interviews.
                </div>
                <div className='h-20 w-full'></div>
            </Section>
        </div>
    );
};

export default ProductSection3;