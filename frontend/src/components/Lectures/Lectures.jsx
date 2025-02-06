import React, { useState, useEffect } from 'react';
import './Lectures.css'; 
import { Link} from "react-router-dom";
import {lectures} from '../../utils/constants/constants'
import Button from '../Button/Button'


const Lectures = () => {
  const [hover, setHover] = useState(false)

    return (
        <section className='lectures' id='lectures'>
          <h2 className='lectures__title'>{`ВЫ ТАКЖЕ МОЖЕТЕ ЗАКАЗАТЬ ЛЕКЦИИ`}</h2>
          <h3 className='lectures__description'>Доктор Зубова также читает лекции по темам связанным с женским физическим и психологическим здоровьем</h3>
          <div className='lectures__card-container'>
          {lectures.map((lecture) =>
        <Link to={lecture.link} target="_blank" className='lectures__card' key={lecture.alt}>
        <img className={`lectures__image  ${hover ? 'lectures__image_hover' : null}`}
            src={lecture.src} 
            onMouseOver={()=>setHover(true)}
            onMouseOut={()=>setHover(false)}
            alt={lecture.alt}/>
            <h3 className='lectures__name' onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)}>{lecture.title}</h3>
        </Link>
          )}
          </div>
          <div className='lectures__button'>
          <Button value={"Заказать лекцию"} type={"lectures"}/>
          </div>
        </section>
    );
  };

  
export default Lectures;