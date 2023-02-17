import { GetStaticProps } from 'next';
import { withLayout } from 'layout/Layout';
import { useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../../components';
import axios from 'axios';
import { MenuItem } from 'interfaces/menu.interface';

function Home({menu}:HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(3);

    return (
        <>
            <Htag tag="h1">текст</Htag>
            <Button appearance="primary" arrow="down">
                Кнопка
            </Button>
            <Button appearance="gnost" arrow="right">
                Кнопка
            </Button>
            <P size="l">Большой</P>
            <P>Средний</P>
            <P>Маленький</P>
            <Tag color="red">Текст</Tag>
            <Tag color="primary">Текст</Tag>
            <Tag size="m" color="green">
                Текст
            </Tag>
            <Rating rating={rating} isEditable setRating={setRating} />       
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown>{
	menu: MenuItem[];
	firstCategory: number;
}
