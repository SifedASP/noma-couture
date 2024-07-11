import { Grid, Text, Title, Button, Container, Flex } from '@mantine/core';
import { products } from '../../data/data';
import ProductCard from '../../components/ProductCard';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';


const NewArrivals = () => {

const NewArrivals = products.slice(0, 3);

const smallScreen = useMediaQuery('(max-width: 810px)');

const tabletScreen = useMediaQuery('(max-width: 1024px)');

    return (
        <Container py="xl">
            <Flex justify={'space-between'} align={'center'}>
                <Title order={2} style={{ color: '#0D1759' }}>
                    New Arrivals
                </Title>
                <Link to="/products">
                    <Button variant="transparent" style={{ color: '#0D1759' }}>
                        <Text size="sm" style={{ color: '#0D1759' }}>
                            See all
                        </Text>
                    </Button></Link>
            </Flex>
            <Grid mt="md">
                {NewArrivals.map((product) => (
                    <Grid.Col span={smallScreen ? 12 : tabletScreen ? 6 : 4} key={product.id}>
                        <ProductCard product={product} />
                    </Grid.Col>
                ))}
            </Grid>
        </Container>
    );
};

export default NewArrivals;
