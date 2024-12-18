import React from "react";
import { PiWarningFill } from "react-icons/pi";

import Section from "../components/Section";

/**
 * ResourcesSection2 displays a disclaimer message about the website's purpose,
 * clarifying the usage of LeetCode problems as references to book exercises.
 */
const ResourcesSection2 = () => {
    return (
        <Section>
            {/* Main Disclaimer Section */}
            <div className="bg-gray-900 flex justify-center items-center relative">
                {/* Floating Glass Effect */}
                <div className="
                    relative 
                    bg-gray-800 
                    shadow-xl
                    rounded-lg
                    p-8
                    w-11/12
                    md:w-5/6
                    lg:w-3/4
                    mx-auto
                    border 
                    border-yellow-500
                    transform
                    transition
                    duration-300
                    hover:scale-105
                    hover:shadow-yellow-400/50"
                >
          
                {/* Disclaimer Header */}
                <div className="flex justify-center items-center text-yellow-400 space-x-2 mb-4">
                    <PiWarningFill className="text-3xl animate-pulse" />
                    <span className="font-bold text-xl uppercase tracking-wider text-yellow-300">
                        Disclaimer
                    </span>
                    <PiWarningFill className="text-3xl animate-pulse" />
                </div>
                
                {/* Disclaimer Content */}
                <div className="text-gray-300 text-center leading-relaxed space-y-4">
                    <p>
                        This website helps users locate <strong className="text-yellow-300">LeetCode problems</strong> that align with exercise titles from popular books and courses, providing a platform to test and refine their solutions to the problems discussed in those materials.
                        <strong className="text-yellow-300"> No book content is hosted or shared here.</strong>
                    </p>
                    <p>
                        We fully respect the intellectual property of authors and publishers. This tool serves only as a <strong className="text-yellow-300">reference guide</strong> to publicly available LeetCode problems and does not reproduce any proprietary material. We do not endorse or encourage any improper use of this list.
                    </p>
                    <p>
                        Instead, we strongly encourage users to purchase these books and courses to gain a deeper understanding of the concepts, benefit from detailed explanations, and acquire valuable insights into solving the problems effectively. Supporting the authors and creators ensures access to high-quality educational resources.
                    </p>
                </div>

                {/* Floating Emoji Decorations */}
                <div className="absolute -top-6 right-8 text-gray-500 text-5xl rotate-12">😎</div>
                <div className="absolute -top-6 left-8 text-gray-500 text-4xl -rotate-12">🤓</div>
                <div className="absolute -bottom-5 left-[65%] text-gray-500 text-5xl -rotate-2">👨‍💻</div>
            </div>
        </div>
        
        {/* Spacer */}
        <div className="h-20 w-full"></div>
        </Section>
    );
};

export default ResourcesSection2;