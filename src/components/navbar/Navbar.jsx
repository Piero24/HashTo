import React from 'react';

import { useNavigate } from 'react-router-dom';

// https://react-icons.github.io/react-icons/
// https://www.npmjs.com/package/react-icons
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

import { github_url, website_url} from '../../constants/';

import Section from '../Section';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav>
            <Section>
                <div className='bg-color-2 px-2 sm:px-10 py-3'>
                    <div className="bg-white/10 backdrop-blur-lg border-2 border-white/20 rounded-2xl sm:rounded-3xl shadow-[0px_15px_10px_rgba(0,0,0,0.35)]">
                        <div className='w-full max-w-[155rem] flex justify-between px-5 sm:px-10 py-2 sm:py-3 mx-auto text-color-3'>
                            <div className='h-8 sm:h-10'>
                                <img 
                                    src={'/src/assets/logo.svg'} 
                                    alt="Logo"
                                    className="h-full coh-full object-contain"
                                    onClick={() => navigate('/')}
                                />
                            </div>
                            <div className='flex justify-between items-center text-2xl'>
                                <div className="mr-14 text-lg transform transition duration-300 hidden sm:block hover:scale-105 hover:text-color-4">
                                    <a 
                                        href=""
                                        onClick={() => navigate('/books')}
                                    >
                                        Exercises
                                    </a>
                                </div>
                                <div className='flex justify-between items-center space-x-10 mx-3 sm:mx-0'>
                                    <div className="transform transition duration-300 hover:scale-110 hover:text-color-4">
                                        <a 
                                            href={`${website_url}`}
                                        >
                                            <TbWorld />
                                        </a>
                                    </div>
                                    <div className="transform transition duration-300 hover:scale-110 hover:text-color-4">
                                        <a href={`${github_url}`}>
                                            <FaGithub />
                                        </a>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </nav>
    );
};

export default Navbar;