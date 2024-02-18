import React from 'react';

const Overlay = () => {
  return (
    <div style={{
        position: 'fixed', 
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.5)', 
        backdropFilter: 'blur(5px)', 
        zIndex: 1000,
    }}></div>
  );
};

export default Overlay;
