import React from 'react';

import { Card, CardMedia, CardContent, CardActions, 
        Typography, IconButton} from '@material-ui/core';

import { AddShoppingCart } from '@material-ui/icons';


function Product({ product }) {
    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image='' 
                    title={product.name} />
                
                <CardContent> 
                    <div className={classes.cardContent}>
                        <Typography variant='h5' gutterBottom> 
                            {product.name}
                        </Typography>

                        <Typography variant='h5'> 
                            {product.price}
                        </Typography>

                    </div>
                </CardContent>

                <CardActions>



                </CardActions>


            </Card>
        </div>


    )
}

export default Product
