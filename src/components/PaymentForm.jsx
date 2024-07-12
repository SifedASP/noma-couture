import { TextInput, Select, Checkbox, Container, RadioGroup, Flex, Radio, Button, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconBrandPaypal, IconCreditCard } from '@tabler/icons-react';
import { useState } from 'react';

const PaymentForm = ({ form }) => {

    const smallScreen = useMediaQuery('(max-width: 768px)');

    const [paymentMethod, setPaymentMethod] = useState('card');

    return (
        <Container bg={smallScreen ? '#e9f3ff' : '#fff'} style={{ padding: '20px 0' }}>
            <RadioGroup value={paymentMethod} onChange={setPaymentMethod} withAsterisk>
                <Flex gap="lg" justify={'space-between'} align={'center'} mb={'lg'}>
                    <Flex w={smallScreen ? '100%' : '50%'} justify={'space-between'} gap={'sm'} align={'center'} direction={'row'} style={{
                        border: paymentMethod === 'card' ? '1.5px solid #0D1759' : '1px solid #1E1E1E',
                        padding: '10px',
                        borderRadius: '5px',
                    }}>
                        <Flex align="center" gap={'5px'}>
                            <IconCreditCard size={smallScreen ? 15 : 18} />
                            <Text size={smallScreen ? '10px' : 'xs'}>Pay with card</Text>
                        </Flex>
                        <Radio
                            value="card"
                            size='xs'
                            variant='outline'
                        />
                    </Flex>

                    <Flex w={smallScreen ? '100%' : '50%'} justify={'space-between'} gap={'sm'} align={'center'} direction={'row'} style={{
                        border: paymentMethod === 'paypal' ? '1.5px solid #0D1759' : '1px solid #1E1E1E',
                        padding: '10px',
                        borderRadius: '5px',
                    }}>
                        <Flex align="center" gap={'5px'}>
                            <IconBrandPaypal size={smallScreen ? 15 : 18} />
                            <Text size={smallScreen ? '10px' : 'xs'}>Pay with Paypal</Text>
                        </Flex>
                        <Radio
                            value="paypal"
                            size='xs'
                            variant='outline'
                        />
                    </Flex>

                </Flex>
            </RadioGroup>

            {paymentMethod === 'card' && (
                <form>
                    <TextInput label="Name on card"  {...form.getInputProps('nameOnCard')} required />
                    <TextInput label="Card number" mt={'md'} {...form.getInputProps('cardNumber')} required />
                    <Text mt={'md'} size="sm">
                        Expiry date
                    </Text>
                    <Flex gap="md" mt={'xs'}>
                        <Select
                            placeholder="Month"
                            data={Array.from({ length: 12 }, (_, i) => ({ value: (i + 1).toString(), label: (i + 1).toString() }))}
                            {...form.getInputProps('expiryMonth')}
                            required
                        />
                        <Select
                            placeholder="Year"
                            data={Array.from({ length: 10 }, (_, i) => ({ value: (2023 + i).toString(), label: (2023 + i).toString() }))}
                            {...form.getInputProps('expiryYear')}
                            required
                        />
                        <TextInput placeholder="cvc" {...form.getInputProps('cvc')} required />
                    </Flex>
                    <Checkbox label="Save my card details for future payment" mt="md" {...form.getInputProps('saveCard', { type: 'checkbox' })} />
                </form>
            )}

            {paymentMethod === 'paypal' && (
                <Container bg={smallScreen ? '#e9f3ff' : '#fff'} p={5}>
                    <TextInput label="Paypal Email" placeholder="john.doe@example.com" required />
                    <Button fullWidth mt="md" size='md' >
                        <Text size="sm">Confirm Paypal</Text>
                    </Button>
                </Container>
            )}
        </Container>
    );
};

export default PaymentForm;
