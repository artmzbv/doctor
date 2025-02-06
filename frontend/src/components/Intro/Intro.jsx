import React, { useState, useEffect } from 'react';
import './Intro.css'; 
import Button from '../Button/Button'
import doctor from '../../images/doctor.jpeg'

const Intro = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 800);
      };
  
      // Add event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Cleanup the event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
      <section className='intro' id='intro'>
        <div className='intro__container'>
          <div className='intro__text'>
            <h1 className='intro__title'>{`Гинеколог\nЭндокринолог`}</h1>
                <ul className='intro__list'>
                <li className='intro__subtitle'>Доктор Зубова - к.м.н., акушер-гинеколог врач УЗИ консультант по</li>
                <li className='intro__subtitle'>когнитивно-поведенческой и телеесной психотерапии в Москве</li>
                </ul>
                <div className='intro__button'>
                <Button value={"Записаться на прием"} type={"schedule"}/>
                </div>
          </div>
          <div className='intro__picture-container'>
          <img src={doctor} className='intro__picture' alt="Intro" />
        </div>
        </div>
      </section>
    );
  };
  

export default Intro;