import ProductSection1 from "./ProductSection1";
import ProductSection2 from "./ProductSection2";
import ProductSection3 from "./ProductSection3";

const Product = () => {

    return (
        <div>
            <div className="">
                <ProductSection1 />
            </div>
            <div className="">
                <ProductSection2 />
            </div>
            <div className="">
                <ProductSection3 />
            </div>
        </div>
    );
};

export default Product;