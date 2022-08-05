import { FormEvent, useRef } from 'react';
import useAppDispatch from '../../../hooks/use-app-dispatch/use-app-dispatch';
import { loginAction } from '../../../store/user/user-api-actions';
import TAuthData from '../../../types/auth-data';

const SignInForm = () => {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const handleSubmit = (authData: TAuthData) => dispatch(loginAction(authData));

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current && passwordRef.current) {
      handleSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  return (
    <form action="" className="sign-in__form" onSubmit={onSubmit}>
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input ref={loginRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit" formAction='submit'>Sign in</button>
      </div>
    </form>
  );};

export default SignInForm;
