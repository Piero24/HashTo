import React from 'react';

// Importing React icons for the sparkles icon
// Reference: https://react-icons.github.io/react-icons/
// https://www.npmjs.com/package/react-icons
import { HiOutlineSparkles } from "react-icons/hi2";

const Card = ({
    title = 'N/A', // Default value if no title is provided
    description = 'N/A', // Default value if no description is provided
    image = '', // Default to empty string for no image
    buttonIsVisible = true, // Controls the visibility of the button
    slug = 'a', // Default slug used in case no slug is provided
    buttonTitle = 'N/A', // Default button title if not provided
    url = '', // URL for the button, default is empty string
}) => {
    return (
        <div>
            <div className='flex my-5'>
                <div className={`card border-[3px] ${!image ? 'border-dashed border-color-9' : 'border-[#00a867] bg-[#0e1412]'}`}>
                    <div className="h-40 mx-12 mt-3 mb-5 flex justify-center items-center">
                        {/* Conditional rendering of image or icon */}
                        {image ? ( 
                            <img src={image} alt={title} className="h-full object-contain" /> // Added alt for accessibility
                        ) : (
                            <HiOutlineSparkles className='h-[3rem] w-[3rem] sm:h-[5rem] sm:w-[5rem] text-gray-400' /> // Sparkles icon with visibility styling
                        )}
                    </div>
                    <div className='flex flex-col justify-center items-center text-center mx-2'>
                        <div className='text-lg w-56'>
                            <span>{title}</span> {/* Title of the card */}
                        </div>
                        <div className="text-xs line-clamp-2 w-64 text-color-9 my-2">
                            <span>{description}</span> {/* Description with line clamp for text overflow */}
                        </div>
                        {/* Button visibility is controlled by buttonIsVisible */}
                        {buttonIsVisible && (
                            <a 
                                href={url && url.trim() ? url : `/book/${slug}`} 
                                className="card-button" 
                                target={url && url.trim() ? "_blank" : "_self"} 
                                rel={url && url.trim() ? "noopener noreferrer" : ""} // Security measure for external links
                            >
                                <button className="App-button">
                                    {buttonTitle} {/* Button title text */}
                                </button>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;