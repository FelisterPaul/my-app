import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello(props) {
  return (
    <div style={{ backgroundColor: 'pink', padding: '20px', textAlign: 'center' }}>
      <h1>I'm a Barbier Engineer, {props.name}!</h1>
      <img 
        src="https://via.placeholder.com/150" 
        alt="My portrait" 
        style={{ borderRadius: '50%', marginBottom: '15px' }} 
      />
      <p>
        Hello! My name is {props.name}. I'm passionate about engineering and creativity. 
        I specialize in hair styling tools and innovative beauty tech. I enjoy building things that 
        combine both form and function to enhance everyday life.
      </p>
    </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Hello name="Felister Mwende" />);
