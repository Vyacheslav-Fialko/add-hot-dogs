import React from 'react';
import { useDispatch } from 'react-redux';
import { removeProduct, updateProduct } from '../redux/actions';
import './productcard.css';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = React.useState(false);
  const regexQuery = "^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$";
  const isUrl = new RegExp(regexQuery, "i");
  const img = (isUrl.test(product.img) && product.img.length > 13) ? product.img : `./img/${product.img}`;
  const src = img;
  function submitHandler(event) {
    event.preventDefault();
    setIsEdit(false)
  }

  function change(e) {
    const { name, value } = e.target;
    product[name] = value;
  }

  return (
    <React.Fragment>
      <div className="product-card">
        <img src={src} className="product-card__img" alt={product.img} />

        {!isEdit ? (
          <div className="product-card__body">
            <h5 className="product-card__title product-card__body-item">{product.title}</h5>
            <p className="product-card__price product-card__body-item">{product.price}$</p>
            <p className="product-card__subtitle product-card__body-item">{product.subtitle}</p>
            <button className="product-card__btn" onClick={() => setIsEdit(true)} >Edit</button>
          </div>
        ) :
          (
            <form className="product-card__form" onSubmit={submitHandler}>
              <input type="text" name="img" placeholder="Image" defaultValue={product.img} required className="product-card__input" onBlur={change} />
              <input type="text" name="title" placeholder="Title" defaultValue={product.title} required className="product-card__input" onBlur={change} />
              <input type="number" name="price" placeholder="Price" defaultValue={product.price} required className="product-card__input" onBlur={change} />
              <textarea name="subtitle" placeholder="Description" required className="product-card__input" onBlur={change} defaultValue={product.subtitle}></textarea>
              <div className="product-card__btn-group">
                <button className="product-card__btn" type="submit" onClick={() => dispatch(updateProduct(product))}>update</button>
                <button className="product-card__btn" type="submit" onClick={() => dispatch(removeProduct(product.id))} >delete</button>
              </div>

            </form>
          )}
      </div>
    </React.Fragment>
  )

}