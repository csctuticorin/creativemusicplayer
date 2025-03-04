
const playlist = [
    { title: "Ek Do Theen", src: "Ek-Do-Theen.mp3", image: "anjaan.webp" },
    { title: "En Pulse YEthitu Poriye", src: "En-Pulse-Yethitu-Poriye.mp3", image: "kavalai-vendam-2016.webp" },
    { title: "Engadi Porandha", src: "Engadi-Porandha.mp3", image: "download (1).jpeg" },
    { title: "Google google", src: "Google-Google-MassTamilan.fm.mp3", image: "thuppakki-tamil-2012.webp" },
    { title: "Idhu Varai", src: "Idhu-Varai.mp3", image: "download (2).jpeg" },
    { title: "Oo Soldriya", src: "Oo-Solriya-Oo-Oo-Solriya-MassTamilan.fm.mp3", image: "pushpa-the-rise-tamil-2021.webp" },
    { title: "Pookal Pookum", src: "Pookal-Pookum.mp3", image: "madrasapattinam.webp" },
    { title: "Theeradha Vilaiyatu", src: "Theeratha-Vilayattu.mp3", image: "theeradha-vilaiyattu-pillai-2009.webp" },
    { title: "UN Mela Aasathan", src: "Un-Mela-Aasadhaan.mp3", image: "aayirathil-oruvan.webp" },
    { title: "Vaada Bin Laada", src: "Vaada-Bin-Laada.mp3", image: "mankatha.webp" }
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
        { name: 'Ek Do Theen ', src: 'Ek-Do-Theen.mp3' },
        { name: 'En Pulse Yethitu Poriyae', src: 'En-Pulse-Yethitu-Poriye.mp3' },
        { name: ' Engadi Porandha', src: 'Engadi-Porandha.mp3' },
        { name: ' Google Google', src: 'Google-Google-MassTamilan.fm.mp3' },
        { name: 'Idhu Varai', src: 'Idhu-Varai.mp3' },
        { name: ' Oo Soldriya Oo Oo Soldriya', src: 'Oo-Solriya-Oo-Oo-Solriya-MassTamilan.fm.mp3' },
        { name: ' Pookal Pookum', src: 'Pookal-Pookum.mp3' },
        { name: 'Theeradha Vilayattu', src: 'Theeratha-Vilayattu.mp3' },
        { name: 'Un Mela AasaDhan', src: 'Un-Mela-Aasadhaan.mp3' },
        { name: 'Vaada Bin Laada', src: 'Vaada-Bin-Laada.mp3' }
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