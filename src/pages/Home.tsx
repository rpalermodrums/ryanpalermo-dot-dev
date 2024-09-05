import React, { useState } from 'react';
import DJDeck from '../components/DJDeck';

const Home: React.FC = () => {
  const [colorProgress, setColorProgress] = useState(0);

  const handleInteraction = () => {
    setColorProgress(prev => Math.min(prev + 0.02, 1));
  };

  const getBackgroundStyle = () => {
    if (colorProgress === 0) return 'bg-black';
    const hue = colorProgress * 360;
    return `bg-[hsl(${hue},50%,10%)]`;
  };

  return (
    <div className={`min-h-screen ${getBackgroundStyle()} text-white`} onClick={handleInteraction}>
      <h1 className="text-4xl font-bold mb-4">Your Name</h1>
      <DJDeck />
      {/* ... rest of the content ... */}
    </div>
  );
};

export default Home;