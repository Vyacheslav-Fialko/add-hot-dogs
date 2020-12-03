import React from 'react';
import { connect } from 'react-redux';
import { createProduct } from '../redux/actions'
import './modal.css';

class Modal extends React.Component {


  state = {
    isOpen: false,
    title: '',
    subtitle: '',
    img: '',
    price: ''
  }
  change = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  addProduct = (data) => {
    const product = () => {
      let product = {}
      for (let key in data) {
        if (key === 'isOpen') {
          continue
        } else if (data[key]) {
          product[key] = data[key]
        } else {
          return false
        }

      }
      return product
    }
    if (product()) {
      this.props.createProduct(product())
    }
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({
      isOpen: false,
      title: '',
      subtitle: '',
      img: '',
      price: ''
    })

  }
  render() {
    const { title, subtitle, price, img } = this.state
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ isOpen: true })} className="open-btn">Add hot-dog</button>
        {this.state.isOpen && (
          <div className='modal'>
            <div className='modal__body'>
              <form onSubmit={this.submitHandler}>
                <h2 className="modal__title">Add new hot-dog</h2>
                <input type="text" name="img" placeholder="Image" value={img} required className="modal__input" onChange={this.change} />
                <input type="text" name="title" placeholder="Title" value={title} required className="modal__input" onChange={this.change} />
                <input type="number" name="price" placeholder="Price" value={price} required className="modal__input" onChange={this.change} />
                <textarea type="text" name="subtitle" placeholder="Description" value={subtitle} required className="modal__input" onChange={this.change} ></textarea>
                <button className="modal__btn" onClick={() => this.setState({ isOpen: false })}>No Thanks</button>
                <button className="modal__btn" type="submit" onClick={this.addProduct.bind(null, this.state)}>Add</button>
              </form>
            </div>
          </div>)}
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {

  };
}

const mapDispatchToProps = dispatch => {
  return {
    createProduct: data => dispatch(createProduct(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)