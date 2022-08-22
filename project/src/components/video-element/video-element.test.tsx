import { render, screen } from '@testing-library/react';
import React from 'react';
import { ElementTestID } from '../../const/enums';
import { makeFakePlayerState } from '../../utils/mocks/mocks';
import { testUtils } from '../../utils/mocks/test-utils';
import VideoElement from './video-element';

const {mockCurrentMovie} = testUtils();

const mockVideoRef = React.createRef<HTMLVideoElement>();

const mockPlayerState = makeFakePlayerState();

describe('Component: VideoElement', () => {
  it('should render correctly', () => {
    render(
      <VideoElement
        ref={mockVideoRef}
        movie={mockCurrentMovie}
        {...mockPlayerState}
      />
    );

    expect(screen.getByTestId(ElementTestID.Video)).toBeInTheDocument();
    expect(screen.getByTestId(ElementTestID.Video)).toHaveAttribute('poster', mockCurrentMovie.backgroundImage);
  });
});
