import React from 'react';
import { useParams } from 'react-router-dom';

import Section from '../components/Section';

import { books } from '../docs/books';

const ProductSection1 = () => {
  const { title } = useParams();

  const generateSlug = (title) => title.toLowerCase().replace(/\s+/g, '-');

  const book = books.find((b) => generateSlug(b.title) === title);

  if (!book || book.hidden) {
    return <div>Book not found</div>;
  }

  const coverPath = book.cover.startsWith('./src/assets/')
    ? book.cover.replace('./src', '/src')
    : book.cover;

  return (
    <div>
      <Section>
        <div className="h-24"></div>
        <div className="lg:flex px-10">
          {/* Left section with the image */}
          <div className="hidden lg:flex h-[450px] xl:h-[600px] px-10 flex-shrink-0 items-start">
            <img
              src={coverPath}
              alt={book.title}
              className="max-h-full w-auto" 
            />
          </div>

          {/* Right section */}
          <div className="">

            {/* Title */}
            <div className="text-color-3 py-2 text-5xl bg-[#474747]">
              <h1>{book.title}</h1>
            </div>

            {/* Authors */}
            <div className="text-color-6 text-xl py-3 italic bg-[#242424]">
              <p>{book.authors.join(", ")}</p>
            </div>

            <div className=" lg:hidden sm:h-[450px] px-10 my-8 flex-shrink-0 flex items-start justify-center">
              <img
                src={coverPath}
                alt={book.title}
                className="max-h-full w-auto"
              />
            </div>

            {/* Intro */}
            <div
              className="text-color-9 py-6"
              dangerouslySetInnerHTML={{ __html: book.intro }}
            />

            {/* Buttons */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start lg:py-6">
              {book.amazon.length > 0 ? (
                book.amazon.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => window.open(item.link, '_blank')}
                    className="p-2 w-48 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Buy on Amazon ({item.country})
                  </button>
                ))
              ) : (
                <button
                  onClick={() => window.open(book.link, '_blank')}
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
    </div>
  );
};

export default ProductSection1;