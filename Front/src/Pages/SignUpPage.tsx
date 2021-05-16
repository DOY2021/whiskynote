import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MailVf from '../Feature/SignUp/MailVerification/MailVf';
import SignUpOne from '../Feature/SignUp/StageOne/SignUp';
import SignUp from '../Feature/SignUp/StageOne/SignUp';
import SignUpTwo from '../Feature/SignUp/StageTwo/SignUpTwo';
import TypeChoice from '../Feature/SignUp/TypeChoice/TypeChoice';

function SignUpPage({ match }) {
  return (
    <Switch>
      <Route path="/signup/type-choice" exact component={TypeChoice} />
      <Route path="/signup/email/1" exact component={SignUpOne} />
      <Route path="/signup/email/2" exact component={SignUpTwo} />
      <Route path="/signup" exact component={SignUp} />
    </Switch>
  );
}

export default SignUpPage;
