import React, { useCallback, useState } from 'react';
import { MovieNavigation } from '../../../const/enums';
import TMovie from '../../../types/movie';
import MovieTabNavigation from './movie-tab-control/movie-tab-control';
import MovieTabDetails from './movie-tab-details/movie-tab-details';
import MovieTabOverview from './movie-tab-overview/movie-tab-overview';
import MovieTabReviews from './movie-tab-reviews/movie-tab-reviews';

const MovieTabs = ({movie, tab}: {movie: TMovie, tab?: MovieNavigation}) => {
  const [activeTab, setActiveTab] = useState(tab ?? MovieNavigation.Overview);

  const handleTabEvent = useCallback(
    (selectedTab: MovieNavigation) => setActiveTab(activeTab === selectedTab ? activeTab : selectedTab)
    , [activeTab]
  );

  const getTabElement = (selectedTab: MovieNavigation) => {
    switch (selectedTab) {
      case MovieNavigation.Overview:
        return <MovieTabOverview {...movie} />;
      case MovieNavigation.Details:
        return <MovieTabDetails {...movie} />;
      case MovieNavigation.Reviews:
        return <MovieTabReviews />;
    }};

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Object.values(MovieNavigation).map(
            (navElementName) => <MovieTabNavigation key={navElementName} name={navElementName} activeTab={activeTab} handleTabEvent={handleTabEvent}/>
          )}
        </ul>
      </nav>
      {getTabElement(activeTab)}
    </div>
  );
};

export default React.memo(MovieTabs);
