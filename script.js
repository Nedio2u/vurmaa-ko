// Sesler ve cümleler listesi
const sounds = [
    document.getElementById('sound-ah'),
    document.getElementById('sound-oh'),
    document.getElementById('sound-yapma'),
    document.getElementById('sound-dur'),
    document.getElementById('sound-ozur')
];

const phrases = [
    "Ah!",
    "Oh!",
    "Yapma!",
    "Dur ne olur!",
    "Özür dilerim!"
];

// HTML elemanlarını seçiyoruz
const character = document.getElementById('character');
const glove = document.getElementById('glove');
const speech = document.getElementById('speech');
const yumrukSesi = document.getElementById('yumruk-sesi');
const scar = document.getElementById('scar'); // <-- yara izi elementi buraya ekledim

// Eldivenin gelmesi ve suratın tepki vermesi
function punch() {
    // Eldiven ileri gelir
    glove.style.left = "50px";
    glove.classList.add("yumruk-at");

    // Surat hafif döner
    character.style.transform = "rotate(5deg)";

    // Rastgele bir cümle seç
    const randomIndex = Math.floor(Math.random() * phrases.length);
    speech.innerText = phrases[randomIndex];
    speech.style.display = "block";

    // Sesleri çal
    yumrukSesi.currentTime = 0;
    yumrukSesi.play();

    sounds[randomIndex].currentTime = 0;
    sounds[randomIndex].play();

    // YÜZ MORARTMA efekti ve YARA İZİ ekle
    character.classList.add('morardi');
    scar.style.display = "block"; // yara izini göster

    // 0.5 saniye sonra her şey eski haline döner
    setTimeout(() => {
        glove.style.left = "-200px"; // Eldiven geri gider
        glove.classList.remove("yumruk-at");
        character.style.transform = "rotate(0deg)"; // Surat normale döner
        speech.style.display = "none"; // Konuşma balonu kaybolur
        character.classList.remove('morardi'); // Morluk kaybolur
        scar.style.display = "none"; // yara izi kaybolur
    }, 500);
}

// Her 2 saniyede bir yumruk gelsin
setInterval(punch, 2000);

// İstersen kullanıcı tıklayınca da yumruk gelsin
document.body.addEventListener('click', punch);
