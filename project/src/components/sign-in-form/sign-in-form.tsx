import React from 'react';
import { FormEvent, useRef } from 'react';
import { ComponentTestID, ComponentText, ElementTestID } from '../../const/enums';
import useAppDispatch from '../../hooks/use-app-dispatch/use-app-dispatch';
import { loginAction } from '../../store/user/user-api-actions';
import { TAuthData } from '../../types/data';

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
    <form action="" className="sign-in__form" onSubmit={onSubmit} data-testid={ComponentTestID.SignInForm}>
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input ref={loginRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" data-testid={ElementTestID.Login}/>
          <label className="sign-in__label visually-hidden" htmlFor='user-email'>{ComponentText.Email}</label>
        </div>
        <div className="sign-in__field">
          <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" data-testid={ElementTestID.Passsword}/>
          <label className="sign-in__label visually-hidden" htmlFor="user-password">{ComponentText.Password}</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit" formAction='submit'>{ComponentText.SignIn}</button>
      </div>
    </form>
  );};

export default SignInForm;
