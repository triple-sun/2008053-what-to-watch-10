import { fireEvent, render, screen } from '@testing-library/react';
import { ComponentText } from '../../const/enums';
import { testUtils } from '../../utils/mocks/test-utils';
import SignInForm from './sign-in-form';

const {wrapper} = testUtils();

const mockHandleLoginClick = jest.fn();

describe('Component: SignInForm', () => {
  it('should render correctly', () => {
    render(
      <SignInForm handleLoginSubmit={mockHandleLoginClick}/>,
      {wrapper}
    );

    expect(screen.getByLabelText(ComponentText.Email)).toBeInTheDocument();
    expect(screen.getByLabelText(ComponentText.Password)).toBeInTheDocument();
    expect(screen.getByText(ComponentText.SignIn)).toBeInTheDocument();
  });

  it('should call handleLoginClick when user clicks signIn', () => {
    render(
      <SignInForm handleLoginSubmit={mockHandleLoginClick}/>,
      {wrapper}
    );

    fireEvent.click(screen.getByText(ComponentText.SignIn));
    expect(mockHandleLoginClick).toBeCalled();
  });
});
