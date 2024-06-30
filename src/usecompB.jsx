// ChildComponent.jsx
import React, { useContext } from 'react';
import {MyContext} from './usecontext.jsx'

export default function UsecompB() {
  // Consume the context value
  const contextValue = useContext(MyContext);

  return (
    <div>
      <h3>Child </h3>
      {contextValue}
    </div>
  );
}


