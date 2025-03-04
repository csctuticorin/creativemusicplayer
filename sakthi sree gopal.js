const playlist = [
  { title: "Moongil Thottam", src: "03 - Moongil Thottam (www.Mixss.com).mp3", image: "kadal.webp"  },
  { title: "Aga Naga", src: "Aga Naga Ponniyin Selvan 128 Kbps.mp3", image: "aga naga.jpg" },
  { title: "Nenjame Nenjame", src: "Nenjame Nenjame Maamannan 128 Kbps.mp3", image: "nenjamaa.jpg" },
  { title: "Ninaivirukka ", src: "Ninaivirukka Pathu Thala 128 Kbps.mp3", image: "pathu.jpg" },
  { title: "Maiyal Hi Nanna", src: "Maiyal Hi Nanna Tamil 128 Kbps.mp3", image: "hi nana.jpg" },
  { title: "Railin Oligal", src: "Railin Oligal Blue Star 128 Kbps.mp3", image: "blue star.jpg" },
  { title: "Rendu Kaadhal", src: "Rendu Kaadhal Kaathuvaakula Rendu Kaadhal 128 Kbps.mp3", image: "rendu.jpg" },
  { title: "Theansudare", src: "Theansudare Lover 128 Kbps.mp3", image: "lover.jpg" },
  { title: "Welcome To Hyderabad", src: "Welcome To Hyderabad Premalu 128 Kbps.mp3", image: "premalu.jpg" },
  { title: "Bhoomi Bhoomi", src: "Bhoomi Bhoomi Chekka Chivantha Vaanam 128 Kbps.mp3", image: "cheka.jpg" }
];

let currentSongIndex = 0;
let isPlaying = false;
let audio = document.getElementById("myAudio");
let playPauseBtn = document.getElementById("playPauseBtn");
let currentSongTitle = document.getElementById("currentSong");
let currentImage = document.getElementById("currentImage");
let playlistItems = document.getElementById("playlist").getElementsByTagName("li");

function playSong(index) {
  currentSongIndex = index;
  audio.src = playlist[index].src;
  currentSongTitle.textContent = playlist[index].title;
  currentImage.src = playlist[index].image;
  audio.play();
  isPlaying = true;
  updatePlayPauseButton();
}

function updatePlayPauseButton() {
  if (isPlaying) {
    playPauseBtn.innerHTML = '<i class="bi bi-pause"></i>';
  } else {
    playPauseBtn.innerHTML = '<i class="bi bi-play"></i>';
  }
}

function togglePlayPause() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
  updatePlayPauseButton();
}

function prevSong() {
  let newIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
  playSong(newIndex);
}

function nextSong() {
  let newIndex = (currentSongIndex + 1) % playlist.length;
  playSong(newIndex);
}


playPauseBtn.addEventListener("click", togglePlayPause);

audio.addEventListener("play", function() {
  isPlaying = true;
  updatePlayPauseButton();
});

audio.addEventListener("pause", function() {
  isPlaying = false;
  updatePlayPauseButton();
});

audio.addEventListener("ended", function() {
  nextSong();
});


playSong(currentSongIndex);


for (let i = 0; i < playlistItems.length; i++) {
  playlistItems[i].addEventListener("click", function() {
    playSong(i);
  });
}


document.getElementById("volumeSlider").addEventListener("input", function() {
  audio.volume = this.value;
});


