import { useState, useRef, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { FaPlay, FaPause, FaStop, FaFileDownload, FaCircle } from 'react-icons/fa';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("https://img.pikbest.com/ai/illus_our/20230426/88c25649a4fa2378d4d634695759b661.jpg!w700wp");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const VisualizerContainer = styled.div`
  position: relative;
  width: 800px;
  height: 400px;
  margin-bottom: 2rem;
  background: transparent;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

const Controls = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const FileLabel = styled.label`
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const ColorToggleButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
`;

function App() {
  const [audioContext, setAudioContext] = useState(null);
  const [source, setSource] = useState(null);
  const [analyser, setAnalyser] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isColorful, setIsColorful] = useState(true); // New state for color toggle
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const recordedStreamRef = useRef(null);

  useEffect(() => {
    const newAudioContext = new (window.AudioContext || window.webkitAudioContext)();
    const newAnalyser = newAudioContext.createAnalyser();
    newAnalyser.fftSize = 2048;
    
    setAudioContext(newAudioContext);
    setAnalyser(newAnalyser);

    return () => {
      if (recordedStreamRef.current) {
        recordedStreamRef.current.getTracks().forEach(track => track.stop());
      }
      newAudioContext.close();
    };
  }, []);

  useEffect(() => {
    if (!analyser || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY) - 50;

      // Draw circular visualization
      const barCount = 360;
      const angleStep = (2 * Math.PI) / barCount;

      for (let i = 0; i < barCount; i++) {
        const angle = i * angleStep;
        const frequency = dataArray[Math.floor(i * bufferLength / barCount)];
        const barHeight = (frequency / 255) * radius * 0.75; // Make bars occupy the circle more

        // Start from the circle's circumference and extend outward
        const startX = centerX + radius * Math.cos(angle);
        const startY = centerY + radius * Math.sin(angle);
        const endX = centerX + (radius + barHeight) * Math.cos(angle);
        const endY = centerY + (radius + barHeight) * Math.sin(angle);

        // Conditional color change based on isColorful state
        let strokeStyle;
        if (isColorful) {
          const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
          gradient.addColorStop(0, `hsla(${i}, 100%, 50%, 0.8)`);
          gradient.addColorStop(1, `hsla(${(i + 60) % 360}, 100%, 50%, 0.2)`);
          strokeStyle = gradient;
        } else {
          strokeStyle = 'rgba(255, 255, 255, 0.8)'; // White for white mode
        }

        // Draw the bar
        ctx.beginPath();
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = 2;
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }

      // Draw base circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.stroke();
    };

    draw();
  }, [analyser, isColorful]); // Re-run drawing logic when `isColorful` changes

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      const arrayBuffer = e.target.result;
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      
      if (source) {
        source.disconnect();
      }

      const newSource = audioContext.createBufferSource();
      newSource.buffer = audioBuffer;
      newSource.connect(analyser);
      analyser.connect(audioContext.destination);
      
      setSource(newSource);
      toast.success('Audio loaded successfully!');
    };
    reader.readAsArrayBuffer(file);
  };

  const startRecording = () => {
    if (!source) {
      toast.error('Please load an audio file first!');
      return;
    }

    // Create a stream from the canvas
    const canvasStream = canvasRef.current.captureStream(60);
    
    // Create a destination node for the audio
    const destination = audioContext.createMediaStreamDestination();
    source.connect(destination);
    
    // Combine video and audio streams
    const combinedStream = new MediaStream([
      ...canvasStream.getVideoTracks(),
      ...destination.stream.getAudioTracks()
    ]);

    recordedStreamRef.current = combinedStream;

    // Create and configure MediaRecorder
    mediaRecorderRef.current = new MediaRecorder(combinedStream, {
      mimeType: 'video/webm;codecs=vp9,opus',
      videoBitsPerSecond: 2500000 // 2.5 Mbps for better quality
    });

    chunksRef.current = [];

    mediaRecorderRef.current.ondataavailable = (e) => {
      if (e.data.size > 0) {
        chunksRef.current.push(e.data);
      }
    };

    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'music-visualization.webm';
      a.click();
      URL.revokeObjectURL(url);
      toast.success('Recording saved!');
    };

    mediaRecorderRef.current.start(100);
    setIsRecording(true);
    toast.success('Recording started!');
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      recordedStreamRef.current.getTracks().forEach(track => track.stop());
      setIsRecording(false);
    }
  };

  const togglePlayback = () => {
    if (!source) {
      toast.error('Please select an audio file first!');
      return;
    }

    if (isPlaying) {
      source.stop();
      setIsPlaying(false);
    } else {
      const newSource = audioContext.createBufferSource();
      newSource.buffer = source.buffer;
      newSource.connect(analyser);
      newSource.start();
      setSource(newSource);
      setIsPlaying(true);
    }
  };

  const toggleColorScheme = () => {
    setIsColorful(!isColorful); // Toggle the color scheme
  };

  return (
    <Container>
      <Toaster position="top-right" />
      <Title>Music Visualizer</Title>
      
      <VisualizerContainer ref={containerRef}>
        <Canvas ref={canvasRef} width={800} height={400} />
      </VisualizerContainer>
      
      <Controls>
        <Button onClick={togglePlayback}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </Button>
        
        <Button 
          onClick={isRecording ? stopRecording : startRecording}
          style={{ color: isRecording ? '#ff6b6b' : 'white' }}
        >
          <FaCircle />
        </Button>

        <FileLabel>
          Choose Audio File
          <FileInput 
            type="file" 
            accept="audio/*" 
            onChange={handleFileChange}
          />
        </FileLabel>

        <ColorToggleButton onClick={toggleColorScheme}>
          {isColorful ? 'Switch to White' : 'Switch to Colorful'}
        </ColorToggleButton>
      </Controls>
    </Container>
  );
}

export default App;
