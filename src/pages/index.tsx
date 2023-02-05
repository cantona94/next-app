import { Button, Htag, P, Tag } from '../../components';

export default function Home(): JSX.Element {
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
            <Tag color='red'>Текст</Tag>
            <Tag color='primary'>
                Текст
            </Tag>
            <Tag size='m' color='green'>Текст</Tag>
        </>
    );
}
