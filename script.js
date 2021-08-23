// VARIABLES
const dino = document.getElementById('dino');
const meat = document.getElementById('meat');
const over = document.getElementById('over');

// JUMP PROCCESS
// dino land, after 0.4s you clicked any keyboard
const jump = () => {
  dino.classList.add('jump');
  // jump class removed after 0.4s from when you click any buttons
  setTimeout(() => {
    dino.classList.remove('jump')
  }, 400);
};
// when you cilck any key, if dino isn't jumping now, this code run
document.addEventListener('keydown', () => {
  if (!dino.classList.contains('jump')) {
    jump();
  }
}); 

// CALCULATE POSITION PROCESS
// loop proccess 100times in 1s
setInterval(() => {
  // get the integer about distance from edege of parent node to dino's top
  // get current dino Y position(top)
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top')); 
  console.log(dinoTop);
  // get the integer about distance from edege of parent node to meat's left
  // get current meat X position(left)
  let meatLeft = parseInt(window.getComputedStyle(meat).getPropertyValue('left'));
  // compare with dino's position and meat's position
  if (meatLeft < 65 && meatLeft > 0 && dinoTop >= 133) {
      meat.classList.remove('obstacle');
      over.classList.remove('hidden');
      over.addEventListener('click', () => {
        meat.classList.add('obstacle');
        over.classList.add('hidden');
      })
  }
}, 10);

