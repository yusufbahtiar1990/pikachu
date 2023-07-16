const fetchPokemon = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/25`);
  
      let pokemon = await response.json();
      console.log(pokemon);
      let nomor = pokemon.id;
      console.log(nomor);
      let nama = pokemon.name;
      console.log(nama);
      let gambar = pokemon.sprites.front_shiny;
      console.log(gambar);
      let tipe = pokemon.types[0].type.name;
      console.log(tipe);
      

      isidata(nomor, nama, gambar, tipe);
    } 
    catch (error) {
      console.log(error);
      return;
    }
  };

  function isidata(nomor, nama, gambar, tipe) {
    let nomorpokemon = document.querySelector('.nomor');
    nomorpokemon.innerHTML = nomor;

    let namapokemon = document.querySelector('.nama');
    namapokemon.innerHTML = nama;

    let gambarpokemon = document.querySelector('.gambar');
    gambarpokemon.src = gambar;

    let tipepokemon = document.querySelector('.tipe');
    tipepokemon.innerHTML = tipe;   
  }
  
 