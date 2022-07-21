import { useCallback, useState } from 'react';
import { MovieNavigation } from '../../../const/enums';
import TMovie from '../../../types/movie';
import MovieTabNavigation from './movie-tab-control/movie-tab-control';
import MovieTabDetails from './movie-tab-details/movie-tab-details';
import MovieTabOverview from './movie-tab-overview/movie-tab-overview';
import MovieTabReviews from './movie-tab-reviews/movie-tab-reviews';

const MovieTabs = ({movie}: {movie: TMovie}) => {
  const [activeTab, setActiveTab] = useState(MovieNavigation.Overview);

  const handleTabEvent = useCallback(
    (tab: MovieNavigation) => setActiveTab(activeTab === tab ? activeTab : tab)
    ,
    [activeTab],
  );

  const getTabElement = (tab: MovieNavigation) => {
    switch (tab) {
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

export default MovieTabs;
