const dinosaurs = [
  {
    name: "Tyrannosaurus rex",
    era: "Cretaceous",
    type: "Theropod",
    diet: "Carnivore",
    habitat: "North America",
    length: "12.5m"
  },
  {
    name: "Tyrannosaurus mcraeensis",
    era: "Cretaceous",
    type: "Theropod",
    diet: "Carnivore",
    habitat: "North America",
    length: "12m"
  },
  {
    name: "Zhuchengtyrannus magnus",
    era: "Cretaceous",
    type: "Theropod",
    diet: "Carnivore",
    habitat: "Asia",
    length: "10m"
  },
  {
    name: "Tarbosaurus bataar",
    era: "Cretaceous",
    type: "Theropod",
    diet: "Carnivore",
    habitat: "Asia",
    length: "10m"
  },
  {
    name: "Teratophoneus curriei",
    era: "Cretaceous",
    type: "Theropod",
    diet: "Carnivore",
    habitat: "North America",
    length: "6m"
  },
  {
    name: "Lythronax argestes",
    era: "Cretaceous",
    type: "Theropod",
    diet: "Carnivore",
    habitat: "North America",
    length: "8m"
  },
  {
    name: "Daspletosaurus torosus",
    era: "Cretaceous",
    type: "Theropod",
    diet: "Carnivore",
    habitat: "North America",
    length: "9m"
  },
  {
    name: "Daspletosaurus horneri",
    era: "Cretaceous",
    type: "Theropod",
    diet: "Carnivore",
    habitat: "North America",
    length: "7m"
  },
  {
    name: "Nanuqsaurus hoglundi",
    era: "Cretaceous",
    type: "Theropod",
    diet: "Carnivore",
    habitat: "North America",
    length: "9m"
  },
  {
    name: "Qianzhousaurus sinensis",
    era: "Cretaceous",
    type: "Theropod",
    diet: "Carnivore",
    habitat: "Asia",
    length: "7m"
  },
  {
    name: "Alioramus remotus",
    era: "Cretaceous",
    type: "Theropod",
    diet: "Carnivore",
    habitat: "Asia",
    length: "5.5m"
  },
  {
    name: "Asiatyrannus xui",
    era: "Cretaceous",
    type: "Theropod",
    diet: "Carnivore",
    habitat: "Asia",
    length: "4m"
  },
  {
    name: "Gorgosaurus libratus",
    era: "Cretaceous",
    type: "Theropod",
    diet: "Carnivore",
    habitat: "North America",
    length: "9m"
  },
  {
    name: "Albertosaurus sarcophagus",
    era: "Cretaceous",
    type: "Theropod",
    diet: "Carnivore",
    habitat: "North America",
    length: "9m"
  },
  {
    name: "Dryptosaurus aquilunguis",
    era: "Cretaceous",
    type: "Theropod",
    diet: "Carnivore",
    habitat: "North America",
    length: "7.5m"
  },
  {
    name: "Moros intrepidus",
    era: "Cretaceous",
    type: "Theropod",
    diet: "Carnivore",
    habitat: "North America",
    length: "1.2m"
  },
  {
    name: "Stokesosaurus clevelandi",
    era: "Jurassic",
    type: "Theropod",
    diet: "Carnivore",
    habitat: "North America",
    length: "2.5m"
  },
  {
    name: "Dilong paradoxus",
    era: "Cretaceous",
    type: "Theropod",
    diet: "Carnivore",
    habitat: "Asia",
    length: "2m"
  },
  {
    name: "Santanaraptor placidus",
    era: "Cretaceous",
    type: "Theropod",
    diet: "Carnivore",
    habitat: "South America",
    length: "2m"
  },
  {
    name: "Sinotyrannus kazuoensis",
    era: "Cretaceous",
    type: "Theropod",
    diet: "Carnivore",
    habitat: "Asia",
    length: "10m"
  },
  {
    name: "Guanlong wucaii",
    era: "Jurassic",
    type: "Theropod",
    diet: "Carnivore",
    habitat: "Asia",
    length: "3.5m"
  },
  {
    name: "Yutyrannus huali",
    era: "Cretaceous",
    type: "Theropod",
    diet: "Carnivore",
    habitat: "Asia",
    length: "9m"
  },
  {
    name: "Kileskus aristotocus",
    era: "Jurassic",
    type: "Theropod",
    diet: "Carnivore",
    habitat: "Asia",
    length: "4m"
  },
  {
    name: "Proceratosaurus bradleyi",
    era: "Jurassic",
    type: "Theropod",
    diet: "Carnivore",
    habitat: "Europe",
    length: "3m"
  }
];

let target = null;
let history = [];
let maxGuesses = 10;

function parseLength(length) {
  return parseFloat(length.replace("m", ""));
}

function compareLength(val) {
  const guess = parseLength(val);
  const targetVal = parseLength(target.length);
  if (guess === targetVal) return "✅";
  return guess > targetVal ? "⬇️" : "⬆️";
}

function compare(field, val) {
  return target[field] === val ? "✅" : "❌";
}

function compareInitial(name) {
  return target.name.charAt(0).toLowerCase() === name.charAt(0).toLowerCase() ? "✅" : "❌";
}

function checkGuess() {
  const input = document.getElementById("guessInput");
  const guess = input.value.trim().toLowerCase();
  const found = dinosaurs.find(d => d.name.toLowerCase() === guess);

  if (!found) {
    alert("ไม่พบชื่อไดโนเสาร์นี้ในฐานข้อมูล");
    return;
  }

  history.push(found);
  input.value = "";
  document.getElementById("suggestions").style.display = "none";
  updateHistory();

  if (found.name === target.name || history.length >= maxGuesses) {
    document.getElementById("result").innerText = `The End!: ${target.name}`;
    document.getElementById("resetBtn").style.display = "block";
    input.disabled = true;
  }
}

function updateHistory() {
  const container = document.getElementById("history");
  container.innerHTML = "";
  history.forEach(dino => {
    const div = document.createElement("div");
    div.innerHTML = `
      <strong>${dino.name}</strong><br>
      First letter: ${dino.name.charAt(0)} ${compareInitial(dino.name)}<br>
      Period: ${dino.era} ${compare("era", dino.era)}<br>
      Clade: ${dino.type} ${compare("type", dino.type)}<br>
      Diet: ${dino.diet} ${compare("diet", dino.diet)}<br>
      Location: ${dino.habitat} ${compare("habitat", dino.habitat)}<br>
      Length: ${dino.length} ${compareLength(dino.length)}
    `;
    container.appendChild(div);
  });
}

function resetGame() {
  history = [];
  target = dinosaurs[Math.floor(Math.random() * dinosaurs.length)];
  document.getElementById("guessInput").disabled = false;
  document.getElementById("guessInput").value = "";
  document.getElementById("result").innerText = "";
  document.getElementById("resetBtn").style.display = "none";
  updateHistory();
}

function showSuggestions() {
  const input = document.getElementById("guessInput");
  const suggestions = document.getElementById("suggestions");
  const value = input.value.toLowerCase();
  suggestions.innerHTML = "";

  if (!value) {
    suggestions.style.display = "none";
    return;
  }

  const matches = dinosaurs.filter(d => d.name.toLowerCase().includes(value));
  matches.forEach(d => {
    const li = document.createElement("li");
    li.textContent = d.name;
    li.onmousedown = () => {
      input.value = d.name;
      suggestions.style.display = "none";
    };
    suggestions.appendChild(li);
  });

  suggestions.style.display = matches.length > 0 ? "block" : "none";
}

// Start the game immediately
resetGame();
