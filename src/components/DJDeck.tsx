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
    <div className="flex flex-col md:flex-row w-full h-full">
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        <SoundWave
          width={400}
          height={200}
          className="w-full h-full"
          onFileUpload={handleFileUpload(0)}
          bpm={bpms[0]}
        />
        <input 
          type="range" 
          min="60" 
          max="200" 
          value={bpms[0]} 
          onChange={handleBpmChange(0)}
          className="w-full mt-2"
        />
        <span>BPM: {bpms[0]}</span>
        {audioSources[0] && (
          <audio src={audioSources[0]} controls className="w-full mt-2" />
        )}
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        <SoundWave
          width={400}
          height={200}
          className="w-full h-full"
          onFileUpload={handleFileUpload(1)}
          bpm={bpms[1]}
        />
        <input 
          type="range" 
          min="60" 
          max="200" 
          value={bpms[1]} 
          onChange={handleBpmChange(1)}
          className="w-full mt-2"
        />
        <span>BPM: {bpms[1]}</span>
        {audioSources[1] && (
          <audio src={audioSources[1]} controls className="w-full mt-2" />
        )}
      </div>
    </div>
  );
};

export default DJDeck;