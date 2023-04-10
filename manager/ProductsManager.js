import fs from 'fs';

export default class ProductsManager {
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
      console.log(products);
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(products, null, '\t')
      );

      return product;
    } catch (error) {
      console.log(error);
    }
  };

  // deleteById(id) {
  //   try {
  //     const data = fs.readFileSync(this.path, 'utf-8');
  //     const dataPars = JSON.parse(data);
  //     const dataFilter = dataPars.filter((objeto) => objeto.id !== id);
  //     const dataString = JSON.stringify(dataFilter);
  //     fs.writeFileSync(this.path, dataString);
  //     return dataFilter;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // deleteAll() {
  //   fs.writeFileSync(this.path, '[]');
  //   return '[]';
  // }
}
