const playlist = [
    { title: "Aathichudi", src: "Aathichudi.mp3", image: "aathichod.jpg" },
    { title: "Dailamo Dailamo", src: "Dailamo-Dailamo.mp3", image: "Dishyum.jpg" },
    { title: "Karikalan Kala Pola", src: "Karikalan-Kala-Pola.mp3", image: "Vettaikaaran.jpg" },
    { title: "Makkayala", src: "Makkayala.mp3", image: "Naan.jpg" },
    { title: "Maskaara Pottu", src: "Mascara-Pottu.mp3", image: "Salim.jpg" },
    { title: "Nakka Mukka", src: "Naakka Mukka.mp3", image: "Kadhalil_Vizhunthen.jpg" },
    { title: "Naga Naga", src: "Naga-Naga-MassTamilan.com.mp3", image: "Thimiru_Pudichavan.jpg" },
    { title: "Nana Buluku", src: "Nana-Buluku-MassTamilan.dev.mp3", image: "Pichaikkaran_2.jpg" },
    { title: "Nooru Samigal", src: "Nooru-Samigal.mp3", image: "Pichaikaran.jpg" },
    { title: "Piya Piya", src: "Piya-Piya.mp3", image: "Ninaithale_Inikkum.jpg" }
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
        { name: "Aathichudi", src: "Aathichudi.mp3",  },
        { name: "Dailamo Dailamo", src: "Dailamo-Dailamo.mp3",  },
        { name: "Karikalan Kala Pola", src: "Karikalan-Kala-Pola.mp3" },
        { name: "Makkayala", src: "Makkayala.mp3", },
        { name: "Maskaara Pottu", src: "Mascara-Pottu.mp3", },
        { name: "Nakka Mukka", src: "Naakka Mukka.mp3", },
        { name: "Naga Naga", src: "Naga-Naga-MassTamilan.com.mp3", },
        { name: "Nana Buluku", src: "Nana-Buluku-MassTamilan.dev.mp3", },
        { name: "Nooru Samigal", src: "Nooru-Samigal.mp3",},
        { name: "Piya Piya", src: "Piya-Piya.mp3", }
      ]
  
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