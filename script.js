// Removing of class playing
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }
  //For Mouseclick
  function clickSound(soundAgain){
    let audioAgain = document.querySelector(`audio[data-key="${soundAgain}"]`);
    let keyAgain = document.querySelector(`.key[data-key="${soundAgain}"]`);
    playAgain(audioAgain, keyAgain)
  }
  // For KeyBoard
  function playSound(e) {
    console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    playAgain(audio, key);
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);

for(const kay of keys){
  kay.addEventListener('click', () => {
    let x = kay.attributes[0].nodeValue;
    console.log(kay);
    clickSound(x)  
  });
}

function playAgain(aud, keychange){
  if (!aud) return;
  keychange.classList.add('playing');
  aud.currentTime = 0;
  aud.play();

}











  
  




