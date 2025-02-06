import React, { useState, useRef } from 'react';
import './Lectures.css'; 
import { Link } from 'react-router-dom';
import { lectures } from '../../utils/constants/constants';
import Button from '../Button/Button';

const Lectures = () => {
  const [hover, setHover] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (!containerRef.current) return;
  
    // how far we've scrolled horizontally:
    const scrollLeft = containerRef.current.scrollLeft;
  
    // get the first child's width (plus margin if any)
    const firstChild = containerRef.current.children[0];
    if (!firstChild) return; // safety check
  
    // If you have margin-right: 30px or so, add that to the child width:
    const childWidth = firstChild.offsetWidth + 30; // adjust if your margin differs
  
    // Now compute the slide index based on the child width:
    const index = Math.round(scrollLeft / childWidth);
  
    setCurrentSlide(index);
  };
  

  return (
    <section className='lectures' id='lectures'>
      <h2 className='lectures__title'>ВЫ ТАКЖЕ МОЖЕТЕ ЗАКАЗАТЬ ЛЕКЦИИ</h2>
      <h3 className='lectures__description'>
        Доктор Зубова также читает лекции по темам связанным с женским 
        физическим и психологическим здоровьем
      </h3>

      {/* Container for the slides */}
      <div
        className='lectures__card-container'
        ref={containerRef}
        onScroll={handleScroll}
      >
        {lectures.map((lecture, idx) => (
          <Link
            to={lecture.link}
            target='_blank'
            className='lectures__card'
            key={lecture.alt}
          >
            <img
              className={`lectures__image ${
                hover ? 'lectures__image_hover' : ''
              }`}
              src={lecture.src}
              alt={lecture.alt}
              onMouseOver={() => setHover(true)}
              onMouseOut={() => setHover(false)}
            />
            <h3
              className='lectures__name'
              onMouseOver={() => setHover(true)}
              onMouseOut={() => setHover(false)}
            >
              {lecture.title}
            </h3>
          </Link>
        ))}
      </div>

      {/* Dots Indicator (only really needed on mobile, but you can show/hide as you like) */}
      <div className='lectures__dots'>
        {lectures.map((_, idx) => (
          <div
            key={idx}
            className={`lectures__dot ${
              idx === currentSlide ? 'lectures__dot_active' : ''
            }`}
          />
        ))}
      </div>

      <div className='lectures__button'>
        <Button value='Заказать лекцию' type='lectures' />
      </div>
    </section>
  );
};

export default Lectures;
