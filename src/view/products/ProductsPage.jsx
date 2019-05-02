import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';
import { Product, Cart, Category } from '../../domain';

import {
  productActions,
  categoriesActions,
  cartActions,
  timerActions
} from '../../state';

import {
  StyledProductListHeader,
  StyledProductsContainer,
  StyledPagination,
  StyledBasePage,
  StyledFilters,
  ProductCard,
  Container,
  Header,
  Button
} from '..';

class ProductsPage extends Component {
  state = {
    paginatedProducts: [],
    activePage: 1,
    itemsCountPerPage: 4,
    activeFilter: null
  };

  async componentDidMount() {
    const { getProducts, getCategories } = this.props;

    await Promise.all([getProducts(), getCategories()]);

    this.showProductsFromPage(1);
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

  filterByCategoryAndUpdateList = (categoryId = null) =>
    async () => {
      const { filterByCategory } = this.props;

      await filterByCategory(categoryId)();

      this.showProductsFromPage(1);
      this.setState({ activeFilter: categoryId });
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

    const {
      activePage,
      paginatedProducts,
      itemsCountPerPage,
      activeFilter
    } = this.state;

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
                  onClick={this.filterByCategoryAndUpdateList()}
                >
                  Todos
                </Button>
                {categories
                  && categories.map(category =>
                    (
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
              {paginatedProducts
                && paginatedProducts.map(product =>
                  (
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

ProductsPage.propTypes = {
  getProducts: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  addItemToCart: PropTypes.func.isRequired,
  filterByCategory: PropTypes.func.isRequired,
  startTimer: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.instanceOf(Product)).isRequired,
  cart: PropTypes.instanceOf(Cart).isRequired,
  categories: PropTypes.arrayOf(PropTypes.instanceOf(Category)).isRequired
};

const mapStateToProps = ({
  products, categories, cart, timer
}) =>
  ({
    products, categories, cart, timer
  });

const mapDispatchToProps = dispatch =>
  ({
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
