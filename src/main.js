import {
  stringOfType, stringOfName, stringOfHeight, stringOfWeight,
  stringOfImg, stringOfCandy, stringOfCandyCount, stringOfEgg,
  stringOfSpawnTime, stringOfWeaknesses 
} from '/data.js';

// Select de TIPO
const selectFilterByType = document.getElementById('selectType');

// Select para filtrar por TIPO
selectFilterByType.addEventListener('change', () => {

  document.getElementById('selectWeak').value = ''; // Resetea el otro select para que vuelta a su valor original
  document.getElementById('searchBar').value = ''; // Resetea el input para que se vacíe

  const typeDroplist = document.getElementById('selectType').value; // Valor del droplist de tipo

  // Todas las variables que aparecen en las tarjetas de cada Pokemón
  const stringPokeName = stringOfName('type', typeDroplist);
  const stringPokeType = stringOfType('type', typeDroplist);
  const stringPokeHeight = stringOfHeight('type', typeDroplist);
  const stringPokeWeight = stringOfWeight('type', typeDroplist);
  const stringPokeImg = stringOfImg('type', typeDroplist);
  const stringPokeCandy = stringOfCandy('type', typeDroplist);
  const stringPokeCandyCount = stringOfCandyCount('type', typeDroplist);
  const stringPokeEgg = stringOfEgg('type', typeDroplist);
  const stringPokeSpawnTime = stringOfSpawnTime('type', typeDroplist);
  const stringPokeWeaknesses = stringOfWeaknesses('type', typeDroplist);
  /* let objectPokePrevEvolution = stringOfType(typeDroplist).map(pokemon => pokemon.prev_evolution)
  .map(x => x !== undefined ? x : 'No tiene'); //Mapeo de Pre Evolución */
  /* let stringPokeNextEvolution = stringOfType(typeDroplist).map(pokemon => pokemon.next_evolution)
  .map(x => x !== undefined ? x : 'No tiene'); //Mapeo de Prox Evolución */


  // Borra todos los hijos de Content of Cards antes de imprimir
  const divCard = document.getElementById('contentOfCards');
  while (divCard.hasChildNodes()) {
    divCard.removeChild(divCard.firstChild);
  }

  // Imprime por separado las cartas
  for (let i = 0, len = stringPokeName.length; i < len; i += 1) {
    const card = document.createElement('div');
    card.classList.add('card-style');
    card.innerHTML = '<img src=\'' + stringPokeImg[i]
                      + '\'><br><h3>' + stringPokeName[i]
                      + '</h3>TIPO: ' + stringPokeType[i]
                      + '<br><p>ALTURA:</p> ' + stringPokeHeight[i]
                      + '<br><p>PESO:</p> ' + stringPokeWeight[i]
                      + '<br><br><p class=\'see-more\'>Ver más</p>';
    document.getElementById('contentOfCards').appendChild(card);


    // Creación del div del Modal
    const modal = document.createElement('div');
    modal.classList.add('modal');
    document.getElementById('contentOfCards').appendChild(modal);


    // Creación del contenido del Modal, dentro del div Modal
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalContent.innerHTML = '<div class=\'pokemon-description\'> <img src=\'' + stringPokeImg[i]
                            + '\'><br><h3>' + stringPokeName[i]
                            + '</h3> TIPO: ' + stringPokeType[i]
                            + '<br> ALTURA: ' + stringPokeHeight[i]
                            + '<br> PESO: ' + stringPokeWeight[i]
                            + '<br>CANDY: ' + stringPokeCandy[i]
                            + '<br>Nº DE CANDIES PARA EVOLUCIONAR: ' + stringPokeCandyCount[i]
                            + '<br>HUEVO: ' + stringPokeEgg[i]
                            + '<br>HORA DE SPAWNS: ' + stringPokeSpawnTime[i]
                            + '<br>DEBILIDADES: ' + stringPokeWeaknesses[i]
                            // + '<br>EVOLUCIÓN ANTERIOR: ' + objectPokePrevEvolution[i] +
                            // + '<br>PRÓXIMA EVOLUCIÓN: ' + stringPokeNextEvolution[i][0].name +
                            + '</div>';
    modal.appendChild(modalContent);

    // Span del X del modal
    const close = document.createElement('span');
    close.classList.add('close');
    close.innerHTML = '&times;';
    modalContent.insertBefore(close, modalContent.childNodes[0]);

    // Función para abrir el modal
    card.addEventListener('click', () => {
      modal.style.display = 'block';
    });

    // Función para cerrar el modal
    close.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
});


// Select de DEBILIDADES
const selectFilterByWeak = document.getElementById('selectWeak');

// Select para filtrar por DEBILIDADES
selectFilterByWeak.addEventListener('change', () => {

  document.getElementById('selectType').value = ''; // Resetea el otro select para que vuelta a su valor original
  document.getElementById('searchBar').value = ''; // Resetea el input para que se vacíe

  const weakeDroplist = document.getElementById('selectWeak').value; // Valor del droplist de tipo

  // Todas las variables que aparecen en las tarjetas de cada Pokemón
  const stringPokeName = stringOfName('weaknesses', weakeDroplist);
  const stringPokeType = stringOfType('weaknesses', weakeDroplist);
  const stringPokeHeight = stringOfHeight('weaknesses', weakeDroplist);
  const stringPokeWeight = stringOfWeight('weaknesses', weakeDroplist);
  const stringPokeImg = stringOfImg('weaknesses', weakeDroplist);
  const stringPokeCandy = stringOfCandy('weaknesses', weakeDroplist);
  const stringPokeCandyCount = stringOfCandyCount('weaknesses', weakeDroplist);
  const stringPokeEgg = stringOfEgg('weaknesses', weakeDroplist);
  const stringPokeSpawnTime = stringOfSpawnTime('weaknesses', weakeDroplist);
  const stringPokeWeaknesses = stringOfWeaknesses('weaknesses', weakeDroplist);

  // Borra todos los hijos de Content of Cards antes de imprimir
  const divCard = document.getElementById('contentOfCards');
  while (divCard.hasChildNodes()) {
    divCard.removeChild(divCard.firstChild);
  }

  // Imprime por separado las cartas
  for (let i = 0, len = stringPokeName.length; i < len; i += 1) {
    const card = document.createElement('div');
    card.classList.add('card-style');
    card.innerHTML = '<img src=\'' + stringPokeImg[i]
                    + '\'><br><h3>' + stringPokeName[i]
                    + '</h3>TIPO: ' + stringPokeType[i]
                    + '<br> <p>ALTURA:</p> ' + stringPokeHeight[i]
                    + '<br> <p>PESO:</p> ' + stringPokeWeight[i]
                    + '<br><br><p class=\'see-more\'>Ver más</p>';
    document.getElementById('contentOfCards').appendChild(card);

    document.getElementById('contentOfCards').appendChild(card);

    // Creación del div del Modal
    const modal = document.createElement('div');
    modal.classList.add('modal');
    document.getElementById('contentOfCards').appendChild(modal);


    // Creación del contenido del Modal, dentro del div Modal
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalContent.innerHTML = '<div class=\'pokemon-description\'><img src=\'' + stringPokeImg[i]
                            + '\'><br><h3>' + stringPokeName[i]
                            + '</h3>TIPO: ' + stringPokeType[i]
                            + '<br> ALTURA: ' + stringPokeHeight[i]
                            + '<br> PESO: ' + stringPokeWeight[i]
                            + '<br>CANDY: ' + stringPokeCandy[i]
                            + '<br>Nº DE CANDIES PARA EVOLUCIONAR: ' + stringPokeCandyCount[i]
                            + '<br>HUEVO: ' + stringPokeEgg[i]
                            + '<br>HORA DE SPAWNS: ' + stringPokeSpawnTime[i]
                            + '<br>DEBILIDADES: ' + stringPokeWeaknesses[i]
                            // + '<br>EVOLUCIÓN ANTERIOR: ' + objectPokePrevEvolution[i] +
                            // + '<br>PRÓXIMA EVOLUCIÓN: ' + stringPokeNextEvolution[i][0].name +
                            + '</div>';
    modal.appendChild(modalContent);

    // Span del X del modal
    const close = document.createElement('span');
    close.classList.add('close');
    close.innerHTML = '&times;';
    modalContent.insertBefore(close, modalContent.childNodes[0]);

    // Función para abrir el modal
    card.addEventListener('click', () => {
      modal.style.display = 'block';
    });

    // Función para cerrar el modal
    close.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
});


// Función del Search
document.getElementById('searchBar').addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    document.getElementById('selectType').value = ''; // Resetea los selects para que vuelta a su valor original
    document.getElementById('selectWeak').value = ''; // Resetea los selects para que vuelta a su valor original

    // Valor del input del Search en minúscula
    const inputSearchRaw = document.getElementById('searchBar').value;

    // Mayúscula la primera letra de input para poder buscar
    const inputSearch = inputSearchRaw.charAt(0).toUpperCase() + inputSearchRaw.slice(1).toLowerCase();

    // Todas las variables que aparecen en las tarjetas de cada Pokemón
    const stringPokeName = stringOfName('name', inputSearch);
    const stringPokeType = stringOfType('name', inputSearch);
    const stringPokeHeight = stringOfHeight('name', inputSearch);
    const stringPokeWeight = stringOfWeight('name', inputSearch);
    const stringPokeImg = stringOfImg('name', inputSearch);
    const stringPokeCandy = stringOfCandy('name', inputSearch);
    const stringPokeCandyCount = stringOfCandyCount('name', inputSearch);
    const stringPokeEgg = stringOfEgg('name', inputSearch);
    const stringPokeSpawnTime = stringOfSpawnTime('name', inputSearch);
    const stringPokeWeaknesses = stringOfWeaknesses('name', inputSearch);

    // Borra todos los hijos de Content of Cards antes de imprimir
    const divCard = document.getElementById('contentOfCards');
    while (divCard.hasChildNodes()) {
      divCard.removeChild(divCard.firstChild);
    }

    // Imprime por separado las cartas
    for (let i = 0, len = stringPokeName.length; i < len; i += 1) {
      const card = document.createElement('div');
      card.classList.add('card-style');
      card.innerHTML = '<img src=\'' + stringPokeImg[i]
                      + '\'><br><h3>' + stringPokeName[i]
                      + '</h3>TIPO: ' + stringPokeType[i]
                      + '<br> <p>ALTURA:</p> ' + stringPokeHeight[i]
                      + '<br> <p>PESO:</p> ' + stringPokeWeight[i]
                      + '<br><br><p class=\'see-more\'>Ver más</p>';
      document.getElementById('contentOfCards').appendChild(card);


      // Creación del div del Modal
      const modal = document.createElement('div');
      modal.classList.add('modal');
      document.getElementById('contentOfCards').appendChild(modal);


      // Creación del contenido del Modal, dentro del div Modal
      const modalContent = document.createElement('div');
      modalContent.classList.add('modal-content');
      modalContent.innerHTML = '<div class=\'pokemon-description\'><img src=\'' + stringPokeImg[i]
                              + '\'><br><h3>' + stringPokeName[i]
                              + '</h3>TIPO: ' + stringPokeType[i]
                              + '<br> ALTURA: ' + stringPokeHeight[i]
                              + '<br> PESO: ' + stringPokeWeight[i]
                              + '<br>CANDY: ' + stringPokeCandy[i]
                              + '<br>Nº DE CANDIES PARA EVOLUCIONAR: ' + stringPokeCandyCount[i]
                              + '<br>HUEVO: ' + stringPokeEgg[i]
                              + '<br>HORA DE SPAWNS: ' + stringPokeSpawnTime[i]
                              + '<br>DEBILIDADES: ' + stringPokeWeaknesses[i]
                              // + '<br>EVOLUCIÓN ANTERIOR: ' + objectPokePrevEvolution[i] +
                              // + '<br>PRÓXIMA EVOLUCIÓN: ' + stringPokeNextEvolution[i][0].name +
                              + '</div>';
      modal.appendChild(modalContent);

      // Span del X del modal
      const close = document.createElement('span');
      close.classList.add('close');
      close.innerHTML = '&times;';
      modalContent.insertBefore(close, modalContent.childNodes[0]);

      // Función para abrir el modal
      card.addEventListener('click', () => {
        modal.style.display = 'block';
      });

      // Función para cerrar el modal
      close.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }
  }
});
