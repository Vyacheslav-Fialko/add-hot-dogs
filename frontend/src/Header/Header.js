import React from 'react';
import Modal from '../Modal/Modal';
import './header.css';

export default class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <div className="header__logo">
            <img className="header__logo-img" src="./img/logo.png" alt="logo" />
            <h1 className="header__logo-text">CRUD</h1>
          </div>
          <Modal />
        </header>
      </React.Fragment>
    );
  }
}