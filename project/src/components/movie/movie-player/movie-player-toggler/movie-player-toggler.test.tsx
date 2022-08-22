import { render, screen } from '@testing-library/react';
import { ComponentText } from '../../../../const/enums';
import { testUtils } from '../../../../utils/mocks/test-utils';
import MoviePlayerToggler from './movie-player-toggler';

const {wrapper, mockPlayerState} = testUtils();

const playerState = mockPlayerState;

describe('Component: MoviePlayerToggler', () => {
  it('should render correctly', () => {
    render(
      <MoviePlayerToggler {...playerState}/>,
      {wrapper}
    );

    expect(screen.getByText(ComponentText.Toggler)).toBeInTheDocument();
  });
});
