import React, { useState } from 'react';

function ClickerApp() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Simple Clicker</h1>
      <p>Clicks: {count}</p>
      <button 
        onClick={handleClick} 
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Click Me!
      </button>
    </div>
  );
}

export default ClickerApp;
