const sortByProperties = (arr, properties) => {
    return arr.sort((a, b) => {
      for (let i = 0; i < properties.length; i++) {
        const property = properties[i];
        if (a[property] < b[property]) {
          return -1;
        }
        if (a[property] > b[property]) {
          return 1;
        }
      }
      return 0;
    });
  };
  
  const products = [
    { name: 'Apple', price: 2.5, category: 'Fruit' },
    { name: 'Banana', price: 1.5, category: 'Fruit' },
    { name: 'Orange', price: 3.0, category: 'Fruit' },
    { name: 'Mango', price: 2.0, category: 'Fruit' },
    { name: 'Carrot', price: 0.5, category: 'Vegetable' },
    { name: 'Potato', price: 0.8, category: 'Vegetable' },
    { name: 'Tomato', price: 1.2, category: 'Vegetable' },
  ];
  
  const sortedProducts = sortByProperties(products, ['category', 'price']);
  console.log('Отсортированные продукты по категории и цене:');
  sortedProducts.forEach((product) => {
    console.log(`${product.name}: ${product.price} (${product.category})`);
  });
  