import { useCallback, useState } from 'react';
import { MovieNavigation } from '../../const/enums';
import TMovie from '../../types/movie';
import TReview from '../../types/review';
import { getTabElement } from '../../utils/utils';

const useTabs = (movie: TMovie, reviews: TReview[]) => {
  const [activeTab, setActiveTab] = useState(MovieNavigation.Overview);

  const tabElement = getTabElement(activeTab, movie, reviews);

  const handleTabEvent = useCallback((selectedTab: MovieNavigation) => setActiveTab(selectedTab), []);
  return {
    tabElement,
    activeTab,
    handleTabEvent
  };
};

export default useTabs;
