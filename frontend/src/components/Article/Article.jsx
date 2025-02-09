import React from 'react';
import './Article.css'; 
import { useParams } from 'react-router-dom';
import { articles } from '../../utils/constants/constants';

const Article = () => {
  const { id } = useParams(); 
  // Convert the id to a number if needed (assuming service.id is numeric)
  const articleId = Number(id);

  // Find the service from the array using the id.
  const currentArticle = articles.find((article) => article.id === articleId);

    return (
      <section className='article' id='article'>
      <h2 className='article__title'>{currentArticle.title}</h2>
      <img  className='article__image' src={currentArticle.src} alt={currentArticle.alt} />
      <p className='article__description'>{currentArticle.description}</p>
        </section>
    );
  };
  

export default Article;