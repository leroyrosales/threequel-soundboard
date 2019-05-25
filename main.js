

// let button = document.getElementsByTagName("button")[0];
// let audio = document.getElementsByTagName("audio")[0];

// button.addEventListener("click", playAudio);

// function playAudio(){
//     audio.play();
// }

// let buttons = document.getElementsByTagName("button");
// // let audio = document.getElementsByTagName("audio");

// Array.from(buttons).forEach((button) => {
//     button.addEventListener("click", () => {

//     });
// });

// let buttons = document.getElementsByTagName("button");

// Array.from(buttons).forEach((button) => {
//     button.addEventListener("click", () => {
//         const audio = document.querySelector(`audio`).getAttribute("data-audio");
//         console.log(audio);
//         console.log(button.getAttribute('data-audio'));
        
        
//     });
// });

// window.addEventListener('keydown', function(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//     if (!audio) return;
//     audio.currentTime = 0;
//     audio.play();
//     key.classList.add('active')