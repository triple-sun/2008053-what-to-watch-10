import { fireEvent, render, screen } from '@testing-library/react';
import { ComponentText, ElementTestID } from '../../const/enums';
import { testUtils } from '../../utils/mocks/test-utils';
import userEvent from '@testing-library/user-event';
import SignInForm from './sign-in-form';

const {wrapper, mockAuthData} = testUtils();

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

  it('should call handleLoginClick when email and password are correct and user clicks signIn', async () => {
    render(
      <SignInForm handleLoginSubmit={mockHandleLoginClick}/>,
      {wrapper}
    );

    await userEvent.click(screen.getByTestId(ElementTestID.Login));
    await userEvent.keyboard(mockAuthData.login);

    await userEvent.click(screen.getByTestId(ElementTestID.Passsword));
    await userEvent.keyboard(mockAuthData.password);

    fireEvent.click(screen.getByText(ComponentText.SignIn));

    expect(mockHandleLoginClick).toBeCalled();
  });
});
