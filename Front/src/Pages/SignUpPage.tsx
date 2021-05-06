import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MailVf from '../Feature/SignUp/MailVerification/MailVf';
import SignUp from '../Feature/SignUp/SignUp';

function SignUpPage({ match }) {
  return (
    <Switch>
      <Route path="/signup/landing" exact component={MailVf} />
      <Route path="/signup" exact component={SignUp} />
    </Switch>
  );
}

export default SignUpPage;
