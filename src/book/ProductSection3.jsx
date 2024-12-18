import React from "react";
import { useParams } from "react-router-dom";

import { SiLeetcode } from "react-icons/si";
import { books } from "../docs/books";

import { github_project_url } from "../constants/";

import Section from "../components/Section";
import BooksTableOfContents from "../components/BooksTableOfContents";
import LeetCodeTableOfContents from "../components/LeetCodeTableOfContents";

/**
 * ProductSection3 displays the table of contents for LeetCode problems
 * related to a specific book, allowing users to view the exercises and
 * contribute improvements through GitHub.
 */
const ProductSection3 = () => {
  const { title } = useParams();

  // Helper function to generate slug from book title
  const generateSlug = (title) => title.toLowerCase().replace(/\s+/g, "-");

  // Find the book based on the slug
  const book = books.find((b) => generateSlug(b.title) === title);

  // Return early if the book is not found or is hidden
  if (!book || book.hidden) {
    return <div>-</div>;
  }

  return (
    <Section>
      {/* Title and description section */}
      <div className="w-full text-center text-white text-4xl">
        <h2 className="font-bold flex items-center justify-center space-x-2">
          <SiLeetcode className="hidden sm:block text-color-4" />
          <span>LeetCode Problems</span>
          <SiLeetcode className="hidden sm:block text-color-4" />
        </h2>
        <h4 className="text-color-6 text-xl italic mt-2">{book.title}</h4>
        <h4 className="text-color-9 text-base mt-5 mb-3 px-10 md:px-44">
          Help us improve! If you notice any incorrectly assigned exercises or
          if you know of any that are currently unassigned, please report it or
          submit a pull request on{" "}
          <a
            href={github_project_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            GitHub
          </a>
          .
        </h4>
      </div>

      {/* Spacer */}
      <div className="h-10 w-full"></div>

      {/* Table of contents for the book */}
      <div className="px-5 md:px-10">
        {book.map ? (
          <BooksTableOfContents />
        ) : (
          <LeetCodeTableOfContents />
        )}
      </div>

      {/* Spacer */}
      <div className="h-20 w-full"></div>

      {/* YouTube channels section */}
      <div className="text-center text-color-9 w-full px-5 sm:px-16 md:px-32">
        All solution videos are from the respective channels of{" "}
        <a
          href="https://www.youtube.com/@NeetCode/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          NeetCode
        </a>
        ,{" "}
        <a
          href="https://www.youtube.com/@NeetCodeIO"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          NeetCode.io
        </a>
        ,{" "}
        <a
          href="https://www.youtube.com/@techdose4u"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Tech Dose
        </a>
        , and{" "}
        <a
          href="https://www.youtube.com/@GregHogg"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Greg Hogg
        </a>
        . Visit their channels for further explanations and tips for various
        interviews.
      </div>

      {/* Spacer */}
      <div className="h-20 w-full"></div>
    </Section>
  );
};

export default ProductSection3;