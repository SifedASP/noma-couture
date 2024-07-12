import { Container, Title, Text, Button, Center, Box } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const PaymentConfirmation = () => {
    return (
        <Container size="sm" pb="80px">
            <Center>
                <Box
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        animation: 'colorAnimation 3s infinite',
                    }}
                >
                    <Box
                        style={{
                            width: 120,
                            height: 120,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            animation: 'innerColorAnimation 3s infinite',
                        }}
                    >
                        <Box
                            style={{
                                width: 70,
                                height: 70,
                                borderRadius: '50%',
                                backgroundColor: '#0D1759',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <IconCheck size={50} color="white" />
                        </Box>
                    </Box>
                </Box>
            </Center>
            <Title align="center" mt="lg">
                Payment Has Been Confirmed
            </Title>
            <Text align="center" mt="md" size='sm'>
                Your receipt and tracking information has been sent to your email address. <br />Thank you for shopping with us!
            </Text>
            <Center mt="xl">
                <Link to="/">
                    <Button size="md" radius="md">
                        <Text size='xs'>
                            Back to homepage
                        </Text>
                    </Button>
                </Link>
            </Center>
        </Container>
    );
};

export default PaymentConfirmation;