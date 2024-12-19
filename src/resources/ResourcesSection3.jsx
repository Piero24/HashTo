import React from 'react';

import Section from '../components/Section'; // Importing the Section component
import Card from '../components/Card'; // Importing the Card component

// Importing the books data from a local file
import { books } from '../docs/books';

// Importing the GitHub project URL for external link
import { github_project_url } from '../constants';

// ResourcesSection3 component for displaying book cards
const ResourcesSection3 = () => {

    // Function to generate slugs for book titles
    const generateSlug = (title) => title.toLowerCase().replace(/\s+/g, '-');

    return (
        <div>
            <Section>
                <div className='bg-color-2 text-color-3'>
                    {/* Wrapper for the content section with grid layout */}
                    <div className='flex justify-center md:mx-15'>
                        <div className='w-full mx-5'>
                            {/* Grid layout for book cards */}
                            <div className="p-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 justify-items-center">
                                {/* Mapping over books array to display each book card */}
                                {books.map((book) => (
                                    <div className={book.hidden ? 'hidden' : ''} key={book.id}>
                                        <div>
                                            <Card
                                                title={`${book.title}`} // Displaying the book title
                                                description={`${book.short_intro}`} // Short description of the book
                                                image={`${book.cover}`} // Book cover image
                                                slug={generateSlug(book.title)} // Slug generated for URL
                                                buttonTitle="See the Exercises" // Button text
                                            />
                                        </div>
                                    </div>
                                ))}
                                {/* Placeholder for new book card with link to GitHub project */}
                                <div>
                                    <Card
                                        title="New Book Here" // Title for the new book placeholder
                                        description="A new book is currently being worked on. Stay tuned for updates!" // Description for the new book
                                        image="" // No image for the placeholder
                                        url={github_project_url} // Linking to the GitHub project URL
                                        buttonIsVisible={true} // Button is visible for this card
                                        buttonTitle="Vote the book on GitHub" // Button text
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Adding spacing at the bottom */}
                    <div className='h-32 w-full'></div>
                </div>
            </Section>
        </div>
    );
};

export default ResourcesSection3;