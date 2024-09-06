import { useCallback, useRef, useState } from "react";
import TempoDetector from "../utils/TempoDetector";

const useTempoDetection = () => {
	const [detectedTempo, setDetectedTempo] = useState<number | null>(null);
	const tempoDetectorRef = useRef<TempoDetector>(new TempoDetector());

	const detectTempo = useCallback(async (file: File) => {
		try {
			await tempoDetectorRef.current.loadAudio(file);
			const tempo = await tempoDetectorRef.current.detectTempo();
			setDetectedTempo(Math.round(tempo));
			return tempo;
		} catch (error) {
			console.error("Error detecting tempo:", error);
			return null;
		}
	}, []);

	return { detectedTempo, detectTempo };
};

export default useTempoDetection;
