let cart = [];

document.addEventListener('DOMContentLoaded', function() {
    const juegos = [
        { nombre: 'Elden Ring Nightreign', precio: '$250.00', imagen: 'https://shared.steamstatic.com/store_item_assets/steam/apps/2622380/d1ee7bc631966b1a99e232a9f84af736bb298395/library_600x900_2x.jpg?t=1749150133' },
        // Agrega más juegos aquí
    ];

    const juegosContainer = document.getElementById('juegos');

    juegos.forEach(juego => {
        const card = document.createElement('div');
        card.className = 'game-card';

        const img = document.createElement('img');
        img.src = juego.imagen;
        img.alt = juego.nombre;

        const nombre = document.createElement('h3');
        nombre.textContent = juego.nombre;

        const precio = document.createElement('p');
        precio.textContent = juego.precio;

        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Añadir al Carrito';
        addToCartButton.addEventListener('click', () => {
            cart.push(juego);
            alert(`${juego.nombre} añadido al carrito`);
        });

        card.appendChild(img);
        card.appendChild(nombre);
        card.appendChild(precio);
        card.appendChild(addToCartButton);

        juegosContainer.appendChild(card);
    });
});
