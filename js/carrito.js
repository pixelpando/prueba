// Recuperar info del localStorage
// let cartStorage = localStorage.getItem('cartInfo');
let cartStorage = JSON.parse(localStorage.getItem('cartInfo'));

let cartSection = document.getElementById('cart-section');

function renderProductos() {
    const cardProduct = document.createElement('div');
    cardProduct.classList.add('card-producto')
    cardProduct.innerHTML = `<div>
                             <span>Producto</span>
                             <span>Cantidad</span>
                             <span>Precio (subtotal)</span>
                             <span>Modificar</span>
                             </div>
                             <div id="grupoLadrillo">
                             <span>${cartStorage[0]}</span>
                             <span>${cartStorage[1]} unid.</span>
                             <span>$ ${cartStorage[2]}</span>
                             <button class="borrar-producto" id="btnBorrarLadrillo">Borrar</button>
                             </div>
                             <div id="grupoCemento">
                             <span>Cemento ${cartStorage[3]}</span>
                             <span>${cartStorage[4]} unid.</span>
                             <span>$ ${cartStorage[5]}</span>
                             <button class="borrar-producto" id="btnBorrarCemento">Borrar</button>
                             </div>
                             <section id="totalFinal">
                             <span class="total">Total: <strong>$ ${cartStorage[6]}</strong></span>
                             </section>
                             <section>
                             <button class="vaciar-carrito" id="btnVaciarCarrito">Vaciar carrito</button>
                             </section>`;
    cartSection.innerHTML = '';                         
    cartSection.appendChild(cardProduct)
}
renderProductos();

let grupoLadrillo = document.getElementById('grupoLadrillo');
let grupoCemento = document.getElementById('grupoCemento');
let totalFinal = document.getElementById('totalFinal');

// Boton Borrar Ladrillo
let btnBorrarLadrillo = document.getElementById('btnBorrarLadrillo');
btnBorrarLadrillo.addEventListener('click', () => {
    // localStorage.removeItem('cartInfo');
    grupoLadrillo.innerHTML = '';
    grupoLadrillo.classList.add('ocultar');
    totalFinal.classList.add('ocultar');
});

// Boton Borrar Cemento
let btnBorrarCemento = document.getElementById('btnBorrarCemento');
btnBorrarCemento.addEventListener('click', () => {
    // localStorage.removeItem('cartInfo');
    grupoCemento.innerHTML = '';
    grupoCemento.classList.add('ocultar');
    totalFinal.classList.add('ocultar');
});

// Boton Vaciar Carrito
let btnVaciarCarrito = document.getElementById('btnVaciarCarrito');
btnVaciarCarrito.addEventListener('click', () => {
    localStorage.clear();
    cartSection.innerHTML = '<h3>El carrito se encuentra vacío</h3>';
});


// Footer
let footer = document.createElement('footer');
footer.innerHTML = '<p>©Todos los derechos reservados.</p>';
document.body.appendChild(footer);