// Requires howler.js to be included on the page
// <script src="https://cdn.jsdelivr.net/npm/howler@2.2.4/dist/howler.min.js"></script

const sound = new Howl({
    src: ['example.mp3'],
    volume: 0.5,
    loop: true,
});

const soundBtn = document.querySelector('.sound-toggle');

soundBtn.addEventListener('click', () => {
    sound.play(); 
} 

sound.on('play', ()  => {
    soundBtn.classList(// класс модальника с опасити 1 и текстом, звук включен)
})
// очистим слушатели 

soundBtn.addEventListener('click', () => {
    sound.pause(); 
}

sound.on('end', ()  => {
    soundBtn.classList(// класс модальника с опасити 0 и текстом, звук выключен)
})
// очистим слушатели 
