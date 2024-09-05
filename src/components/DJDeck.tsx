import React, { useState, useCallback, useRef } from 'react';
import SoundWave from './SoundWave';
import TempoDetector from '../utils/TempoDetector';

const DJDeck: React.FC = () => {
  const [audioSources, setAudioSources] = useState<[string | null, string | null]>([null, null]);
  const [bpms, setBpms] = useState<[number, number]>([120, 120]);
  const tempoDetectorRef = useRef<TempoDetector>(new TempoDetector());

  const handleFileUpload = useCallback((index: number) => (file: File) => {
    const url = URL.createObjectURL(file);
    setAudioSources(prev => {
      const newSources = [...prev] as [string | null, string | null];
      newSources[index] = url;
      return newSources;
    });

    // Detect tempo asynchronously
    tempoDetectorRef.current.loadAudio(file).then(() => {
      tempoDetectorRef.current.detectTempo().then(detectedTempo => {
        setBpms(prev => {
          const newBpms = [...prev] as [number, number];
          newBpms[index] = Math.round(detectedTempo);
          return newBpms;
        });
      });
    });
  }, []);

  const handleBpmChange = useCallback((index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newBpm = parseInt(event.target.value, 10);
    setBpms(prev => {
      const newBpms = [...prev] as [number, number];
      newBpms[index] = newBpm;
      return newBpms;
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full h-full bg-gradient-to-br from-dreamscape-blue to-persistence-purple dark:from-dreamscape-blue dark:to-persistence-purple p-6 rounded-lg shadow-2xl">
      {[0, 1].map((index) => (
        <div key={index} className="w-full md:w-1/2 h-1/2 md:h-full p-4">
          <div className="bg-canvas-cream dark:bg-dreamscape-blue bg-opacity-90 dark:bg-opacity-50 rounded-lg p-4 shadow-lg backdrop-filter backdrop-blur-lg">
            <SoundWave
              width={400}
              height={200}
              className="w-full h-full"
              onFileUpload={handleFileUpload(index)}
              bpm={bpms[index]}
            />
            <div className="mt-4 flex items-center">
              <input 
                type="range" 
                min="60" 
                max="200" 
                value={bpms[index]} 
                onChange={handleBpmChange(index)}
                className="w-full accent-surreal-coral"
              />
              <span className="ml-2 text-dreamscape-blue dark:text-canvas-cream font-bold">BPM: {bpms[index]}</span>
            </div>
            {audioSources[index] && (
              <audio src={audioSources[index]} controls className="w-full mt-4 rounded" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DJDeck;