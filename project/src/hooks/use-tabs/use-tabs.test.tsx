
import { cleanup, renderHook} from '@testing-library/react';
import { MovieNavigation } from '../../const/enums';
import { getTabElement } from '../../utils/utils';
import { testUtils } from '../../utils/mocks/test-utils';
import { act } from 'react-dom/test-utils';
import useTabs from './use-tabs';

const {wrapper, mockCurrentMovie, mockReviews} = testUtils();

describe('Hook: useTabs', () => {
  beforeEach(cleanup);

  it('should return tabElement', () => {
    const correctTabElement = getTabElement(MovieNavigation.Overview, mockCurrentMovie, mockReviews);
    const {result: {current: {tabElement}}} = renderHook(() =>
      useTabs(mockCurrentMovie, mockReviews), {wrapper}
    );

    expect(tabElement.key).toEqual(correctTabElement.key);
  });

  it('should return activeTab', async () => {
    const {result} = renderHook(() =>
      useTabs(mockCurrentMovie, mockReviews), {wrapper}
    );

    expect(result.current.activeTab).toBe(MovieNavigation.Overview);
  });

  it('should return handlers', () => {
    const {result} = renderHook(() =>
      useTabs(mockCurrentMovie, mockReviews), {wrapper}
    );

    const {
      handleTabEvent,
    } = result.current;

    expect(handleTabEvent).toBeInstanceOf(Function);
  });

  it('should set activeTab when handleTabEvent is called', async () => {
    const mockSelectedTab = MovieNavigation.Reviews;
    const correctTabElement = getTabElement(mockSelectedTab, mockCurrentMovie, mockReviews);

    const {result} = renderHook(() =>
      useTabs(mockCurrentMovie, mockReviews), {wrapper}
    );

    expect(result.current.activeTab).toBe(MovieNavigation.Overview);

    act(() => result.current.handleTabEvent(mockSelectedTab));

    expect(result.current.activeTab).toBe(mockSelectedTab);
    expect(result.current.tabElement.key).toEqual(correctTabElement.key);

  });
});
