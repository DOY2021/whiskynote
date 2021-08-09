import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MailVf from '../Feature/SignUp/MailVerification/MailVf';
import SignUpOne from '../Feature/SignUp/EmailSignUp/SignUp';
import SignUp from '../Feature/SignUp/EmailSignUp/SignUp';
import SignUpTwo from '../Feature/SignUp/ProfileRegister/SignUpTwo';
import TypeChoice from '../Feature/SignUp/TypeChoice/TypeChoice';
import SignIn from '../Feature/SignIn/SignIn';
import SocialLogin from '../Feature/SignIn/SocialLogin';

function SignUpPage({ match }) {
  return (
    <Switch>
      <Route path="/signup/type-choice" exact component={TypeChoice} />
      <Route path="/signup/email" exact component={SignUpOne} />
    
      <Route path="/signup/email-verification" exact component={MailVf} />
      <Route path="/signup/register_profile" exact component={SignUpTwo} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/api/account-confirm-email/:value" component={SignIn} />
    </Switch>
  );
}

export default SignUpPage;
