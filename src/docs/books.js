import ctciCover from '../assets/ctci.jpg';
import eopiCover from '../assets/eopi.jpg';
import gtciCover from '../assets/gtci.png';
import neetcodeCover from '../assets/neetcode.png';
import algomapCover from '../assets/algomap.png';


export const books = [
    {
        id: 0,
        title: "Cracking the Coding Interview",
        authors: ["Gayle Laakmann McDowell"],
        short_intro: "A comprehensive guide by Gayle Laakmann McDowell that prepares you for coding interviews",
        cover: ctciCover,
        path: "ctci",
        intro: `
            <div className="space-y-7 text-justify">
                <p>
                I am not a recruiter. I am a software engineer. And as such, I know what it's like to be asked to whip up brilliant algorithms on the spot and then write flawless code on a whiteboard. I've been through this as a candidate and as an interviewer.
                </p>
                <p>
                <strong>Cracking the Coding Interview, 6th Edition</strong> is here to help you through this process, teaching you what you need to know and enabling you to perform at your very best. I've coached and interviewed hundreds of software engineers. The result is this book.
                </p>
                <p>
                Learn how to uncover the hints and hidden details in a question, discover how to break down a problem into manageable chunks, develop techniques to unstick yourself when stuck, learn (or re-learn) core computer science concepts, and practice on 189 interview questions and solutions.
                </p>
                <p>
                These interview questions are real; they are not pulled out of computer science textbooks. They reflect what's truly being asked at the top companies, so that you can be as prepared as possible.
                </p>
            </div>
            `,
        amazon: [
            {
                id: 0,
                country: "US",
                link: "https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850",
            },
            {
                id: 1,
                country: "UK",
                link: "https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850",
            },
            {
                id: 2,
                country: "DE",
                link: "https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850",
            },
            {
                id: 3,
                country: "FR",
                link: "https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850",
            },
            {
                id: 4,
                country: "IT",
                link: "https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850",
            },
            {
                id: 5,
                country: "ES",
                link: "https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850",
            },
        ],
        link: "",
        hidden: false,
    },
    {
        id: 1,
        title: "Elements of Programming Interviews",
        authors: ["Adnan Aziz", "Tsung-Hsien Lee", "Amit Prakash"],
        short_intro: "A collection of over 300 problems with detailed solutions, including 100 figures, 250 tested programs, and 150 variants",
        cover: eopiCover,
        path: "epi",
        intro: `
            <div className="space-y-8 text-justify">
                <p>
                    Adnan Aziz is a Research Scientist at Facebook. Previously, he was a
                    professor at the Department of Electrical and Computer Engineering at The
                    University of Texas at Austin, where he conducted research and taught
                    classes in applied algorithms. He received his Ph.D. from The University of
                    California at Berkeley; his undergraduate degree is from Indian Institutes of
                    Technology Kanpur. He has worked at Google, Qualcomm, IBM, and several
                    software startups. When not designing algorithms, he plays with his children,
                    Laila, Imran, and Omar.
                </p>
                <p className="pt-3">
                    Tsung-Hsien Lee is a Senior Software Engineer at Uber. Previously, he worked
                    as a Software Engineer at Google and as Software Engineer Intern at
                    Facebook. He received both his M.S. and undergraduate degrees from National
                    Tsing Hua University. He has a passion for designing and implementing
                    algorithms. He likes to apply algorithms to every aspect of his life. He
                    takes special pride in helping to organize Google Code Jam 2014 and 2015.
                </p>
                <p>
                    Amit Prakash is a co-founder and CTO of ThoughtSpot, a Silicon Valley
                    startup. Previously, he was a Member of the Technical Staff at Google, where
                    he worked primarily on machine learning problems that arise in the context
                    of online advertising. Before that he worked at Microsoft in the web search
                    team. He received his Ph.D. from The University of Texas at Austin; his
                    undergraduate degree is from Indian Institutes of Technology Kanpur. When he
                    is not improving business intelligence, he indulges in his passion for
                    puzzles, movies, travel, and adventures with Nidhi and Aanya.
                </p>
            </div>
            `,
        amazon: [
            {
                id: 0,
                country: "US",
                link: "https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850",
            },
            {
                id: 1,
                country: "UK",
                link: "https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850",
            },
            {
                id: 2,
                country: "DE",
                link: "https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850",
            },
            {
                id: 3,
                country: "FR",
                link: "https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850",
            },
            {
                id: 4,
                country: "IT",
                link: "https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850",
            },
            {
                id: 5,
                country: "ES",
                link: "https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850",
            },
        ],
        link: "",
        hidden: false,
    },
    {
        id: 2,
        title: "Grokking the Coding Interview",
        authors: [],
        short_intro: "Coding interviews are getting harder every day. A few years back, brushing up on key data structures and going through 50-75 coding ",
        cover: gtciCover,
        path: "gci",
        intro: `
            <div className="space-y-8 text-justify">
                <p>
                    Coding interviews are getting harder every day. A few years back, brushing up on key data structures and going through 50-75 coding interview questions was more than enough prep for an interview. Today, everyone has access to massive sets of coding problems, and they have gotten more difficult to account for that. The process has gotten more competitive.
                </p>
                <p className="pt-3">
                    When our team sat together to brainstorm on ideas to make the interview process easier for candidates, we realized quickly that one skill helped us the most when we were preparing for coding interviews: "the ability to map a new problem to an already known problem."
                </p>
                <p>
                    To help candidates with that, we have come up with a list of 27 common coding patterns to help solve coding questions. The idea is, once you are familiar with a pattern, you'll be able to solve dozens of problems with it.
                </p>
                <p>
                    The techniques taught in this course have helped developers land jobs in top companies including Google, Facebook, Amazon, and Microsoft.
                </p>
            </div>
            `,
        amazon: [],
        link: "https://www.designgurus.io/course/grokking-the-coding-interview?gad_source=1&gclid=CjwKCAiA34S7BhAtEiwACZzv4Vsr59xJb4u756LzRqPdKuUMcs8SiYPt8Bn4MT8MxzygeWPg2vGpcRoCYH8QAvD_BwE",
        hidden: false,
    },
    {
        id: 3,
        title: "Neetcode Roadmap",
        authors: [],
        short_intro: "I created NeetCode in 2020 when I was unemployed and couldn't find a job. I received so many messages from others who got jobs after watching my videos. It felt so gratifying and kept me going.",
        cover: neetcodeCover,
        path: "nr",
        intro: "Arrays and Strings...",
        amazon: [],
        link: "https://neetcode.io/pro",
        hidden: false,
    },
    {
        id: 4,
        title: "AlgoMap",
        authors: [],
        short_intro: "Your live instructor is the one and only Greg Hogg - the internet's teacher of data structures and algorithms.",
        cover: algomapCover,
        path: "am",
        intro: "Arrays and Strings...",
        amazon: [],
        link: "https://algomap.io/bootcamp",
        hidden: false,
    },
];