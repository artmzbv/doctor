import React, { useState } from 'react';
import './Blog.css';
import { Link } from 'react-router-dom'
import {articles} from '../../utils/constants/constants'

const Blog = () => {
  // We'll use "currentPage" to indicate which "screen" or page of the carousel
  const [currentPage, setCurrentPage] = useState(0);

  /**
   * Retrieve the articles to display on the current page.
   * - First page (page=0): show exactly 5 articles (indices 0..4)
   * - Subsequent pages (page=1,2...): show 6 articles each
   */
  const getVisibleArticles = () => {
    if (currentPage === 0) {
      // First page: 5 articles
      return articles.slice(0, 5);
    } else {
      // Subsequent pages: show 6 at a time
      // page=1 => start=5, end=11
      // page=2 => start=11, end=17, etc.
      const start = 5 + (currentPage - 1) * 6;
      const end = start + 6;
      return articles.slice(start, end);
    }
  };

  const visibleArticles = getVisibleArticles();

  /**
   * Check if the NEXT button should be enabled.
   */
  const canGoNext = () => {
    if (currentPage === 0) {
      // On first page, we can go next if we have more than 5 articles total
      return articles.length > 5;
    } else {
      // On subsequent pages, we can go next if there's still more articles 
      // beyond what's shown on this slice
      const start = 5 + (currentPage - 1) * 6;
      return start + 6 < articles.length;
    }
  };

  /**
   * Check if the PREV button should be enabled.
   */
  const canGoPrev = () => {
    return currentPage > 0;
  };

  /**
   * Handle the NEXT button click.
   */
  const handleNext = () => {
    if (!canGoNext()) return;

    // If we're on the first page, jump to second
    // else just increment
    setCurrentPage((prev) => (prev === 0 ? 1 : prev + 1));
  };

  /**
   * Handle the PREV button click.
   */
  const handlePrev = () => {
    if (!canGoPrev()) return;
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <section className="blog" id="blog">
      <h1 className="blog__title">БЛОГ</h1>

      <div className="blog__carousel-container">
        {/* Left Arrow Button */}
        {currentPage > 0 && (
        <button
          className="blog__button blog__button--left"
          onClick={handlePrev}
        >
          ←
        </button>
      )}


        {/* ============== FIRST PAGE LAYOUT (2 rows, 5 articles) ============== */}
        {/* FIRST PAGE LAYOUT */}
        {currentPage === 0 && (
          <div className="blog__grid blog__grid--first-page">
            {/* Row 1: featured + 1 small */}
            {visibleArticles[0] && (
              <Link to={visibleArticles[0].link} key={visibleArticles[0].id} style={{ display: "contents" }} className="blog__card-link">
              <div className="blog__main-article">
                <img
                  src={visibleArticles[0].image}
                  alt={visibleArticles[0].title}
                  className="blog__main-image"
                />
                <div className="blog__main-content">
                  <h2 className="blog__main-article-title">{visibleArticles[0].title}</h2>
                  <p className="blog__main-date">{visibleArticles[0].date}</p> {/* date added */}
                  <p className="blog__main-overview">{visibleArticles[0].overview}</p>
                  <a href={visibleArticles[0].link} className="blog__link blog__link_main">
                    Читать далее →
                  </a>
                </div>
              </div>
              </Link>
            )}

            {visibleArticles[1] && (
              <Link to={visibleArticles[1].link} key={visibleArticles[1].id} className="blog__card-link">
              <div className="blog__card">
                <img
                  src={visibleArticles[1].image}
                  alt={visibleArticles[1].title}
                  className="blog__image"
                />
                <div className="blog__content">
                  <h2 className="blog__article-title">{visibleArticles[1].title}</h2>
                  <p className="blog__date">{visibleArticles[1].date}</p>
                  <p className="blog__overview">{visibleArticles[1].overview}</p>
                  <a href={visibleArticles[1].link} className="blog__link blog__link_ordinary">
                    Читать далее →
                  </a>
                </div>
              </div>
              </Link>
            )}

            {/* Row 2: next 3 articles */}
            {visibleArticles.slice(2).map((article) => (
            <Link to={article.link} key={article.id} className="blog__card-link">
              <div key={article.id} className="blog__card">
                <img
                  src={article.image}
                  alt={article.title}
                  className="blog__image"
                />
                <div className="blog__content">
                  <h2 className="blog__article-title">{article.title}</h2>
                  <p className="blog__date">{article.date}</p>
                  <p className="blog__overview">{article.overview}</p>
                  <a href={article.link} className="blog__link blog__link_ordinary">
                    Читать далее →
                  </a>
                </div>
              </div>
              </Link>
            ))}
          </div>
        )}

        {/* SUBSEQUENT PAGES (2 rows x 3 columns) */}
        {currentPage > 0 && (
          <div className="blog__grid blog__grid--uniform">
            {visibleArticles.map((article) => (
              <Link to={article.link} key={article.id} className="blog__card-link">
              <div key={article.id} className="blog__card">
                <img
                  src={article.image}
                  alt={article.title}
                  className="blog__image"
                />
                <div className="blog__content">
                  <h2 className="blog__article-title">{article.title}</h2>
                  <p className="blog__date">{article.date}</p> {/* date added */}
                  <p className="blog__overview">{article.overview}</p>
                  <a href={article.link} className="blog__link blog__link_ordinary">
                    Читать далее →
                  </a>
                </div>
              </div>
              </Link>
            ))}
          </div>
        )}

        {/* Right Arrow Button */}
       {canGoNext() && (
          <button
            className="blog__button blog__button--right"
            onClick={handleNext}
          >
            →
          </button>
        )}
      </div>
    </section>
  );
};

export default Blog;
