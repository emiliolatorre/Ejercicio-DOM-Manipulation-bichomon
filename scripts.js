//1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
const titulo = document.getElementById('gen-1');
titulo.innerHTML = 'Generasión 1 Pokimon';

//2. Cambia el color de fondo de la primera generación de Pokimon.
const generación = document.getElementById('gen-1').nextElementSibling;
generación.style.backgroundColor = 'blue';

//3. Imprime por consola la URL de la página.
const url = document.location.href
console.log(url);

//4. Imprime por consola el dominio de la página.
const domain = document.location.domain;
console.log(domain);

//5. Imprime todos los nodos de imagen.
const imagenes = document.querySelectorAll('img');
console.log(imagenes);

//6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
imagenes.forEach(img => {
    img.src ='https://media.giphy.com/media/2v170e71aanfi/giphy.gif'
})