import React from 'react';
import { MovieNavigation } from '../../../const/enums';
import useTabs from '../../../hooks/use-tabs/use-tabs';
import TMovie from '../../../types/movie';
import TReview from '../../../types/review';
import MovieTabNavigation from './movie-tab-control/movie-tab-navigation';

const MovieTabs = ({movie, reviews}: {movie: TMovie, reviews: TReview[]}) => {
  const {
    tabElement,
    activeTab,
    handleTabEvent
  } = useTabs(movie, reviews);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Object.values(MovieNavigation).map(
            (navElementName) => <MovieTabNavigation key={navElementName} name={navElementName} activeTab={activeTab} handleTabEvent={handleTabEvent}/>
          )}
        </ul>
      </nav>
      {tabElement}
    </div>
  );
};

export default React.memo(MovieTabs);
