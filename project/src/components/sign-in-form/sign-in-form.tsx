import React from 'react';
import { FormEvent, useRef } from 'react';
import { ComponentTestID, ComponentText, ElementTestID } from '../../const/enums';
import { TAuthData } from '../../types/data';

const SignInForm = ({handleLoginSubmit}: {handleLoginSubmit: (authData: TAuthData) => void}) => {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current && passwordRef.current) {
      handleLoginSubmit({
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
