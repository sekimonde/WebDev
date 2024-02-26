function guessTheNumberGame() {

    let difficulty = prompt("Choisissez le niveau de difficulté : Facile, Intermédiaire, Difficile").toLowerCase();

    let maxAttempts, randomNumber;
    
  
    switch (difficulty) {
      case "easy":
        maxAttempts = 10;
        randomNumber = generateRandomNumber(1, 50);
        break;
      case "medium":
        maxAttempts = 7;
        randomNumber = generateRandomNumber(1, 100);
        break;
      case "difficult":
        maxAttempts = 5;
        randomNumber = generateRandomNumber(1, 200);
        break;
      default:
        alert("Niveau de difficulté invalide. Le jeu se termine.");
        return;
    }

    let attempts = 0;
    let guess;

    while (attempts < maxAttempts) {
      guess = prompt(`Tentative ${attempts + 1}/${maxAttempts}. Devinez le nombre :`);

      if (guess === null) {
        alert("Le jeu a été annulé.");
        return;
      }

      guess = parseInt(guess);

      if (isNaN(guess)) {
        alert("Veuillez entrer un nombre valide.");
        continue;
      }

      if (guess === randomNumber) {
        alert(`Félicitations ! Vous avez deviné le nombre ${randomNumber} en ${attempts + 1} tentatives.`);
        break;
      } else {
        alert(`Désolé, mauvaise supposition. Il vous reste ${maxAttempts - (attempts + 1)} tentatives.`);
      }

      attempts++;
    }

    if (attempts === maxAttempts) {
      alert(`Dommage ! Vous avez épuisé toutes vos tentatives. Le nombre était ${randomNumber}.`);
    }

    if (confirm("Voulez-vous jouer à nouveau ?")) {
      guessTheNumberGame();
    } else {
      alert("Merci d'avoir joué. Au revoir !");
    }
  }

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  guessTheNumberGame();