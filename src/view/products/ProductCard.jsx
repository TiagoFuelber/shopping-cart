import React from 'react';
import StyledProductCard from './StyledProductCard';
import Button from '../ui/buttons/Button';

const ProductCard = ({ product, onAddToCart }) =>
  (
    <StyledProductCard>
      <img src={product.image} alt={product.name} />
      <div className="description">{product.description}</div>
      <div className="price">{product.price}</div>
      <Button type="button" onClick={onAddToCart}>
      Add to cart
      </Button>
    </StyledProductCard>
  );

export default ProductCard;
