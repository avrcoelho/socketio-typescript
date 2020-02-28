import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container, List, Item } from './styles';

interface IProduct {
  _id: string;
  title: string;
}

const ListProducts: React.FC = () => {
  const [products, setproducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const { data }: { data: IProduct[] } = await api.get(
          '/products/?code=1',
        );

        setproducts(data);
      } catch (err) {
        console.log(err);
      }
    }

    getProducts();
  });

  return (
    <Container>
      <List>
        {products.map((product: IProduct) => (
          <Item key={product._id}>{product._id}</Item>
        ))}
      </List>
    </Container>
  );
};

export default ListProducts;
