import { useCallback, useRef, useState } from "react";
import TempoDetector from "../utils/TempoDetector";

const useAudioDeck = () => {
	const [audioSources, setAudioSources] = useState<
		[string | null, string | null]
	>([null, null]);
	const [bpms, setBpms] = useState<[number, number]>([120, 120]);
	const tempoDetectorRef = useRef<TempoDetector>(new TempoDetector());

	const handleFileUpload = useCallback(
		(index: number) => async (file: File) => {
			const url = URL.createObjectURL(file);
			setAudioSources((prev) => {
				const newSources = [...prev] as [string | null, string | null];
				newSources[index] = url;
				return newSources;
			});

			try {
				await tempoDetectorRef.current.loadAudio(file);
				const detectedTempo = await tempoDetectorRef.current.detectTempo();
				setBpms((prev) => {
					const newBpms = [...prev] as [number, number];
					newBpms[index] = Math.round(detectedTempo);
					return newBpms;
				});
			} catch (error) {
				console.error("Error detecting tempo:", error);
			}
		},
		[],
	);

	const handleBpmChange = useCallback(
		(index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
			const newBpm = Number.parseInt(event.target.value, 10);
			setBpms((prev) => {
				const newBpms = [...prev] as [number, number];
				newBpms[index] = newBpm;
				return newBpms;
			});
		},
		[],
	);

	return { audioSources, bpms, handleFileUpload, handleBpmChange };
};

export default useAudioDeck;
