import React from 'react';
import './Lecture.css'; 
import { useParams } from 'react-router-dom';
import { lectures } from '../../utils/constants/constants';

const Lecture = () => {
  const { id } = useParams(); 
  // Convert the id to a number if needed (assuming service.id is numeric)
  const serviceId = Number(id);

  // Find the service from the array using the id.
  const currentLecture = lectures.find((service) => service.id === serviceId);
    return (
      <section className='lecture' id='lecture'>
      <h2 className='lecture__title'>{currentLecture.title}</h2>
      <img  className='lecture__image' src={currentLecture.src} alt={currentLecture.alt} />
      <p className='lecture__description'>{currentLecture.description}</p>
        </section>
    );
  };
  

export default Lecture;

