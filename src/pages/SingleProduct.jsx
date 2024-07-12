import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../data/data';
import { useCart } from 'react-use-cart';
import { Container, Image, Text, Title, Button, SimpleGrid, Tabs, Grid, Flex, Paper, ThemeIcon, Divider, Group } from '@mantine/core';
import { IconChevronRight, IconHeart, IconShoppingBag, IconStarFilled } from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import ProductCard from '../components/ProductCard';
import { useMediaQuery } from '@mantine/hooks';
import Quantity from '../components/Quantity';

const SingleProduct = () => {
    let { id } = useParams();

    const { addItem } = useCart();

    const product = products.find((product) => product.id === parseInt(id, 10));

    const { title, description, price, rating, color, image, category, gallery } = product;

    const [selectedImage, setSelectedImage] = useState(image);

    const [adding, setAdding] = useState(false);
    const [wish, setWish] = useState(false);
    const [count, setCount] = useState(1);


    const handleAddToCart = () => {
        setAdding(true);
        setTimeout(() => {
            addItem(product, count);
            notifications.show({
                title: 'Added to cart',
                message: `${title} has been added to your cart.`,
                color: 'green',
                autoClose: 1500,
            });
            setAdding(false);
        }, 2000);
    };

    const handleWishlist = () => {
        setWish(true);
        setTimeout(() => {
            notifications.show({
                title: 'Added to wishlist',
                message: `${title} has been added to your wishlist.`,
                color: 'blue',
                autoClose: 1500,
            });
            setWish(false);
        }, 2000);

    };

    const relatedProducts = products.filter((p) => p.id !== product.id).slice(5, 8);

    const smallScreen = useMediaQuery('(max-width: 768px)');

    const tabletScreen = useMediaQuery('(max-width: 1024px)');

    if (!product) {
        return (
            <Container>
                <Title order={2}>Not found</Title>
            </Container>
        );
    }



    return (
        <Container fluid bg={'#e9f3ff'} pb={'55px'}>
            <Container maw={'1180px'}>
                <Flex pt="md" style={{ textWrap: 'wrap' }}>
                    <Group size='xs'><Link to='/products'><Text size='xs' c={'dimmed'}>Shop</Text></Link>
                        <ThemeIcon size='13px' variant='subtle'><IconChevronRight /></ThemeIcon> <Text c={'dimmed'} size='xs'>Category</Text>
                        <ThemeIcon size='13px' variant='subtle'><IconChevronRight /></ThemeIcon> <Text c={'dimmed'} size='xs'>{category}</Text>
                        <ThemeIcon size='13px' variant='subtle'><IconChevronRight /></ThemeIcon> <Text fw={500} size='xs'>{title}</Text>
                    </Group>

                </Flex>
                <SimpleGrid cols={{ base: 1, xs: 1, sm: 2, md: 2, lg: 2 }} spacing="md" mt="md">
                    <Paper radius={'lg'} p="0" bg={'#e9f3ff'} style={{ cursor: 'pointer' }}>
                        <Container bg={'#d8eaff'} p="0" style={{ cursor: 'pointer', borderRadius: '20px' }} h={320} className='zoom-container'>
                            <Image src={selectedImage} alt={title} radius="md" className="zoom-image" style={{ objectFit: 'contain' }} />
                        </Container>
                        <Grid mt="md" w={'100%'}>
                            {gallery.map((img, index) => (
                                <Grid.Col span={4} key={index}>
                                    <Container bg={'#d8eaff'} p="md" style={{ cursor: 'pointer', borderRadius: '20px' }} onClick={() => setSelectedImage(img)}
                                    >
                                        <Image
                                            src={img}
                                            alt={`Gallery ${index + 1}`}
                                            radius="md"
                                            width={90}
                                            height={100}
                                            style={{ objectFit: 'contain' }}

                                        />
                                    </Container>
                                </Grid.Col>
                            ))}
                        </Grid>
                    </Paper>
                    <Container p={0}>
                        <Title order={smallScreen ? 3 : tabletScreen ? 2 : 1}>{title}</Title>
                        <Text size="xl" weight={500}>${price}</Text>
                        <Title order={3} mt="md">Product Information</Title>
                        <Text size="sm" mt="md" ta={'justify'}>{description}</Text>
                        <SimpleGrid cols={{ base: 2, xs: 2, sm: 2, md: 3, lg: 3 }} mt="md">
                            <Flex gap={'.5rem'} align={'center'}>
                                <Title order={4}>Type:</Title>
                                <Text size='sm'>Pattern</Text>
                            </Flex>
                            <Flex gap={'.5rem'} align={'center'}>
                                <Title order={4}>Size:</Title>
                                <Text size='sm'>Medium</Text>
                            </Flex>
                            <Flex gap={'.5rem'} align={'center'}>
                                <Title order={4}>Color:</Title>
                                <Text size='sm'>{color}</Text>
                            </Flex>

                            <Flex justify={'left'} gap={'.5rem'} align={'center'}>
                                <Quantity count={count} setCount={setCount} />
                            </Flex>

                            <Flex gap={'.5rem'} align={'center'}>
                                <Title order={4}>Rating:</Title>
                                <Text size='sm'> <IconStarFilled size={16} color='#ffd700' />{rating}</Text>
                            </Flex>
                            <Flex gap={'.5rem'} align={'center'}>
                                <Title order={4}>Category:</Title>
                                <Text size='sm'>{category}</Text>
                            </Flex>
                        </SimpleGrid>
                        <Flex justify={'space-between'} align={'center'} mt="md" gap={'.5rem'}>
                            <Button
                                leftSection={<IconShoppingBag size={16} />}
                                mt="md"
                                radius="md"
                                size="lg"
                                variant='filled'
                                onClick={handleAddToCart}
                                fullWidth
                                loading={adding}
                            >
                                <Text size="xs">Add to Cart</Text>
                            </Button>
                            <Button
                                leftSection={<IconHeart size={16} />}
                                mt="md"
                                radius="md"
                                size="lg"
                                variant="outline"
                                fullWidth
                                loading={wish}
                                onClick={handleWishlist}
                            >
                                <Text size="xs" style={{ textWrap: 'wrap' }}>Add to Wishlist</Text>
                            </Button>
                        </Flex>
                        <Tabs mt="xl" defaultValue="Details">
                            <Tabs.List>
                                <Tabs.Tab value="Details">
                                    Details
                                </Tabs.Tab>
                                <Tabs.Tab value="Reviews">
                                    Reviews
                                </Tabs.Tab>
                            </Tabs.List>
                            <Tabs.Panel value="Details" p={'.5rem'}>
                                <Title order={3} my="md">Description</Title>
                                <Text size='13px' ta={'justify'} lh={1.5}>{description}</Text>
                            </Tabs.Panel>

                        </Tabs>
                    </Container>
                </SimpleGrid>
            </Container>
            <Divider my="xl" />
            <Container maw={'1180px'}>
                <Title order={2} lts={2} size={'35px'} style={{ color: '#0D1759' }} ta={'center'}>Related Products</Title>
                <Grid mt="xl">
                    {relatedProducts.map((product) => (
                        <Grid.Col span={smallScreen ? 12 : tabletScreen ? 6 : 4} key={product.id}>
                            <ProductCard product={product} />
                        </Grid.Col>
                    ))}
                </Grid>
            </Container>
        </Container>
    );
};

export default SingleProduct;
