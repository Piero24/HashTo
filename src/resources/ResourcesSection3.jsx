import React from 'react';

import Section from '../components/Section';
import Card from '../components/Card';
// https://uiverse.io/aadium/fluffy-vampirebat-77

import { books } from '../docs/books';

import { github_project_url } from '../constants';
// https://github.com/alfaarghya/alfa-leetcode-api?tab=readme-ov-file
// https://alfa-leetcode-api.onrender.com/select?titleSlug=selected-question

// https://www.npmjs.com/package/leetcode-query
const ResourcesSection3 = () => {

    const generateSlug = (title) => title.toLowerCase().replace(/\s+/g, '-');

    return (
        <div>
            <Section>
                <div className='bg-color-2 text-color-3'>
                    <div className='flex justify-center md:mx-15'>
                        <div className='w-full mx-5'>
                            <div className="p-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 justify-items-center">
                                {books.map((book) => (
                                    <div className={book.hidden ? 'hidden' : ''}>
                                        <div>
                                            <Card
                                                title={`${book.title}`}
                                                description={`${book.short_intro}`}
                                                image={`${book.cover}`}
                                                slug={generateSlug(book.title)}
                                                buttonTitle="See the Exercises"
                                            />
                                        </div>
                                    </div>
                                ))}
                                <div>
                                    <Card
                                        title="New Book Here"
                                        description="A new book is currently being worked on. Stay tuned for updates!"
                                        image=""
                                        url={github_project_url}
                                        buttonIsVisible={true}
                                        buttonTitle="Vote the book on GitHub"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-32 w-full'></div>
                </div>
            </Section>
        </div>
    );
};

export default ResourcesSection3;