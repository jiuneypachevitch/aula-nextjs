import React from 'react';
import { GetServerSideProps } from 'next';

import api from '../service/api-interna.json';
import { Container } from '../styles/Dashboard/styles';

interface IProduct {
    id: Number,
    Title: String
}

interface IProductsProps {
    products: IProduct[]
}

export default function Home({products}: IProductProps) {
    const productList = products.map((p) => <li key={p.id}>{p.title}</li>);
    return(
        <Container>
            <h1>Products</h1>
            <section>
                <ul>
                    {productList ? productList : 'Não há produtos'}
                </ul>
            </section>
        </Container>
    );
}

export const getServerSideProps: GetServerSiteProps<IProductsProps> = async () => {
    const response = await fetch('http://localhost:3333/products')
    const products = await response.json();
    console.log('products:', products);
    return {
        props: {
            products,
        },
    };
}
