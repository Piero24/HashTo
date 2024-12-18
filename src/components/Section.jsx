import React from 'react';

const Section = ({
    children
}) => {

    return (
        <div>
            <div className='mx-auto min-w-[340px] max-w-[155rem]'>
                {children}
            </div>
        </div>
    );
};

export default Section;