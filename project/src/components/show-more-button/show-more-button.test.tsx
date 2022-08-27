import { fireEvent, render, screen } from '@testing-library/react';
import { MOVIE_CARD_MAIN_COUNT } from '../../const/const';
import { ComponentText } from '../../const/enums';
import { testUtils } from '../../utils/mocks/test-utils';
import ShowMoreButton from './show-more-button';

const {wrapper} = testUtils();

const mockHandleShowMoreButtonClick = jest.fn();

describe('Component: ShowMoreButton', () => {
  it('should render when moviesToLoadCount > 0', () => {
    render(
      <ShowMoreButton moviesToLoadCount={MOVIE_CARD_MAIN_COUNT} handleShowMoreButtonClick={mockHandleShowMoreButtonClick}/>,
      {wrapper}
    );

    expect(screen.getByText(ComponentText.ShowMore)).toBeInTheDocument();
  });

  it('should not render when there are no movies to load', () => {
    render(
      <ShowMoreButton handleShowMoreButtonClick={mockHandleShowMoreButtonClick}/>,
      {wrapper}
    );

    expect(screen.queryByText(ComponentText.ShowMore)).not.toBeInTheDocument();
  });

  it('should call handleShowMoreButtonClick when clicked', () => {
    render(
      <ShowMoreButton moviesToLoadCount={MOVIE_CARD_MAIN_COUNT} handleShowMoreButtonClick={mockHandleShowMoreButtonClick}/>,
      {wrapper}
    );

    fireEvent.click(screen.getByText(ComponentText.ShowMore));

    expect(mockHandleShowMoreButtonClick).toBeCalledTimes(1);
  });
});
