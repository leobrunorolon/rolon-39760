const socket = io();

const form = document.getElementById('form');

const container = document.getElementById('container');

socket.on('showProducts', (products) => {
  container.innerHTML = ``;

  products.forEach((product) => {
    container.innerHTML += `
            <ul>
                <li>title: ${product.title}</li> 
                <li>description: ${product.description}</li>
                <li>categoria: ${product.category}</li>
                <li>price: ${product.price}</li>
                <li>status: ${product.status}</li>
                <li>stock: ${product.rating.count}</li>
                <img src=${product.image} alt=${product.title} width='460' height='345' />
                <li>id: ${product.id}</li>
            </ul>
        `;
  });
});
