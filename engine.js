const tecla = document.querySelectorAll('.key');
const volume = document.querySelector('.volume input');

let audio = new Audio("./sounds/a.wav");

let mapKeys = [];

const handleVolume = (e) => {
    audio.volume = e.target.value / 100
}

const playTune = (key) => {
    audio.src = `./sounds/${key}.wav`;
    audio.play();
    const activeKey = document.querySelector(`[data-key="${key}"]`);
    activeKey.classList.add('active');
    setTimeout(() => {
        activeKey.classList.remove('active');
    }, 150);
}

document.addEventListener('keydown', function(event){
    if(mapKeys.includes(event.key)){
        playTune(event.key)
    }
})

tecla.forEach(function(tecla){
    tecla.addEventListener('click', function(){
        playTune(tecla.dataset.key)
    })
    mapKeys.push(tecla.dataset.key)
})

volume.addEventListener('input', handleVolume)