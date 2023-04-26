import { log } from 'console';
import fs from 'fs';

export default class Manager {
  constructor(path) {
    this.path = path;
  }

  getProducts = async () => {
    try {
      if (fs.existsSync(this.path)) {
        const data = await fs.promises.readFile(this.path, 'utf-8');
        const products = JSON.parse(data);
        return products;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  };

  addProduct = async (product) => {
    try {
      const products = await this.getProducts();

      if (products.length === 0) {
        product.id = 1;
      } else {
        product.id = products[products.length - 1].id + 1;
      }

      products.push(product);
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(products, null, '\t')
      );

      return product;
    } catch (error) {
      console.log(error);
    }
  };

  addCart = async (cid, product, pid) => {
    try {
      const carts = await this.getProducts();

      let cart;
      const products = [];
      products.push(product);
      cart = { id: id, products: [product] };

      carts.push(cart);
      await fs.promises.writeFile(this.path, JSON.stringify(carts, null, '\t'));

      return product;
    } catch (error) {
      console.log(error);
    }
  };

  updateById = async (pid, product) => {
    try {
      const products = await this.getProducts();
      let findProduct = products.find((obj) => obj.id === pid);
      if (findProduct === undefined) {
        throw { msg: '404 Not found' };
      }
      let filterProduct = products.filter((obj) => obj.id !== pid);
      findProduct = { pid, ...product };
      const updateProduct = filterProduct.push(findProduct);

      await fs.promises.writeFile(
        this.path,
        JSON.stringify(updateProduct, null, '\t')
      );

      return findProduct;
    } catch (error) {
      console.log(error);
    }
  };

  findById = async (id) => {
    try {
      console.log(id);
      const data = await this.getProducts();
      const dataFind = data.find((objeto) => objeto.id == id);
      console.log(dataFind);
      return dataFind;
    } catch (error) {
      console.log(error);
    }
  };

  deleteById = async (id) => {
    try {
      const data = await this.getProducts();
      const dataFilter = data.filter((objeto) => objeto.id != id);
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(dataFilter, null, '\t')
      );
    } catch (error) {
      console.log(error);
    }
  };

  deleteAll = () => {
    fs.writeFile(this.path, JSON.stringify([]));
  };
}
