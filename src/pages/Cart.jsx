import { useCart } from 'react-use-cart';
import { Container, Title, Text, Button, Flex, ThemeIcon, Center, SimpleGrid, Paper, Card, ScrollArea } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconTrash } from '@tabler/icons-react';
import CartItem from '../components/CartItem';
import { useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';
import ShippingItem from '../components/ShippingItem';
import Empty from '../components/Empty';

const shippingCost = [
    {
        id: 1,
        title: 'Dhl Delivery',
        price: 0,
        desc: 'Takes 3-5 working days',
        image: 'https://res.cloudinary.com/dg8os5pul/image/upload/v1720679905/image_20_cob4cf.png'
    },
    {
        id: 2,
        title: 'Fedex Delivery',
        price: 8,
        desc: 'Express delivery',
        image: 'https://res.cloudinary.com/dg8os5pul/image/upload/v1720679904/image_21_gbs1ij.png'
    },
];
const Cart = () => {
    const { items, cartTotal, removeItem, emptyCart, updateItemQuantity, isEmpty } = useCart();

    const [selectedShipping, setSelectedShipping] = useState(1);

    const smallScreen = useMediaQuery('(max-width: 768px)');

    if (isEmpty) {
        return (
            <Empty title="Your cart is empty" button={true} />
        )
    }

    return (
        <Container fluid>
            <Container fluid w={smallScreen ? '100%' : '90%'} >
                <Flex py="md" style={{ textWrap: 'wrap', textAlign: smallScreen ? 'center' : 'left' }} >
                    <Text size='xs'>Home
                        <ThemeIcon size='xs' variant='subtle' px={20}>&gt;</ThemeIcon> <span>Shop</span>
                        <ThemeIcon size='xs' variant='subtle' px={20}>&gt;</ThemeIcon> <span style={{ fontWeight: 'bold' }}>
                            Shopping Cart
                        </span>
                    </Text>

                </Flex>

                <Center>
                    <Title>Shopping Cart</Title>
                </Center>

                <SimpleGrid cols={{ base: 1, xs: 1, sm: 1, md: 2, lg: 2 }} spacing="lg" mt="xl" pb={'xl'}>

                    <Paper shadow="0" p={smallScreen ? "xs" : "xl"} radius="md" >
                        <Container bg={'white'}>
                            <Title order={3} ta={smallScreen ? 'center' : 'left'} mt={'lg'}>Order Summary</Title>
                            <Text size='xs' w={smallScreen ? '100%' : '80%'} ta={smallScreen ? 'center' : 'left'} mt={'sm'}>
                                Please review your items and choose your preferred shipping option to enhance your experience
                            </Text>
                        </Container>

                        <Flex justify={'right'} my={'lg'}>
                            <Button variant="subtle" color='red' size='xs' leftSection={<IconTrash size={15} />} onClick={() => emptyCart()}>Clear cart</Button>
                        </Flex>

                        <Container bg={'white'}>
                            <ScrollArea autoHide={true} h={smallScreen ? 500 : items?.length > 3 ? 400 : 'auto'} pt={'md'} pb={'xl'} px={'md'}>
                                {items?.map((item) => (
                                    <CartItem key={item.id} item={item} onRemove={removeItem} onQuantityChange={updateItemQuantity} />
                                ))}
                            </ScrollArea>
                        </Container>

                        <Container bg={'white'}>
                            <Card shadow="0" padding="lg" radius="md" withBorder mb="md" style={{ borderColor: '#0D1759' }}>
                                <Flex justify={"space-between"} align={'center'} mb={'sm'}>
                                    <Text size='sm'>Subtotal</Text>
                                    <Text size='sm'>${cartTotal}</Text>
                                </Flex>

                                <Flex justify={"space-between"} align={'center'}>
                                    <Text size='sm'>Shipping Fee</Text>
                                    <Text size='sm'>{selectedShipping.price > 0 ? `$${selectedShipping.price}.00` : 'Free'}</Text>
                                </Flex>
                            </Card>
                        </Container>
                    </Paper>

                    <Paper shadow="0" bg={smallScreen ? '#e9f3ff' : 'white'} p={smallScreen ? "xs" : "xl"} radius="md" h={smallScreen ? 'auto' : 650} >
                        <Container bg={smallScreen ? '#e9f3ff' : 'white'}>
                            <Title order={3} ta={smallScreen ? 'center' : 'left'} mt={'lg'}>Delivery Method</Title>
                            <Text size='sm' w={smallScreen ? '100%' : '80%'} ta={smallScreen ? 'center' : 'left'} mt={'sm'} mb={'lg'}>
                                How would you like your items to be delivered
                            </Text>
                        </Container>

                        <Container bg={smallScreen ? '#e9f3ff' : 'white'}>
                            {
                                shippingCost.map((item) => (
                                    <ShippingItem key={item.id} shipping={item} setShipping={setSelectedShipping} selectedShipping={selectedShipping}
                                    />
                                ))
                            }
                        </Container>

                        <Container bg={smallScreen ? '#e9f3ff' : 'white'} pb={'xl'} pt={'md'}>
                            <Flex justify={"space-between"} align={'center'}>
                                <Text fw={600}>Order Total</Text>
                                <Text fw={600}>${cartTotal + shippingCost[selectedShipping - 1].price}</Text>
                            </Flex>
                        </Container>

                        <Container bg={smallScreen ? '#e9f3ff' : 'white'}>
                            <Link to="/checkout">
                                <Button my={'sm'} size='lg' fullWidth>
                                    <Text size='sm'>Proceed to checkout</Text>
                                </Button>
                            </Link>
                        </Container>
                    </Paper>

                </SimpleGrid>
            </Container>

        </Container>
    );
};

export default Cart;
