
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ElementTestID } from '../../const/enums';
import { makeFakePlayerState } from '../../utils/mocks';
import VideoElement from './video-element';

const mockVideoRef = React.createRef<HTMLVideoElement>();

const mockPlayerState = makeFakePlayerState();

describe('Component: VideoElement', () => {
  it('should render correctly', () => {
    render(
      <VideoElement ref={mockVideoRef} {...mockPlayerState}/>
    );

    expect(screen.getByTestId(ElementTestID.Video)).toBeInTheDocument();
    expect(screen.getByTestId(ElementTestID.Video)).toHaveAttribute('poster', mockPlayerState.movie.backgroundImage);
  });
});
