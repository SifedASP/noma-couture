import { Container, Grid, Title } from '@mantine/core';
import { useWishlist } from 'react-use-wishlist';
import ProductCard from '../components/ProductCard';
import { useMediaQuery } from '@mantine/hooks';
import Empty from '../components/Empty';

const Wishlist = () => {
    const {
        isWishlistEmpty,
        items,
    } = useWishlist();

    const smallScreen = useMediaQuery('(max-width: 768px)');

    const tabletScreen = useMediaQuery('(max-width: 1024px)');

    const removeDuplicates = (arr) => {
        const uniqueItems = arr.reduce((acc, current) => {
            const x = acc.find(item => item.id === current.id);
            if (!x) {
                return acc.concat([current]);
            } else {
                return acc;
            }
        }, []);
        return uniqueItems;
    };

    const uniqueItems = removeDuplicates(items);

    if (isWishlistEmpty || uniqueItems.length === 0) return (
        <Empty title="Nothing here yet..." button={'yes'} />
    );

    return (
        <Container fluid >
            <Container py={'xl'} maw={'1180px'}>
                <Title mb={'xl'}>Wishlist ({uniqueItems.length})</Title>

                <Grid>
                    {uniqueItems.map((item) => (
                        <Grid.Col span={smallScreen ? 12 : tabletScreen ? 6 : 4} key={item.id}>
                            <ProductCard product={item} />
                        </Grid.Col>
                    ))}
                </Grid>
            </Container>
        </Container>
    );
};

export default Wishlist;
