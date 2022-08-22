import { fireEvent, render, screen } from '@testing-library/react';
import { ComponentText } from '../../../../../const/enums';
import FullScreenButton from './full-screen-button';

const mockHandleFullscreenClick = jest.fn();

describe('Component: FullScreenButton', () => {
  it('should render correctly', () => {
    render(
      <FullScreenButton handleFullScreenClick={mockHandleFullscreenClick}/>
    );

    expect(screen.getByText(ComponentText.FullScreen)).toBeInTheDocument();
  });

  it('should call correctly', () => {
    render(
      <FullScreenButton handleFullScreenClick={mockHandleFullscreenClick}/>
    );

    fireEvent.click(screen.getByText(ComponentText.FullScreen));

    expect(mockHandleFullscreenClick).toBeCalledTimes(1);
  });
});
