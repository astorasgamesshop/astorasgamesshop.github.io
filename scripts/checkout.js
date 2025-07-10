document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const cartItems = cart.map(item => `${item.nombre} ${item.precio}`).join(', ');

    const total = cart.reduce((acc, item) => acc + parseFloat(item.precio.slice(1)), 0);

    const message = `Pedidos: ${cartItems}\nTotal: $${total.toFixed(2)}`;

    window.open(`https://wa.me/5491166666666?text=${encodeURIComponent(message)}`, '_blank');
});
