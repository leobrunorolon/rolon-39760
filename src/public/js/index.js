const socket = io();

const form = document.getElementById('form');

const container = document.getElementById('container');

socket.addEventListener('realTimeProducts', (products) => {
  container.innerHTML = ``;

  products.forEach((product) => {
    container.innerHTML += `
            <ul>
                <li>title: ${product.title}</li> 
                <li>price: ${product.price}</li>
                <li>description: ${product.description}</li>
                <li>categoria: ${product.category}</li>
                <li>stock: ${product.stock}</li>
                <li>status: ${product.status}</li>
                <li>id: ${product.id}</li>
                <img src=${product.image} alt=${product.title} width='460' height='345' />
            </ul>
        `;
  });
});
