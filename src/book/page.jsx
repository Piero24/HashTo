import React from "react";
import ProductSection1 from "./ProductSection1";
import ProductSection2 from "./ProductSection2";
import ProductSection3 from "./ProductSection3";

/**
 * Product component serves as a container to render all product-related sections.
 */
const Product = () => {
    return (
        <div className="product-container">
            <ProductSection1 />
            <ProductSection2 />
            <ProductSection3 />
        </div>
    );
};

export default Product;