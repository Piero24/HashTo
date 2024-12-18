import React from "react";
import { useParams } from "react-router-dom";
import Section from "../components/Section";
import { books } from "../docs/books";

/**
 * ProductSection1 component displays the details of a specific book.
 * It fetches the book based on the title from the route params and displays its details, cover image, and purchase options.
 */
const ProductSection1 = () => {
  const { title } = useParams();

  /**
   * Generates a URL-friendly slug for the book title.
   * @param {string} title - The title of the book.
   * @returns {string} - The slugified version of the title.
   */
  const generateSlug = (title) => title.toLowerCase().replace(/\s+/g, "-");

  // Find the book that matches the slugified title.
  const book = books.find((b) => generateSlug(b.title) === title);

  if (!book || book.hidden) {
    return <div className="text-center text-gray-500 py-10">Book not found</div>;
  }

  // Handle relative paths for book covers.
  const coverPath = book.cover.startsWith("./src/assets/")
    ? book.cover.replace("./src", "/src")
    : book.cover;

  return (
    <Section>
      <div className="h-24"></div>
      <div className="lg:flex px-10">
        {/* Left Section: Book Cover for larger screens */}
        <div className="hidden lg:flex h-[450px] xl:h-[600px] px-10 flex-shrink-0 items-start">
          <img
            src={coverPath}
            alt={book.title}
            className="max-h-full w-auto"
          />
        </div>

        {/* Right Section: Book Details */}
        <div className="flex-grow">
          {/* Title */}
          <h1 className="text-color-3 py-2 text-5xl bg-[#474747]">{book.title}</h1>

          {/* Authors */}
          <p className="text-color-6 text-xl py-3 italic bg-[#242424]">
            {book.authors.join(", ")}
          </p>

          {/* Mobile-Only Book Cover */}
          <div className="lg:hidden sm:h-[450px] px-10 my-8 flex-shrink-0 flex items-center justify-center">
            <img
              src={coverPath}
              alt={book.title}
              className="max-h-full w-auto"
            />
          </div>

          {/* Introduction */}
          <div
            className="text-color-9 py-6 space-y-5 text-justify"
            dangerouslySetInnerHTML={{ __html: book.intro }}
          />

          {/* Purchase Buttons */}
          <div className="flex flex-wrap gap-6 justify-center lg:justify-start lg:py-6">
            {book.amazon.length > 0 ? (
              book.amazon.map((item, index) => (
                <button
                  key={index}
                  onClick={() => window.open(item.link, "_blank")}
                  className="p-2 w-48 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Buy on Amazon ({item.country})
                </button>
              ))
            ) : (
              <button
                onClick={() => window.open(book.link, "_blank")}
                className="p-2 w-48 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Buy Now
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="h-24"></div>
    </Section>
  );
};

export default ProductSection1;