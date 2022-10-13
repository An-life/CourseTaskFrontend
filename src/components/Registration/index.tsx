import React, { useState } from 'react';

import Login from './Login';
import SignIn from './SignIn';

function Registration(): JSX.Element {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div>
      {!isRegistered && <Login onClick={() => setIsRegistered(true)} />}
      {isRegistered && <SignIn onClick={() => setIsRegistered(false)} />}
    </div>
  );
}

export default Registration;
