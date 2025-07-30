import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello(props) {
  return (
    <div style={{ backgroundColor: 'pink', padding: '20px' }}>
      <h1>I'm a barbier Engineer, {props.name}!</h1>
    </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Hello name="Felister" />);
