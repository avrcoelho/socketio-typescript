import React, { useState, useEffect } from 'react';

import api from './services/api';

interface IProduct {
  _id: string;
  title: string;
}

const App: React.FC = () => {
  const [products, setproducts] = useState<IProduct[]>([])

  useEffect(() => {
    async function getProducts() {
      try {
        const { data }: { data: IProduct[] } = await api.get('/products/?code=1');

        setproducts(data);
      } catch (err) {
        console.log(err);
      }
    }

    getProducts();
  })

  return (
    <h1>Hello world</h1>
  );
}

export default App;
