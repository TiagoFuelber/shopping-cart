import React from 'react';
import PropTypes from 'prop-types';
import { StyledProductCard, Button } from '..';
import { toReais } from '../../services';
import { Product } from '../../domain';

const ProductCard = ({ product, onAddToCart }) =>
  (
    <StyledProductCard>
      <img src={product.image} alt={product.name} />
      <div className="description">{product.description}</div>
      <div className="price">{toReais(product.price)}</div>
      <Button type="button" onClick={onAddToCart}>
      Add to cart
      </Button>
    </StyledProductCard>
  );

ProductCard.propTypes = {
  product: PropTypes.instanceOf(Product).isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default ProductCard;
