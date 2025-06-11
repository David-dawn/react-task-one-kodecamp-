import React from 'react';
import ProfileCard from './components/ProfileCard';
import './App.css'; 

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10rem',  }}>
      <ProfileCard
        name="Amosu David"
        img="/PD.jpg"
        bio="Creative Frontend Developer with a passion for crafting stunning, responsive, and user-focused interfaces that deliver seamless digital experiences."
      />
    </div>
  );
}

export default App;
