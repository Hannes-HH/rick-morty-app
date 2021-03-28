export function combineCharacter(character) {
    const main = document.querySelector("main");
    const characterSection = createCharacterSection(character);
    const characterImg = createCharacterImage(character);
    const characterTitel = createCharacterTitel(character);
    main.append(characterSection);
    characterSection.append(characterImg);
    characterSection.append(characterTitel);
  }
  
  function createCharacterSection(character) {
    const characterSection = document.createElement("section");
    characterSection.classList.add("character-box");
    if (character.status === "Alive") {
      characterSection.classList.add("character-box__alive");
    } else if (character.status === "Dead") {
      characterSection.classList.add("character-box__dead");
    } else if (character.status === "unknown") {
      characterSection.classList.add("character-box__unknown");
    }
    return characterSection;
  }
  
  function createCharacterImage(character) {
    const characterImg = document.createElement("img");
    characterImg.src = character.image;
    characterImg.classList.add("character-box__image");
    return characterImg;
  }
  
  function createCharacterTitel(character) {
    const characterTitel = document.createElement("h2");
    characterTitel.textContent = `${character.name}`;
    characterTitel.classList.add("character-box__titel");
    return characterTitel;
  }

