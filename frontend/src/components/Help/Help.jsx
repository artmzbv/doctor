import React, { useState, useEffect } from 'react';
import './Help.css'; 
import { Link} from "react-router-dom";
import {services} from '../../utils/constants/constants'
import Service from "../Service/Service"
import Button from '../Button/Button';

const Help = () => {
    const [hover, setHover] = useState(false)
    return (
        <section className='help' id='help'>
          <h1 className='help__title'>{`ЧЕМ Я МОГУ ВАМ ПОМОЧЬ?`}</h1>
          <div className='help__card-container'>
          {services.map((service) =>
        <Link  to={service.link} target="_blank" className='help__card' key={service.alt} element={Service}>
        <div className="help__image-container">
        <img className={`help__image  ${hover ? 'help__image_hover' : null}`}
            src={service.src} 
            onMouseOver={()=>setHover(true)}
            onMouseOut={()=>setHover(false)}
            alt={service.alt}/>
        <img className="help__icon"
            src={service.icon} 
            onMouseOver={()=>setHover(true)}
            onMouseOut={()=>setHover(false)}
            alt={service.alt}/>
          </div>
        <h3 className='help__name'>{service.title}</h3>
        <p className='help__description'>{service.description}</p>
        <button className='help__button'>Узнать больше</button>
        </Link>
          )}
          </div>
        </section>
    );
  };

  
export default Help;