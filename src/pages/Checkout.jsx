import { useCart } from 'react-use-cart';
import { Container, Title, Text, Button, Flex, ThemeIcon, Center, SimpleGrid, Paper, Card, ScrollArea } from '@mantine/core';
import CartItem from '../components/CartItem';
import { useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';
import CheckoutStepper from '../components/CheckoutStepper';
import BillingDetailsForm from '../components/BillingDetailsForm';
import { useForm } from '@mantine/form';
import Empty from '../components/Empty';
import PaymentForm from '../components/PaymentForm';
import PaymentConfirmation from '../components/PaymentConfirmation';

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


const Checkout = () => {
    const { items, cartTotal, removeItem, updateItemQuantity, isEmpty } = useCart();

    /* eslint-disable-next-line no-unused-vars */
    const [selectedShipping, setSelectedShipping] = useState(1);
    const [activeStep, setActiveStep] = useState(0);
    const [loading, setLoading] = useState(false);

    const smallScreen = useMediaQuery('(max-width: 768px)');

    const form = useForm({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            country: '',
            phoneNumber: '',
            address: '',
            city: '',
            postcode: '',
            differentShipping: false,
            shippingNotes: '',
            nameOnCard: '',
            cardNumber: '',
            expiryMonth: '',
            expiryYear: '',
            cvc: '',
            saveCard: false,
        },
    });

    const nextStep = () =>
        setActiveStep((current) => {

            return current < 3 ? current + 1 : current;
        });

    // const prevStep = () => setActiveStep((current) => (current > 0 ? current - 1 : current));

    const handlePlaceOrder = () => {
        setLoading(true);

        setTimeout(() => {
            nextStep();
            setLoading(false);
        }, 2500);

    }

    if (isEmpty) {
        return (
            <Empty title="Your cart is empty" button={true} />
        )
    }

    return (
        <Container fluid>
            <Container w={smallScreen ? '100%' : '90%'} >
                <Flex py="md" style={{ textWrap: 'wrap', textAlign: smallScreen ? 'center' : 'left' }}>
                    <Text size='xs'>Home
                        <ThemeIcon size='xs' variant='subtle' px={20}>&gt;</ThemeIcon> <span>Shop</span>
                        <ThemeIcon size='xs' variant='subtle' px={20}>&gt;</ThemeIcon> <span style={{ fontWeight: 'bold' }}>
                            Shopping Cart
                        </span>
                        <ThemeIcon size='xs' variant='subtle' px={20}>&gt;</ThemeIcon> <span style={{ fontWeight: 'bold' }}>Checkout</span>
                    </Text>

                </Flex>

                <Center>
                    <Title>Checkout</Title>
                </Center>

                <Container w={smallScreen ? '100%' : '70%'}>
                    <CheckoutStepper activeStep={activeStep} setActiveStep={setActiveStep} loading={loading} />
                </Container>

                <SimpleGrid cols={{ base: 1, xs: 1, sm: 1, md: 2, lg: 2 }} spacing="lg" mt="xl" pb={'xl'}>

                    {
                        activeStep === 0 && <Paper h={'auto'} shadow="0" p={smallScreen ? "xs" : "xl"} bg={smallScreen ? '#e6f2ff' : 'white'} >
                            <Container bg={smallScreen ? '#e6f2ff' : 'white'}>
                                <Title order={3} ta={smallScreen ? 'center' : 'left'} mt={'lg'}>Billing Details</Title>
                            </Container>

                            <BillingDetailsForm form={form} />

                            {form.values.differentShipping && (
                                <BillingDetailsForm form={form} isShipping={true} />

                            )}
                        </Paper>
                    }

                    {
                        activeStep === 1 && <Paper h={'auto'} shadow="0" p={smallScreen ? "xs" : "xl"} bg={smallScreen ? '#e6f2ff' : 'white'} >
                            <Container bg={smallScreen ? '#e6f2ff' : 'white'}>
                                <Title order={3} ta={smallScreen ? 'center' : 'left'} mt={'md'}>Payment Method</Title>
                                <Text ta={smallScreen ? 'center' : 'left'} size='sm'>
                                    Select a preferred payment method:
                                </Text>
                            </Container>

                            <PaymentForm form={form} />


                        </Paper>
                    }

                    {
                        (activeStep === 0 || activeStep === 1) &&
                        (
                            <Paper shadow="0" p={smallScreen ? "xs" : "xl"} radius="md" h={'620px'} >
                                <Container bg={'white'}>
                                    <Title order={3} ta={smallScreen ? 'center' : 'left'} mt={'lg'}>Summary</Title>
                                </Container>

                                <Container bg={'white'} py={'xl'}>
                                    <ScrollArea h={200} px={'md'}>
                                        {items?.map((item) => (
                                            <CartItem key={item.id} remove={'yes'} item={item} onRemove={removeItem} onQuantityChange={updateItemQuantity} />
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

                                <Container bg={'white'} pb={'xl'} pt={'md'}>
                                    <Flex justify={"space-between"} align={'center'}>
                                        <Text fw={600}>Order Total</Text>
                                        <Text fw={600}>${cartTotal + shippingCost[selectedShipping - 1].price}</Text>
                                    </Flex>
                                </Container>

                                <Container bg={'white'}>
                                    {
                                        (activeStep === 0) && <Button my={'sm'} loading={loading} size='lg' fullWidth onClick={handlePlaceOrder}>
                                            <Text size='sm'>Make Payment</Text>
                                        </Button>}
                                    {(activeStep === 1) && <Button my={'sm'} loading={loading} size='lg' fullWidth onClick={handlePlaceOrder}>
                                        <Text size='sm'>Place Order</Text>
                                    </Button>
                                    }
                                </Container>
                            </Paper>
                        )
                    }

                </SimpleGrid>

                {
                    (activeStep === 2) && <PaymentConfirmation />
                }
            </Container>

        </Container>
    );
};

export default Checkout;
