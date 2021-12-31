import React from 'react';
import Button from './Button';
import Header from './Header';
import './AddSubscriber.css';

const AddSubscriber = () => {
  return (
    <div>
      <Header heading="Add Subscriber" />
      <div className="container">
        <Button name="BACK" color="#fff" backColor="grey" />
        <form className="subscriber-form">
          <label htmlFor="name" className="label-control">
            Name:{' '}
          </label>
          <br />
          <input id="name" type="text" className="input-control" name="name" />
          <br />
          <br />
          <label htmlFor="phone" className="label-control">
            Phone:{' '}
          </label>
          <br />
          <input
            id="phone"
            type="text"
            className="input-control"
            name="phone"
          />
          <br />
          <br />

          <div className="subscriber-info-container">
            <span className="subscriber-to-add-heading">
              Subscriber to be added:{' '}
            </span>
            <br />
            <br />
            <span className="subscriber-info">Name: </span>
            <br />
            <br />
            <span className="subscriber-info">Phone: </span>
            <br />
          </div>

          <Button name="ADD" backColor="rgb(38, 226, 38)" color="#fff" />
        </form>
      </div>
    </div>
  );
};

export default AddSubscriber;
