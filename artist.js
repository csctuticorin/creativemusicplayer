document.addEventListener('DOMContentLoaded', function() {
  let selectedArtists = [];

  const addToCartButtons = document.querySelectorAll('.addToCartBtn');
  const cartList = document.getElementById('cartList');
  const confirmBtn = document.getElementById('confirmBtn');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const artistId = button.getAttribute('data-artist-id');
      const artistName = button.getAttribute('data-artist-name');

    
      const index = selectedArtists.findIndex(artist => artist.id === artistId);

      if (index === -1) {
      
        selectedArtists.push({ id: artistId, name: artistName });

        
        updateCartList();
      } else {
        console.log('Artist already selected.');
      }
    });
  });
  

  confirmBtn.addEventListener('click', function() {
    console.log('Selected Artists:', selectedArtists);
    alert('Selection confirmed! Check the console for the list of favorite artists.');
  });

  function updateCartList() {
    cartList.innerHTML = ''; 

    selectedArtists.forEach(artist => {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item';
      listItem.textContent = artist.name;

    
      const removeButton = document.createElement('button');
      removeButton.className = 'btn btn-danger btn-sm float-end';
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', function() {
        removeFromCart(artist.id);
      });

      listItem.appendChild(removeButton);
      cartList.appendChild(listItem);
    });

    updateCartCount();
  }

  function removeFromCart(artistId) {
    selectedArtists = selectedArtists.filter(artist => artist.id !== artistId);
    updateCartList();
  }

  function updateCartCount() {
    document.querySelector('.btn-warning h1').textContent = selectedArtists.length;
  }

  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });

  document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - document.getElementById('navbar').offsetHeight,
          behavior: 'smooth'
        });
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const addToCartButtons = document.querySelectorAll('.addToCartBtn');
  const selectedArtists = []; 

  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          const artistId = this.getAttribute('data-artist-id');
          const artistName = this.getAttribute('data-artist-name');
          addToFavorites(artistId, artistName);
      });
  });

  function addToFavorites(artistId, artistName) {
      selectedArtists.push({ id: artistId, name: artistName });
  }

  const confirmBtn = document.getElementById('confirmBtn');
  confirmBtn.addEventListener('click', function () {
      if (selectedArtists.length > 0) {
          const selectedArtist = selectedArtists[selectedArtists.length - 1];
          redirectToArtistPage(selectedArtist.name);
      } else {
          alert("Please add at least one artist to favorites.");
      }
  });
  

  function redirectToArtistPage(artistName) {
      switch (artistName) {
          case "Shakthisree Gopalan":
              window.location.href = "shakthisree gopal.html";
              break;
          case "SP.Balasubrahmanyam":
              window.location.href = "sp.html";
              break;
          case "Janaki":
              window.location.href = "janaki.html";
              break;
          case "Yuvan Shankar Raja":
              window.location.href = "yuvan shanker.html";
              break;
          case "A.R. Rahman":
              window.location.href = "A r raman.html";
              break;
          case "Jonita Gandhi":
              window.location.href = "jonita gandhi.html";
              break;
          case "Vijay Antony":
              window.location.href = "vijay antony.html";
              break;
          case "Anirudh Ravichander":
              window.location.href = "anirudith.html";
              break;
          case "Hip-hop Athi":
              window.location.href = "hip hop athi.html";
              break; 
          case "Andrea Jeremiah":
              window.location.href = "andrew.html";
              break;
          case "K.S. Chitra":
              window.location.href = "ks citra.html";
              break;
          case "GV Prakash":
              window.location.href = "gv prakesh.html";
              break;    
          default:
              alert("Selected artist not found!");
      }
  }
});
