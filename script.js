document.addEventListener('DOMContentLoaded', () => {
  // const seleccion = localStorage.getItem('seleccion');

  // if (seleccion === 'SI') {
  //     yaNoSePuede();
  //     return;
  // } else if (seleccion === 'NO') {
  //     apareceImagenTriste();
  //     return;
  // }

  cambiarTexto();
});

const imagenesLocales = [
  "./img/1.jpg",
  "./img/2.jpg",
  "./img/3.jpg",
  "./img/4.jpg",
  "./img/5.jpg",
];

function guardarSeleccion(seleccion) {
  localStorage.setItem('seleccion', seleccion);

  if (seleccion === 'SI') {
      aparecerImagenFinal();
  } else if (seleccion === 'NO') {
      apareceImagenTriste();
  }
}

function yaNoSePuede() {
  document.querySelector('.rose').classList.add('d-none');
  document.querySelector('.collage-container').classList.add('d-none');
  document.querySelector('.propuesta').classList.add('d-none');

  const contenido = document.createElement('div');
  contenido.classList.add('center-text');
  contenido.innerHTML = '<p class="text-final">¡Ceci, te adoro hoy mañana y siempre! 💖✨</p>';
  document.body.appendChild(contenido);
}

function apareceImagenTriste() {
  document.querySelector('.rose').classList.add('d-none');
  document.querySelector('.collage-container').classList.add('d-none');
  document.querySelector('.propuesta').classList.add('d-none');

  const imagenTriste = document.querySelector('.imagen-triste');
  imagenTriste.classList.remove('d-none');
}

const palabrasIniciales = [
  "¡Hola, mi hermosa Ceci! ❤️",
  "Cada día contigo es un nuevo capítulo muy especial",
  "Eres mi más bella casualidad 💖",
  "Mi destino favorito, mi refugio",
  "Eres mi luz en cada amanecer ☀️",
  "No necesito más, porque te tengo a ti 💖",
  "Si hay algo que quiero decirte hoy...",
  "Es algo muy especial",
  "Porque cada día lo confirmo más...",
  "Te doy una pista...",
];

const palabrasSecundarias = [
  "Eres la razón de mi felicidad infinita 🥰",
  "Tu mejoras mi vida 💕",
  "Eres la más hermosa del universo 🌟",
  "Eres mi mejor aventura 💕",
  "Eres mi alegría en días grises ☔",
  "Eres mi historia de amor favorita 📖",
  "Eres la melodía más bonita de mi corazón 🎶",
  "Eres mi inspiración diaria ✨",
  "Eres el latido de mi corazón 💓",
  "Eres el sueño más bonito hecho realidad 🌠",
  "Eres mi estrella más brillante en la galaxia 🌌",
  "Eres mi mejor regalo de la vida 🎁",
  "Eres el susurro del viento que me llena de amor 💕",
  "Eres y siempre serás mi persona favorita 💞",
  "Eres mi razón para sonreír cada día 😊",
  "No sé cuanto tiempo estaremos juntos, pero te aseguro que mientras tu lo desees, aprovecharé cada minuto y cada beso que la vida nos regale 💖",
];


let currentIndex = 0; // Índice para las palabras iniciales
let isPrimaryFlow = true; // Controla si estamos en palabrasIniciales o palabrasSecundarias
const textElement = document.querySelector(".text");
const contenidoDiv = document.querySelector(".Contenido");
const collage = document.querySelector('.collage');

// Genera las imágenes con rotación aleatoria
imagenesLocales.forEach((src, index) => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = `Memory image ${index + 1} from our moments together`;
  img.style.setProperty('--rotation', Math.random().toFixed(3));
  collage.appendChild(img);
});



// Función para calcular tiempo de lectura
function calcularTiempoDeLectura(frase) {
  const palabras = frase.split(" ").length;
  const tiempoPorPalabra = 300; // 300ms por palabra
  const tiempoMinimo = 2100; // Mínimo 2 segundos
  return Math.max(tiempoMinimo, palabras * tiempoPorPalabra);
}

// Función principal para manejar cambios de texto
function cambiarTexto() {
  const palabras = isPrimaryFlow ? palabrasIniciales : palabrasSecundarias;

  if (currentIndex >= palabras.length) {
    // Cambia al siguiente flujo o llama a una función personalizada
    if (isPrimaryFlow) {
      isPrimaryFlow = false;
      currentIndex = 0;
      setTimeout(cambiarTexto, 1200); // Breve pausa antes de iniciar el siguiente flujo
    } else {
        esconderTextoCambiante();
        
    }
    return;
  }

  textElement.classList.add("fade-out");
  setTimeout(() => {
    textElement.textContent = palabras[currentIndex];
    textElement.classList.remove("fade-out");
    textElement.classList.add("fade-in");

    const tiempoLectura = calcularTiempoDeLectura(palabras[currentIndex]);
    currentIndex++;
    setTimeout(cambiarTexto, tiempoLectura);
  }, 1000);
}

function esconderTextoCambiante() {
  document.querySelector('.rose').remove();
  document.querySelector('.propuesta').classList.remove('d-none');
  document.querySelector('.propuesta').classList.add('fade-in');
}
function aparecerImagenFinal() {
  document.querySelector('.propuesta').classList.add('d-none');
  document.querySelector('.collage-container').classList.remove('d-none');
}
function apareceImagenTriste() {
  document.querySelector('.propuesta').classList.add('d-none');
  // Selecciona el contenedor donde quieres insertar la imagen
  const contenedor = document.querySelector('.imagen-triste');

  const img = document.createElement('img');


  // Configura la URL de la imagen y otros atributos
  img.src = './img/sad-cat.jpg'; // Use local image path
  img.alt = 'Image conveying sadness'; // Updated alt text
  img.classList.add('imagen-clase'); // Opcional: añade una clase para estilos
  img.style.width = '350px'; // Ajusta el tamaño si es necesario
  img.style.height = 'auto'; // Mantén las proporciones

  // Inserta la imagen en el contenedor
  contenedor.appendChild(img);

  // Asegúrate de mostrar el contenedor si estaba oculto
  // contenedor.classList.remove('d-none'); // Redundant, already called above

 }