import React from 'react';

// https://react-icons.github.io/react-icons/
// https://www.npmjs.com/package/react-icons
import { HiOutlineSparkles } from "react-icons/hi2";

const Card = ({
    title = 'N/A',
    description = 'N/A',
    image = '', // Changed default to empty string
    buttonIsVisible = true,
    slug = 'a',
    buttonTitle = 'N/A',
    url = '',
}) => {
    return (
        <div>
            <div className='flex my-5'>
                <div className={`card border-[3px] ${!image ? 'border-dashed border-color-9' : 'border-[#00a867] bg-[#0e1412]'}`}>
                    <div className="h-40 mx-12 mt-3 mb-5 flex justify-center items-center"> {/* Added flex for centering */}
                        {image ? ( // Conditional rendering for image or icon
                            <img src={image} alt={title} className="h-full object-contain" /> // Added alt attribute
                        ) : (
                            <HiOutlineSparkles className='h-[3rem] w-[3rem] sm:h-[5rem] sm:w-[5rem] text-gray-400' /> // Added text-gray-400 for better visibility
                        )}
                    </div>
                    <div className='flex flex-col justify-center items-center text-center mx-2'>
                        <div className='text-lg w-56'>
                            <span>{title}</span>
                        </div>
                        <div className="text-xs line-clamp-2 w-64 text-color-9 my-2">
                            <span>{description}</span>
                        </div>
                        {buttonIsVisible && (
                            <a 
                                href={url && url.trim() ? url : `/book/${slug}`} 
                                className="card-button" 
                                target={url && url.trim() ? "_blank" : "_self"} 
                                rel={url && url.trim() ? "noopener noreferrer" : ""}
                            >
                                <button className="App-button">
                                    {buttonTitle}
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