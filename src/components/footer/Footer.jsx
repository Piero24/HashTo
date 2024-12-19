import React from 'react';

// Importing React icons for GitHub and Website link
// Reference: https://react-icons.github.io/react-icons/
// https://www.npmjs.com/package/react-icons
import { FaGithub } from "react-icons/fa"; // GitHub icon
import { TbWorld } from "react-icons/tb";   // World icon (for website)

import Section from '../Section'; // Section component for layout


const Footer = () => {
    return (
        <div>
            <Section> {/* Section wrapper for consistent layout */}
                <div className="bg-color-15 flex justify-center items-center text-color-3 px-10 py-3">
                    {/* Footer content centered and styled */}
                    <div className="text-center sm:text-left space-y-1">
                        <span>© 2025 Pietrobon Andrea. </span>
                        <span className="block sm:inline">All Rights Reserved.</span>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Footer;