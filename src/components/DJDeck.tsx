import React, { useState } from 'react';
import SoundWave from './SoundWave';

const DJDeck: React.FC = () => {
  const [colorProgress, setColorProgress] = useState(0);

  const handleInteraction = () => {
    setColorProgress(prev => Math.min(prev + 0.05, 1));
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-full" onClick={handleInteraction}>
      <SoundWave
        width={400}
        height={200}
        className="w-full md:w-1/2 h-1/2 md:h-full"
        colorProgress={colorProgress}
      />
      <SoundWave
        width={400}
        height={200}
        className="w-full md:w-1/2 h-1/2 md:h-full"
        colorProgress={colorProgress}
      />
    </div>
  );
};

export default DJDeck;