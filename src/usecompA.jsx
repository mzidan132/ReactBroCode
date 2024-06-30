// ChildComponent.jsx
import React, { useContext } from 'react';
import {MyContext} from './usecontext.jsx'

export default function UsecompA() {
  // Consume the context value
  const contextValue = useContext(MyContext);

  return (
    <div>
      <h3>ChildA </h3>
      {contextValue}
    </div>
  );
}
