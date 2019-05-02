import React from 'react';
import PropTypes from 'prop-types';
import StyledProductCard from './StyledProductCard';
import Button from '../ui/buttons/Button';
import toReais from '../../services/toReais';
import Product from '../../domain/Product';

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
