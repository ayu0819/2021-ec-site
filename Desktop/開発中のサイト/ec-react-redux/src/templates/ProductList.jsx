
import React, {useEffect} from 'react';
import {ProductCards} from "../componnents/Products";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../reducks/products/selectors";
import {fetchProducts} from "../reducks/products/operations";

const ProductList = () => {
    const dispatch = useDispatch()
    const selector = useSelector(state => state);
    const products = getProducts(selector)

    useEffect(() => {
        dispatch(fetchProducts())
    },[])

    return (
        <section className="c-section-wrapin">
            <div className="p-grid__row">
                {products.length > 0 && (
                    products.map(product => (
                        <ProductCards
                            key={product.id}
                        />
                    ))
                )}
            </div>
        </section>
    );
};

export default ProductList;