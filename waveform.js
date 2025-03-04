const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();
const audioElement = document.getElementById('myAudio');
const canvas = document.getElementById('waveformCanvas');
const canvasCtx = canvas.getContext('2d');

// Connect the audio element to the analyser node
const source = audioContext.createMediaElementSource(audioElement);
source.connect(analyser);
analyser.connect(audioContext.destination);

// Set analyser node properties
analyser.fftSize = 256; // Adjust to get the desired resolution
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

// Draw the waveform
function drawWaveform() {
  analyser.getByteTimeDomainData(dataArray);

  canvasCtx.fillStyle = '#181818'; // Background color of the canvas
  canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

  canvasCtx.lineWidth = 2;
  canvasCtx.strokeStyle = '#1db954'; // Color of the waveform
  canvasCtx.beginPath();

  const sliceWidth = canvas.width * 1.0 / bufferLength;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    const v = dataArray[i] / 128.0; // Normalize the data
    const y = v * canvas.height / 2;

    if (i === 0) {
      canvasCtx.moveTo(x, y);
    } else {
      canvasCtx.lineTo(x, y);
    }

    x += sliceWidth;
  }

  canvasCtx.lineTo(canvas.width, canvas.height / 2);
  canvasCtx.stroke();

  requestAnimationFrame(drawWaveform);
}

// Start the animation loop
drawWaveform();
