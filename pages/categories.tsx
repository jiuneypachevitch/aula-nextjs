import React from 'react';
import { GetStaticProps, GetStaticPropsResult } from 'next';

import api from '../service/api-interna.json';
import { Container } from '../styles/Dashboard/styles';

interface ICategories {
    id: Number,
    Title: String
}

interface ICategoriesProps {
    Categories: ICategories[]
}

export default function categories({categories}: ICategoriesProps) {
    const categoriesList = categories.map((c) => <li key={c.id}>{c.title}</li>);
    return(
        <Container>
            <h1>Categorias</h1>
            <section>
                <ul>
                {categoriesList ? categoriesList : 'Não há categorias!'}
                </ul>
            </section>
        </Container>
    );
}

export const getStaticProps: GetStaticProps<ICategoriesProps> = async (context) => {
    const response = await fetch('http://localhost:3333/categories')
    const categories = await response.json();
    console.log('categories', categories);
    return { props: { 
            categories
        }
    };
}
