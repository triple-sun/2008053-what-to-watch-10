import { render, screen } from '@testing-library/react';
import { ComponentText } from '../../../../../const/enums';
import FullScreenButton from './full-screen-button';

describe('Component: FullScreenButton', () => {
  it('should render correctly', () => {
    render(
      <FullScreenButton handleFullScreenClick={() => jest.fn()}/>
    );

    expect(screen.getByText(ComponentText.FullScreen)).toBeInTheDocument();
  });
});
