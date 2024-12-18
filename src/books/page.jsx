import BookSection1 from "./BookSection1";
import BookSection2 from "./BookSection2";
import BookSection3 from "./BookSection3";

const Book = () => {

    return (
        <div>
            <div className="">
                <BookSection1 />
            </div>
            <div className="">
                <BookSection2 />
            </div>
            <div className="">
                <BookSection3 />
            </div>
        </div>
    );
};

export default Book;