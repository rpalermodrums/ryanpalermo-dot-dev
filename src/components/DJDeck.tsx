import React from 'react';
import SoundWave from './SoundWave';

interface DJDeckProps {
  width: number;
  height: number;
}

const DJDeck: React.FC<DJDeckProps> = ({ width, height }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
      <div className="w-full md:w-1/2">
        <SoundWave width={width / 2} height={height} color="hsl(var(--primary))" />
      </div>
      <div className="w-full md:w-1/2">
        <SoundWave width={width / 2} height={height} color="hsl(var(--secondary))" />
      </div>
    </div>
  );
};

export default DJDeck;