import React from 'react';
import SoundWave from './SoundWave';

interface DJDeckProps {
  width: number;
  height: number;
}

const DJDeck: React.FC<DJDeckProps> = ({ width, height }) => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="w-full">
        <SoundWave width={width} height={height} color="hsl(var(--primary))" />
      </div>
      <div className="w-full">
        <SoundWave width={width} height={height} color="hsl(var(--secondary))" />
      </div>
    </div>
  );
};

export default DJDeck;