import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Pagination from 'react-js-pagination';
import StyledBasePage from '../ui/styles/StyledBasePage';
import Container from '../ui/Container';
import * as productActions from '../../state/products/actionCreators';
import * as categoriesActions from '../../state/categories/actionCreators';
import * as cartActions from '../../state/cart/actionCreators';
import * as timerActions from '../../state/timer/actionCreators';
import ProductCard from './ProductCard';
import StyledProductsContainer from './StyledProductsContainer';
import StyledPagination from '../ui/StyledPagination';
import Header from '../ui/header/Header';
import Button from '../ui/buttons/Button';
import StyledFilters from './StyledFilters';
import StyledProductListHeader from './StyledProductListHeader';

class ProductsPage extends Component {
  state = {
    paginatedProducts: [],
    activePage: 1,
    itemsCountPerPage: 4,
    activeFilter: null
  };

  componentDidMount() {
    const { getProducts, getCategories } = this.props;
    getProducts();
    getCategories();
    setTimeout(() => {
      this.showProductsFromPage(1);
    }, 0);
  }

  handlePageChange = (activePage) => {
    this.setState({ activePage }, () => 
      this.showProductsFromPage(this.state.activePage));
  };

  showProductsFromPage = (page = 1) => {
    const { products } = this.props;
    const { itemsCountPerPage } = this.state;

    this.setState({
      activePage: page,
      paginatedProducts: products.filter(
        (product, index) =>
          index >= page * itemsCountPerPage - itemsCountPerPage && index < page * itemsCountPerPage
      )
    });
  };

  filterByCategoryAndUpdateList = (categoryId = null) => () => {
    const { filterByCategory } = this.props;

    filterByCategory(categoryId)();
    setTimeout(() => {
      this.showProductsFromPage(1);
      this.setState({ activeFilter: categoryId });
    }, 0);
  };

  onAddToCart = product =>
    () => {
      const { addItemToCart, cart, startTimer } = this.props;
      if (cart.items.length === 0) {
        startTimer();
      }
      addItemToCart(product, cart)();
    };

  render() {
    const { products, categories } = this.props;

    const { activePage, paginatedProducts, itemsCountPerPage, activeFilter } = this.state;

    return (
      <Fragment>
        <Header />
        <StyledBasePage withHeader>
          <Container>
            <StyledProductListHeader>
              <h1>Products Page</h1>
              <StyledFilters>
                <Button
                  className={activeFilter === null && 'active'}
                  onClick={this.filterByCategoryAndUpdateList(null)}
                >
                  Todos
                </Button>
                {categories &&
                  categories.map(category => (
                    <Button
                      key={category.id}
                      onClick={this.filterByCategoryAndUpdateList(category.id)}
                      className={activeFilter === category.id && 'active'}
                    >
                      {category.name}
                    </Button>
                  ))}
              </StyledFilters>
            </StyledProductListHeader>
            <StyledProductsContainer>
              {paginatedProducts &&
                paginatedProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={this.onAddToCart(product)}
                  />
                ))}
            </StyledProductsContainer>
            <StyledPagination>
              <Pagination
                activePage={activePage}
                itemsCountPerPage={itemsCountPerPage}
                totalItemsCount={products.length}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange}
              />
            </StyledPagination>
          </Container>
        </StyledBasePage>
      </Fragment>
    );
  }
}

const mapStateToProps = ({
  products, categories, cart, timer
}) =>
  ({
    products, categories, cart, timer
  });

const mapDispatchToProps = dispatch => ({
  getProducts: productActions.getProducts(dispatch),
  getCategories: categoriesActions.getCategories(dispatch),
  addItemToCart: cartActions.addItemToCart(dispatch),
  filterByCategory: productActions.filterByCategory(dispatch),
  startTimer: timerActions.startTimer(dispatch, cartActions.clearCart(dispatch))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);