import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ book, value, type }) => {


  return (
    <Link  className={`button button__book-time`}>
      {value}
    </Link>
  );
};

export default Button;
