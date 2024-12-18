import ResourcesSection1 from "./ResourcesSection1";
import ResourcesSection2 from "./ResourcesSection2";
import ResourcesSection3 from "./ResourcesSection3";

/**
 * The Book component is a container for all the sections related to a book. 
 * It renders three distinct sections in the order of BookSection1, BookSection2, and BookSection3.
 */
const Book = () => {
  return (
    <div>
      {/* Render each book section */}
      <ResourcesSection1 />
      <ResourcesSection2 />
      <ResourcesSection3 />
    </div>
  );
};

export default Book;