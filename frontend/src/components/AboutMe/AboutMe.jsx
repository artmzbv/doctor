import React, { useState, useEffect } from 'react';
import './AboutMe.css'; 
import doctor from '../../images/doctor.jpeg'
import Button from '../Button/Button'


const AboutMe = () => {
    return (
        <section className='aboutme' id='aboutme'>
          <div className='aboutme__image-container'>
          <img src={doctor} className='aboutme__image' />
          </div>
          <div className='aboutme__description'>
          <p className='aboutme__intro'>О Докторе Зубовой</p>
          <h2 className='aboutme__title'>{`ДОКТОР ЗУБОВА\nГИНЕКОЛОГ В МОСКВЕ`}</h2>
          <p>Зубова О.М.  -  гинеколог-эндокринолог, к.м.н с фокусом на нарушения менструального цикла, климактерический синдроме, эндометриозе,  подборе контрацепции в различные периоды жизни женщины, подготовке к беременности 
          Она использует персонифицированный подбор гормональной/ негормональной терапии в пери- постменопаузе и лечении остепороза. Занимается диагностикой и лечение потологии шейки матки. Работает в контакте с профессиональной командой врачей - эндокринологоми, маммологоми, хирургами и онкологами </p>
          <Button value={"Записаться на прием"} />
          </div>
        </section>
    );
  };

  
export default AboutMe;