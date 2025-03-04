const playlist = [
    { title: "Ennai-Kaanavillaiye", src: "Ennai-Kaanavillaiye.mp3", image: "kadhal-desam-1996.webp"  },
    { title: "Kadhalikum-Pennin", src: "Kadhalikum-Pennin-MassTamilan.dev.mp3", image: "kadhalan-tamil-1994.webp" },
    { title: "Maanguyile Poonguyile", src: "Maanguyile Poonguyile (Solo).mp3", image: "karakattakkaran-tamil-1989.webp" },
    { title: "Malare.mp3", src: "Malare.mp3", image: "karna.webp" },
    { title: "Mannil Indha.mp3", src: "Mannil Indha.mp3", image: "keladi-kanmani-tamil-1990.webp" },
    { title: "Nilaave Vaa", src: "Nilaave Vaa.mp3", image: "mouna-ragam-tamil-1986.webp" },
    { title: "Othayadi-Paadhayile", src: "Othayadi-Paadhayile---Spb-MassTamilan.fm.mp3", image: "aatha-un-kovilile-tamil-1991.webp" },
    { title: "Panivizhum-Malar", src: "Panivizhum-Malar-Vanam-MassTamilan.com.mp3", image: "ninaivellam-nithya2.webp" },
    { title: "Nenjukulle-Innarunnu", src: "Nenjukulle-Innarunnu-MassTamilan.com.mp3", image: "ponnumani.webp" },
    { title: "Ilaiya Nila", src: "Ilaiya Nila.mp3", image: "payanangal-mudivathillai-tamil-1982.webp" }
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
      { name: 'Ennai-Kaanavillaiye', src: 'Ennai-Kaanavillaiye.mp3' },
      { name: 'Kadhalikum-Pennin', src: 'Kadhalikum-Pennin-MassTamilan.dev.mp3' },
      { name: 'Maanguyile Poonguyile', src: 'Maanguyile Poonguyile (Solo).mp3' },
      { name: 'Malare', src: 'Malare.mp3' },
      { name: 'Mannil Indha', src: 'Mannil Indha.mp3' },
      { name: 'Nilaave Vaai', src: 'Nilaave Vaa.mp3' },
      { name: 'Othayadi-Paadhayile', src: 'Othayadi-Paadhayile---Spb-MassTamilan.fm.mp3' },
      { name: 'Panivizhum-Malar', src: 'Panivizhum-Malar-Vanam-MassTamilan.com.mp3' },
      { name: 'Nenjukulle-Innarunnu', src: 'Nenjukulle-Innarunnu-MassTamilan.com.mp3' },
      { name: 'Ilaiya Nila', src: 'Ilaiya Nila' }
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
  
  analyser.fftSize = 256;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  function drawWaveform() {
    analyser.getByteTimeDomainData(dataArray);
  
    canvasCtx.fillStyle = '#181818'; 
    canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
  
    const barWidth = (canvas.width / bufferLength) * 2.5;
    let barHeight;
    let x = 0;
  
    for (let i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i] / 2; 
  
      canvasCtx.fillStyle = '#1db954'; 
      canvasCtx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
  
      x += barWidth + 1; 
    }
  
    requestAnimationFrame(drawWaveform);
  }
  drawWaveform();