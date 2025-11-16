const message = `haii tayaa selamaat ulang tahun yaa, maafin aku kalau telat kasii ini.\nMay u live long and be heatlthy always, dan doa doaa kmu bakalan terwujud semuanya..\n\nIhope your life is always filled with happines, good health, and endless blessings.\n\nI'm truly proud of everything you've achieved.\n\nThankyou for being such and amzing person and the best bsf.
`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
