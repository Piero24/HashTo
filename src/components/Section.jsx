import React from 'react';

const Section = ({
    children, // The content to be rendered inside the section
}) => {

    return (
        <div>
            {/* Container with maximum width set to 155rem and minimum width of 340px */}
            <div className='mx-auto min-w-[340px] max-w-[155rem]'>
                {children} {/* Render the passed children elements */}
            </div>
        </div>
    );
};

export default Section;