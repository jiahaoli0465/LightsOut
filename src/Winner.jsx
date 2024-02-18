import React from 'react';

const Winner = () => {
  return (
    <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        width: 'auto',
        minWidth: '200px',
        maxWidth: '90%',
        zIndex: 1001, 

    }}>
        <h1>You Won!</h1>
        <button onClick={() => window.location.reload()} style={{
            marginTop: '15px',
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: '#f8d7da',
            color: '#721c24',
        }}>Restart</button>
    </div>
  );
};

export default Winner;
