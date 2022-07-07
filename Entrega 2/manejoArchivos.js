const fs = require("fs");
const { getSystemErrorMap } = require("util");

class container {
  constructor(fileName) {
    this.fileName = fileName;
  }

 //SAVE
  async fileSave(file) {
    try {
      console.log("Producto a agregar:", file);

      const existingInfo = JSON.parse(
        await fs.promises.readFile(this.fileName, "utf-8")
      );
      console.log("Archivo:", existingInfo);

      file.id = existingInfo[existingInfo.length - 1].id + 1;

      existingInfo.push(file);

      await fs.promises.writeFile(this.fileName, JSON.stringify(existingInfo));
      console.log("Se agrego con exito el nuevo producto!");

      console.log("El ID del nuevo producto es: " + file.id);
    } catch (err) {
      console.log("hubo un error:", err);

      if (err.errno === -4058) {
        file.id = 1;
        await fs.promises.appendFile(this.fileName, JSON.stringify([file]));
        console.log("Archivo Creado!");
      }
    }
  }

  //GET BY ID
  async getByID(selectedProductId) {
    try {
      const existingInfo = JSON.parse(
        await fs.promises.readFile(this.fileName, "utf-8")
      );

      const selectedProduct = existingInfo.find(
        (product) => product.id === selectedProductId
      );

      if (selectedProduct === undefined) {
        console.log("El producto seleccionado no existe");
      } else {
        console.log("Producto seleccionado por ID:", existingInfo);
      }
    } catch (err) {
      console.log("hubo un error:", err);
      if (err.errno === -4058) {
        console.log("El archivo seleccionado no existe");
      }
    }
  }

  //GET ALL
  async getAll() {
    try {
      const existingInfo = JSON.parse(
        await fs.promises.readFile(this.fileName, "utf-8")
      );
      console.log("Info del archivo seleccionado:", existingInfo);
    } catch (err) {
      console.log("hubo un error:", err);
      if (err.errno === -4058) {
        console.log("El archivo seleccionado no existe");
      }
    }
  }

  //DELETE BY ID
  async deleteById(selectedProductId) {
    try {
      const existingInfo = JSON.parse(
        await fs.promises.readFile(this.fileName, "utf-8")
      );
      const indexToDelete = existingInfo.findIndex(
        (producto) => producto.id === selectedProductId
      );
      if (indexToDelete === -1) {
        console.log("El producto seleccionado no existe");
      } else {
        console.log("Producto a remover:", existingInfo[indexToDelete]);
        existingInfo.splice(indexToDelete, 1);
        console.log("El producto seleccionado fue removido con exito!");
        await fs.promises.writeFile(
          this.fileName,
          JSON.stringify(existingInfo)
        );
      }
    } catch (err) {
      console.log("hubo un error:", err);
      if (err.errno === -4058) {
        console.log("El archivo seleccionado no existe");
      }
    }
  }

  //DELETE ALL
  async deleteAll() {
    try {
      await fs.promises.unlink(this.fileName);
      console.log("El archivo fue borrado con exito!");
    } catch (err) {
      console.log("hubo un error:", err);
      if (err.errno === -4058) {
        console.log("El archivo seleccionado no existe");
      }
    }
  }
}

//SE EXPORTA 
module.exports = container;