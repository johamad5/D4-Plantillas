const express = require('express');
const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

server.on('error', (error) => console.log(`Error en servidor ${error}`));
app.use('/public', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'pug');
app.set('views', './views');

let stock = [
  {
    id: 1,
    title: 'Alfajor de maicena',
    price: 35,
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/proyectofinal-reactjs-32aed.appspot.com/o/alfajorMaicena.jpg?alt=media&token=be72972c-f44b-4464-8870-a3602e17795b',
  },
  {
    id: 2,
    title: 'Budín de naranja',
    price: 190,
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/proyectofinal-reactjs-32aed.appspot.com/o/budinNaranja.jpg?alt=media&token=43573676-4856-473e-a02e-e65e3fe83ba8',
  },
  {
    id: 3,
    title: 'Torta frutal',
    price: 720,
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/proyectofinal-reactjs-32aed.appspot.com/o/tortaFrutal.jpg?alt=media&token=ffc9ee0d-89d5-4d89-82a8-ce74f93a25ef',
  },
  {
    id: 4,
    title: 'Lemon Pie',
    price: 720,
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/proyectofinal-reactjs-32aed.appspot.com/o/tortaLemonPie.jpg?alt=media&token=37bd04f8-4968-43e0-b50d-295f63f6e501',
  },
  {
    id: 5,
    title: 'Torta Brownie',
    price: 590,
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/proyectofinal-reactjs-32aed.appspot.com/o/tortaBrownie.jpg?alt=media&token=41680a53-7089-40ee-9f42-3cfabd4686c1',
  },
  {
    id: 6,
    title: 'Torta Carrot Cake',
    price: 650,
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/proyectofinal-reactjs-32aed.appspot.com/o/tortaCarrotCake.jpg?alt=media&token=327e61fd-4d86-4b1c-bd42-3174b438f48e',
  },
  {
    id: 7,
    title: 'Alfajor salchichon',
    price: 45,
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/proyectofinal-reactjs-32aed.appspot.com/o/alfajorSalchicon.jpg?alt=media&token=b0e622ff-8718-4c4f-ac84-3979b33f179e',
  },
];

app.get('/products', (req, res) => {
  stock.length > 0 ? res.render('productList', { products: stock, exists: true }) : res.render('msg', { msg: 'Lo sentimos, no tenemos productos disponibles por el momento!' });
});

app.get('/form', (req, res) => {
  res.render('form', { title: 'Agregar un producto al stock' });
});

app.post('/products', (req, res) => {
  const { body } = req;
  const id = stock.length + 1;
  stock.push({ id, ...body });
  console.log(stock);
  res.render('msg', { msg: 'Producto agregado!' });
});
