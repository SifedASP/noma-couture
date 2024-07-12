import { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import { Grid, Text, Container, Image, Title, Stack, Button, Flex } from '@mantine/core';
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconHeart, IconShoppingBag } from '@tabler/icons-react';
import { products } from '../../data/data';
import { useCart } from 'react-use-cart';
import { useWishlist } from 'react-use-wishlist';
import { notifications } from '@mantine/notifications';
import { useMediaQuery } from '@mantine/hooks';

const ProductCarousel = () => {
    const carouselRef = useRef(null);

    const smallScreen = useMediaQuery('(max-width: 768px)');

    const { addItem } = useCart();
    const { addWishlistItem, inWishlist, removeWishlistItem } = useWishlist();

    const handleAddToCart = (item) => {
        addItem(item);
        notifications.show({
            title: 'Added to cart',
            message: `${item.title} has been added to your cart.`,
            color: 'green',
            autoClose: 1500,
        });
    };

    const handleWishlist = (item) => {
        addWishlistItem(item);
        notifications.show({
            title: 'Added to wishlist',
            message: `${item.title} has been added to your wishlist.`,
            color: 'blue',
            autoClose: 1500,
        });
    };

    const handleRemoveWishlist = (item) => {
        removeWishlistItem(item);
        notifications.show({
            title: 'Removed from wishlist',
            message: `Product has been removed from your wishlist.`,
            color: 'red',
            autoClose: 1500,
        });
    };

    return (
        <Container mt="70px" mb="xl" pb={20} maw={'1180px'}>
            <Carousel
                ref={carouselRef}
                slideSize="100%"
                slideGap="md"
                align="start"
                withIndicators={false}
                withControls={true}
                // controlsOffset="430px"
                nextControlIcon={<IconArrowNarrowRight size={19} />}
                previousControlIcon={<IconArrowNarrowLeft size={19} />}
                loop
                pb={40}
            >
                {products.map((product, index) => (
                    <Carousel.Slide key={product.id}>
                        {
                            smallScreen ? (
                                <Grid gutter="md" align="center">

                                    <Grid.Col span={10}>
                                        <Container h={500} bg={'red'} style={{ borderRadius: '10px' }}>
                                            <Image src={product.image} alt={product.title} radius="md" w={'100%'} h={'100%'} style={{ objectFit: 'contain' }} />
                                        </Container>
                                    </Grid.Col>

                                    <Grid.Col span={2} style={{ alignSelf: 'start' }}>
                                        <Title order={2} mt={-8} size="38px" weight={700} style={{ color: '#0D1759' }}>
                                            {index < 8 ? `0${(index + 1) + 1}` : (index + 1) + 1}
                                        </Title>
                                    </Grid.Col>
                                    <Grid.Col span={12}>
                                        <Stack spacing="xs">
                                            <Title order={3} size={smallScreen ? "22px" : "25px"} lts={2} mt="md" style={{ color: '#0D1759' }}>
                                                {product.title}
                                            </Title>
                                            <Text mt="md" size="13px" style={{ lineHeight: 1.5 }} c={'#1E1E1E'}>
                                                {product.description}
                                            </Text>
                                            <Text mt="md" size="22px" fw={600} style={{ color: '#0D1759' }}>
                                                ${product.price}
                                            </Text>
                                            <Flex mt="md" gap={15}>
                                                <Button
                                                    variant="outline"
                                                    leftSection={<IconShoppingBag size={13} />}
                                                    radius="16px"
                                                    size="lg"
                                                    fullWidth
                                                    onClick={() => handleAddToCart(product)}
                                                >
                                                    <Text size="12px">Add to Cart</Text>
                                                </Button>
                                                {
                                                    inWishlist(product.id) ? (
                                                        <Button
                                                            variant="filled"
                                                            leftSection={<IconHeart size={13} />}
                                                            radius="16px"
                                                            size="lg"
                                                            fullWidth
                                                            onClick={() => handleRemoveWishlist(product.id)}
                                                        >
                                                            <Text size="12px">Remove from Wishlist</Text>
                                                        </Button>
                                                    ) : (
                                                        <Button
                                                            variant="outline"
                                                            leftSection={<IconHeart size={13} />}
                                                            radius="16px"
                                                            size="lg"
                                                            fullWidth
                                                            onClick={() => handleWishlist(product)}
                                                        >
                                                            <Text size="12px">Add to Wishlist</Text>
                                                        </Button>
                                                    )
                                                }
                                            </Flex>
                                        </Stack>
                                    </Grid.Col>

                                </Grid>
                            ) :
                                (
                                    <Grid gutter="md" align="center">
                                        <Grid.Col span={7}>
                                            <Stack spacing="xs">
                                                <Title order={3} size="25px" lts={2} mt="md" style={{ color: '#0D1759' }}>
                                                    {product.title}
                                                </Title>
                                                <Text mt="md" size="13px" style={{ lineHeight: 1.5 }} c={'#1E1E1E'}>
                                                    {product.description}
                                                </Text>
                                                <Text mt="md" size="22px" fw={600} style={{ color: '#0D1759' }}>
                                                    ${product.price}
                                                </Text>
                                                <Flex mt="md" gap={15}>
                                                    <Button
                                                        variant="outline"
                                                        leftSection={<IconShoppingBag size={13} />}
                                                        radius="16px"
                                                        size="lg"
                                                        fullWidth
                                                        onClick={() => handleAddToCart(product)}
                                                    >
                                                        <Text size="12px">Add to Cart</Text>
                                                    </Button>
                                                    {
                                                        inWishlist(product.id) ? (
                                                            <Button
                                                                variant="filled"
                                                                leftSection={<IconHeart size={13} />}
                                                                radius="16px"
                                                                size="lg"
                                                                fullWidth
                                                                onClick={() => handleRemoveWishlist(product.id)}
                                                            >
                                                                <Text size="12px">Remove from Wishlist</Text>
                                                            </Button>
                                                        ) : (
                                                            <Button
                                                                variant="outline"
                                                                leftSection={<IconHeart size={13} />}
                                                                radius="16px"
                                                                size="lg"
                                                                fullWidth
                                                                onClick={() => handleWishlist(product)}
                                                            >
                                                                <Text size="12px">Add to Wishlist</Text>
                                                            </Button>
                                                        )
                                                    }
                                                </Flex>
                                            </Stack>
                                        </Grid.Col>

                                        <Grid.Col span={1} style={{ alignSelf: 'start' }}>
                                            <Title order={2} mt={-8} size="38px" weight={700} style={{ color: '#0D1759' }}>
                                                {index < 8 ? `0${(index + 1) + 1}` : (index + 1) + 1}
                                            </Title>
                                        </Grid.Col>

                                        <Grid.Col span={4}>
                                            <Container h={'360px'} bg={'#d8eaff'} style={{ borderRadius: '10px' }}>
                                                <Image src={product.image} alt={product.title} radius="md" w={'100%'} h={'100%'} style={{ objectFit: 'contain' }} />
                                            </Container>
                                        </Grid.Col>
                                    </Grid>
                                )
                        }
                    </Carousel.Slide>
                ))}
            </Carousel>
        </Container>
    );
};

export default ProductCarousel;
