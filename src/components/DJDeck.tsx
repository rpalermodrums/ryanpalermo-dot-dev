import React, { useState, useCallback } from 'react';
import SoundWave from './SoundWave';

const DJDeck: React.FC = () => {
  const [colorProgress, setColorProgress] = useState(0);
  const [audioSources, setAudioSources] = useState<[string | null, string | null]>([null, null]);

  const handleInteraction = () => {
    setColorProgress(prev => Math.min(prev + 0.05, 1));
  };

  const handleFileUpload = useCallback((index: number) => (file: File) => {
    const url = URL.createObjectURL(file);
    setAudioSources(prev => {
      const newSources = [...prev] as [string | null, string | null];
      newSources[index] = url;
      return newSources;
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full h-full" onClick={handleInteraction}>
      <SoundWave
        width={400}
        height={200}
        className="w-full md:w-1/2 h-1/2 md:h-full"
        colorProgress={colorProgress}
        onFileUpload={handleFileUpload(0)}
      />
      <SoundWave
        width={400}
        height={200}
        className="w-full md:w-1/2 h-1/2 md:h-full"
        colorProgress={colorProgress}
        onFileUpload={handleFileUpload(1)}
      />
      {audioSources[0] && (
        <audio src={audioSources[0]} controls className="w-full md:w-1/2" />
      )}
      {audioSources[1] && (
        <audio src={audioSources[1]} controls className="w-full md:w-1/2" />
      )}
    </div>
  );
};

export default DJDeck;