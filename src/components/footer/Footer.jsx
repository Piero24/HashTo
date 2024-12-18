import React from 'react';

// https://react-icons.github.io/react-icons/
// https://www.npmjs.com/package/react-icons
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

import { github_url, website_url} from '../../constants/';

import Section from '../Section';

const Footer = () => {

    return (
        <div>
            <Section>
                <div className="bg-color-15 flex justify-center items-center text-color-3 px-10 py-3">
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