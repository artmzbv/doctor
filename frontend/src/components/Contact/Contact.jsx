import React from 'react';
import './Contact.css'; 

const Contact = () => {
    return (
      <section className='contact' id='contact'>
        {/* <h1 className='contact__title'>Contact Us</h1> */}
        <div className='contact__container'>
          <div className='contact__info'>
          <h2 className='contact__title'>Где принимаю ?</h2>
          <p className='contact__adress'>метро Университет</p>
          {/* <p className='contact__adress'>info@self-made-portraits.com</p>
          <p className='contact__adress'>01273 011626</p> */}
          {/* <p className='contact__adress'>36</p> */}
          </div>
          <div className='contact__maps'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d4497.593999953654!2d37.52698590169358!3d55.692517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0LzQtdGC0YDQviDRg9C90LjQstC10YDRgdC40YLQtdGC!5e0!3m2!1sru!2suk!4v1738846373921!5m2!1sru!2suk" 
          width="100%" 
          height="100%" 
          style={{border: 0}} 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          </div>
        </div>
        </section>
    );
  };
  

export default Contact;