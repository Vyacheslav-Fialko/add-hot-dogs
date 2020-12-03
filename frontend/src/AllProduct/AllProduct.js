import React from 'react';
import { connect } from 'react-redux';
import Loader from '../Loader';
import ProductCard from '../ProductCard/ProductCard';
import { innitApp } from '../redux/actions';
import './allprodoct.css';

class AllProduct extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <React.Fragment>
        <div className="products">
          {this.props.loading ? <Loader /> : ''}
          {this.props.products.map((product, index) => {
            return <ProductCard product={product} key={index} />
          })}
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
    loading: state.app.loading
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(innitApp())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProduct);