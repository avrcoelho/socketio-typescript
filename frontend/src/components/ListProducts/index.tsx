import React, { useState, useEffect, useMemo } from 'react';
import socketio from 'socket.io-client';

import api from '../../services/api';

import { Container, List, Item } from './styles';

interface IProduct {
  _id: string;
  title: string;
}

const ListProducts: React.FC = () => {
  const [products, setproducts] = useState<IProduct[]>([]);

  const socket = useMemo(
    () =>
      socketio(process.env.REACT_APP_URL_API || 'http://localhost:3000', {
        query: {
          code: 1,
        },
      }),
    [],
  );

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

  useEffect(() => {
    socket.on('product', (notification: IProduct) => {
      setproducts(value => [...products, notification]);
    });
  }, [socket]);

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
