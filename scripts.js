console.log(document.title);

//1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
let titulo = document.getElementById('gen-1');
titulo.textContent = 'Generasión 1 Pokimon';

//2. Cambia el color de fondo de la primera generación de Pokimon.
titulo.style.backgroundColor = 'blue';

//3. Imprime por consola la URL de la página.
console.log()
meta property="og:url

//4. Imprime por consola el dominio de la página.

//5. Imprime todos los nodos de imagen.
let imagenes = document.getElementsByTagName('img');
console.log(imagenes);

//6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
for (let i=0; i<imagenes.length; i++) {
    imagenes[i].src ='https://media.giphy.com/media/2v170e71aanfi/giphy.gif';
};