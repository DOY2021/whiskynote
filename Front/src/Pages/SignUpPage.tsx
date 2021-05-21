import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MailVf from '../Feature/SignUp/MailVerification/MailVf';
import SignUpOne from '../Feature/SignUp/EmailSignUp/SignUp';
import SignUp from '../Feature/SignUp/EmailSignUp/SignUp';
import SignUpTwo from '../Feature/SignUp/ProfileRegister/SignUpTwo';
import TypeChoice from '../Feature/SignUp/TypeChoice/TypeChoice';

function SignUpPage({ match }) {
  return (
    <Switch>
      <Route path="/signup/type-choice" exact component={TypeChoice} />
      <Route path="/signup/email" exact component={SignUpOne} />
      <Route path="/signup/register_profile" exact component={SignUpTwo} />
      <Route path="/signup" exact component={SignUp} />
    </Switch>
  );
}

export default SignUpPage;
