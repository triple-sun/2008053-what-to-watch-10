import { fireEvent, render, screen } from '@testing-library/react';
import { ComponentText } from '../../const/enums';
import { testUtils } from '../../utils/mocks/test-utils';
import ShowMoreButton from './show-more-button';

const {wrapper} = testUtils();

const mockHandleShowMoreButtonClick = jest.fn();

describe('Component: ShowMoreButton', () => {
  it('should render correctly', () => {
    render(
      <ShowMoreButton handleShowMoreButtonClick={mockHandleShowMoreButtonClick}/>,
      {wrapper}
    );

    expect(screen.getByText(ComponentText.ShowMore)).toBeInTheDocument();
  });

  it('should call handleShowMoreButtonClick when clicked', () => {
    render(
      <ShowMoreButton handleShowMoreButtonClick={mockHandleShowMoreButtonClick}/>,
      {wrapper}
    );

    fireEvent.click(screen.getByText(ComponentText.ShowMore));

    expect(mockHandleShowMoreButtonClick).toBeCalledTimes(1);
  });
});
