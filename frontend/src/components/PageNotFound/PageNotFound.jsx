import {React} from "react";
import { Link } from "react-router-dom";
import './PageNotFound.css';

export default function PageNotFound () {
    return (
      <section className="not-found">
        <h1 className="not-found__title">{`Страница\nне найдена`}</h1>
        <img className="not-found__image" src={''} alt=""/>
        <Link to="/">
            <button className="not-found__button">
            <p className="not-found__text">На главную страницу</p>
            </button>
        </Link>
      </section>
    )
  }