import React from 'react';
import { Grid } from '@material-ui/core';
import Product from '../Product/Product';


const products = [
    { id: 1, name: 'Shoes', description: 'running shoes', price: '$175',
        image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/cd1631e9d6fb48ccaedcaafc0106320f_9366/Ultraboost_20_Shoes_White_EF1042_01_standard.jpg' },
    { id: 2, name: 'Macbook', description: 'Apple Macbook Pro', price: '$800',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011?wid=892&hei=820&&qlt=80&.v=1603406905000'},
];

function Products() {
    return (
        <div>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}> 
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Products;


