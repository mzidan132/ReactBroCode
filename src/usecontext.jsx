// ParentComponent.jsx
import React, { useState, createContext } from 'react'
import UsecompB from './usecompB'
import UsecompA from './usecompA' 
export const MyContext = createContext();
//props drilling from A to B the B to C pass directly by hook A to C
function ParentComponent() {
  // Create some state to share
  const [sharedData, setSharedData] = useState('Hello from Parent Component!')

  return (
    <MyContext.Provider value={sharedData}>
      <div>
        <h3>Parent Component</h3>
        <p>{sharedData}</p>
        <UsecompB sharedData = {sharedData} />
        <UsecompA sharedData = {sharedData} />
      </div>
    </MyContext.Provider>
  );
}

export default ParentComponent;
