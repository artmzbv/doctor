import React from 'react';
import './Service.css'; 
import { useParams } from 'react-router-dom';
import { services } from '../../utils/constants/constants';

const Service = () => {
  const { id } = useParams(); 
  // Convert the id to a number if needed (assuming service.id is numeric)
  const serviceId = Number(id);

  // Find the service from the array using the id.
  const currentService = services.find((service) => service.id === serviceId);

    return (
      <section className='service' id='service'>
      <h2 className='service__title'>{currentService.title}</h2>
      <img  className='service__image' src={currentService.src} alt={currentService.alt} />
      <p className='service__description'>{currentService.description}</p>
    </section>
    );
  };
  

export default Service;