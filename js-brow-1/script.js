// Selecciona el botón y el input del HTML
const boton = document.querySelector('#boton-validar');
const input = document.querySelector('#palabra');
const resultado = document.querySelector('#resultado');

// Agrega un evento "click" al botón
boton.addEventListener('click', () => {
  // Captura el valor del input
  const texto = input.value;

  // Convierte el texto a minúsculas y elimina los espacios en blanco
  const textoLimpio = texto.toLowerCase().replace(/\s/g, '');

  // Comprueba si el texto es palíndromo o no
  const textoReverso = textoLimpio.split('').reverse().join('');
  if (textoLimpio === textoReverso) {
    resultado.textContent = `"${texto}" es palíndromo`;
  } else {
    resultado.textContent = `"${texto}" no es palíndromo`;
  }
});