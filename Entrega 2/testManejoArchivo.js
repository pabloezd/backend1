const container = require("./manejoArchivos");

const productos = new container("./productos.txt");



productos.fileSave({
  title: "remera",
  price: "1500",
  thumbnail: "https://cf.shopee.com.ar/file/b0d527aac65cd97a9358adc6e2f4d620",
});

