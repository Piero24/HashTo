import React from "react";
import { useParams } from "react-router-dom";

// https://flowbite-react.com/docs/components/table
import { Table } from "flowbite-react";

import { books } from "../docs/books";
import { leetcode_questions } from "../docs/leetcode";

// https://react-icons.github.io/react-icons/
// https://www.npmjs.com/package/react-icons
import { FaVideo } from "react-icons/fa";
import { BiSolidLock } from "react-icons/bi";


// Dynamic import for question data based on the book's path
const importQuestions = async (path) => {
    try {
      switch (path) {
        case "lt75":
            return (await import("../docs/lt75")).lt75_questions;
        default:
            console.warn(`Unknown path: ${path}`);
            return [];
      }
    } catch (error) {
      console.error(`Failed to load questions for path "${path}":`, error.message);
      return [];
    }
  };


const LeetCodeTableOfContents = () => {
    const { title } = useParams();

    const generateSlug = (title) => title.toLowerCase().replace(/\s+/g, "-");
    const book = books.find((b) => generateSlug(b.title) === title);

    if (!book || book.hidden) {
        return <div className="text-white text-center py-10">Book not found or is unavailable.</div>;
    }

    // State to store questions
    const [questions, setQuestions] = React.useState([]);

    // Fetch questions dynamically when the component mounts
    React.useEffect(() => {
        const loadQuestions = async () => {
        const data = await importQuestions(book.path);
        setQuestions(data);
        };

        loadQuestions();
    }, [book.path]);

    return (
        <div>
            <div className="dark overflow-x-auto">
                <Table hoverable>
                    <Table.Head className="text-center">
                        <Table.HeadCell>Number</Table.HeadCell>
                        <Table.HeadCell>Leetcode Number</Table.HeadCell>
                        <Table.HeadCell>Title</Table.HeadCell>
                        <Table.HeadCell>Difficulty</Table.HeadCell>
                        <Table.HeadCell>Video</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y text-center">
                        {/* Iterate through categories */}
                        {questions.map((section, sectionIndex) => (
                            <>
                                {/* Category Row */}
                                <Table.Row
                                    key={`category-${sectionIndex}`}
                                    className="bg-gray-100 dark:bg-gray-700 text-start hoover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <Table.Cell colSpan={8} className="font-bold">
                                        {section.category_title || "Category"}
                                    </Table.Cell>
                                </Table.Row>
                                {/* Question Rows */}
                                {section.category.map((question, index) => {
                                    // Find matching leetcode data
                                    const leetcodeData = leetcode_questions.find(
                                        (q) => q.id === question.leetcode_number
                                    ) || { title: "N/A", link: "#", level: "N/A", video: "N/A" };

                                    // Video column
                                    const videoContent = leetcodeData.video !== "N/A" && leetcodeData.video ? (
                                        <a
                                            href={leetcodeData.video}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:underline"
                                        >
                                            <FaVideo className="inline text-lg" />
                                        </a>
                                    ) : (
                                        "N/A"
                                    );

                                    return (
                                        <Table.Row
                                            key={`question-${sectionIndex}-${index}`}
                                            className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                        >
                                            <Table.Cell>{question.number}</Table.Cell>
                                            <Table.Cell>{question.leetcode_number || "-"}</Table.Cell>
                                            <Table.Cell>
                                                {leetcodeData.link && leetcodeData.title !== "N/A" ? (
                                                    <a
                                                        href={leetcodeData.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-500 hover:underline flex justify-center items-center"
                                                        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                                                    >
                                                        {leetcodeData.premium && (
                                                            <BiSolidLock 
                                                                style={{ 
                                                                    color: "#FFA117", 
                                                                    marginRight: "4px", 
                                                                    fontSize: "1 rem", /* Set a fixed size */
                                                                    flexShrink: 0 /* Prevent the icon from shrinking */
                                                                }} 
                                                            />
                                                        )}
                                                        <span>{leetcodeData.title}</span>
                                                    </a>
                                                ) : (
                                                    <div className="flex justify-center">-</div>
                                                )}
                                            </Table.Cell>
                                            <Table.Cell
                                                className={`${
                                                    leetcodeData.level === "Easy"
                                                        ? "text-[rgb(0_175_155/var(--tw-text-opacity))]"
                                                        : leetcodeData.level === "Medium"
                                                        ? "text-[rgb(255_184_0/var(--tw-text-opacity))]"
                                                        : leetcodeData.level === "Hard"
                                                        ? "text-[rgb(255_45_85/var(--tw-text-opacity))]"
                                                        : ""
                                                }`}
                                            >
                                                {leetcodeData.level}
                                            </Table.Cell>
                                            <Table.Cell>{videoContent}</Table.Cell> {/* Video column */}
                                        </Table.Row>
                                    );
                                })}
                            </>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default LeetCodeTableOfContents;