document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const playlistItems = document.querySelectorAll('#playlist li');
  const suggestionsList = document.getElementById('suggestionsList');

  searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    suggestionsList.innerHTML = '';

    if (searchTerm.length === 0) {
      playlistItems.forEach(item => {
        item.style.display = 'block';
      });
      return;
    }

    const matchedSongs = [];

    playlistItems.forEach(item => {
      const songName = item.textContent.trim().toLowerCase();
      const itemVisible = songName.includes(searchTerm);

      if (itemVisible) {
        matchedSongs.push(songName);
      }
    });

    matchedSongs.forEach(song => {
      const suggestionItem = document.createElement('li');
      suggestionItem.textContent = song;
      suggestionItem.addEventListener('click', function() {
        searchInput.value = song;
        suggestionsList.innerHTML = '';
        filterPlaylist(song);
      });
      suggestionsList.appendChild(suggestionItem);
    });

    playlistItems.forEach(item => {
      const songName = item.textContent.trim().toLowerCase();
      const itemVisible = songName.includes(searchTerm);
      if (itemVisible) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });

  function filterPlaylist(songName) {
    playlistItems.forEach(item => {
      const itemName = item.textContent.trim().toLowerCase();
      const itemVisible = itemName.includes(songName);
      if (itemVisible) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const playlist = [
    { name: 'Moongil Thottam ', src: '03 - Moongil Thottam (www.Mixss.com).mp3' },
    { name: 'Aga Naga', src: 'Aga Naga Ponniyin Selvan 128 Kbps.mp3' },
    { name: 'Nenjame Nenjame', src: 'Nenjame Nenjame Maamannan 128 Kbps.mp3' },
    { name: 'Ninaivirukka Pathu', src: 'Ninaivirukka Pathu Thala 128 Kbps.mp3' },
    { name: 'Maiyal Hi Nanna', src: 'Maiyal Hi Nanna Tamil 128 Kbps.mp3' },
    { name: 'Railin Oligal', src: 'Railin Oligal Blue Star 128 Kbps.mp3' },
    { name: 'Rendu Kaadhal', src: 'Rendu Kaadhal Kaathuvaakula Rendu Kaadhal 128 Kbps.mp3' },
    { name: 'Theansudare', src: 'Theansudare Lover 128 Kbps.mp3' },
    { name: 'Welcome To Hyderabad', src: 'Welcome To Hyderabad Premalu 128 Kbps.mp3' },
    { name: 'Bhoomi Bhoomi', src: 'Bhoomi Bhoomi Chekka Chivantha Vaanam 128 Kbps.mp3' }
  ];

  const audio = document.getElementById('myAudio');
  const playPauseBtn = document.getElementById('playPauseBtn');
  let currentSongIndex = 0;


  function initPlayer() {
    updateSongInfo(currentSongIndex);
  }


  function updateSongInfo(index) {
    const currentSong = playlist[index];
    document.getElementById('currentSong').textContent = currentSong.name;
    audio.src = currentSong.src;
    audio.load(); 
  }


  function togglePlayPause() {
    if (audio.paused) {
      audio.play();
      playPauseBtn.innerHTML = '<i class="bi bi-pause"></i> Pause';
    } else {
      audio.pause();
      playPauseBtn.innerHTML = '<i class="bi bi-play"></i> Play';
    }
  }


  document.getElementById('prevBtn').addEventListener('click', function() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    updateSongInfo(currentSongIndex);
    if (!audio.paused) {
      audio.play(); 
    }
  });

  document.getElementById('nextBtn').addEventListener('click', function() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    updateSongInfo(currentSongIndex);
    if (!audio.paused) {
      audio.play(); 
    }
  });


  initPlayer();

  playPauseBtn.addEventListener('click', togglePlayPause);
});
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();
const audioElement = document.getElementById('myAudio');
const canvas = document.getElementById('waveformCanvas');
const canvasCtx = canvas.getContext('2d');

const source = audioContext.createMediaElementSource(audioElement);
source.connect(analyser);
analyser.connect(audioContext.destination);

analyser.fftSize = 256; // Adjust as needed
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
function drawWaveform() {
  analyser.getByteTimeDomainData(dataArray);

  canvasCtx.fillStyle = '#181818'; // Background color
  canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

  const barWidth = (canvas.width / bufferLength) * 2.5;
  let barHeight;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i] / 2; // Scale down the height

    canvasCtx.fillStyle = '#1db954'; // Waveform color
    canvasCtx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

    x += barWidth + 1; // Increase the gap between bars
  }

  requestAnimationFrame(drawWaveform);
}

// Call drawWaveform function to start drawing
drawWaveform();



