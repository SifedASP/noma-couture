import { useState } from 'react';
import { Card, Text, Image, Flex, Stack, Title, Container, Grid, UnstyledButton } from '@mantine/core';
import PropTypes from 'prop-types';
import { useMediaQuery } from '@mantine/hooks';
import Quantity from './Quantity';

const CartItem = ({ item, onRemove, onQuantityChange, remove }) => {

    const [quantity, setQuantity] = useState(item.quantity);

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
        onQuantityChange(item.id, newQuantity);
    };

    const smallScreen = useMediaQuery('(max-width: 768px)');
    const smallestScreen = useMediaQuery('(max-width: 500px)');

    return (
        <Card shadow="0" padding="lg" radius="md" withBorder mb="md" style={{ borderColor: '#0D1759' }}>
            <Grid>
                <Grid.Col span={smallestScreen ? 12 : 4}>
                    <Container style={{ borderRadius: '10px' }}>
                        {
                            remove ?
                                <Image src={item.image} alt={item.title} width={110} height={70} radius="md" style={{ objectFit: 'contain' }} />
                                :
                                <Image src={item.image} alt={item.title} width={100} height={100} radius="md" style={{ objectFit: 'contain' }} />
                        }
                    </Container>
                </Grid.Col>
                <Grid.Col span={smallestScreen ? 12 : 8}>
                    {
                        remove && (
                            <Stack spacing="xs" ml="md" >
                                <Title order={5} size={smallestScreen ? '12px' : 'md'}>{item.title}</Title>
                                <Text size="sm" weight={500}>${item.price}</Text>
                            </Stack>
                        )
                    }
                    {
                        !remove && (
                            <Stack spacing="xs" ml="md" >
                                <Flex justify={smallScreen ? 'flex-start' : 'space-between'} align={smallScreen ? 'start' : 'center'} direction={smallScreen ? 'column' : ''}>
                                    <Title order={5} size={smallestScreen ? '12px' : 'md'}>{item.title}</Title>
                                    <Text size="sm" weight={500}>${item.price}</Text>
                                </Flex>
                                <Flex justify={'space-between'} align={'center'} direction={'row'} >
                                    <Text size="xs"><span style={{ fontWeight: 'bold' }}>Size: </span>Small</Text>
                                    <Text size="xs"><span style={{ fontWeight: 'bold' }}>Color: </span> {item.color}</Text>
                                </Flex>
                                <Flex justify={'space-between'} align={'center'} direction={smallScreen ? 'row' : 'row'}>
                                    <Flex align="center" mt="xs" justify={'center'}>
                                        <Quantity count={quantity} setCount={handleQuantityChange} />
                                    </Flex>
                                    <UnstyledButton onClick={() => onRemove(item.id)}>
                                        <Text size="xs" c={'red'}>Remove</Text>
                                    </UnstyledButton>
                                </Flex>
                            </Stack>
                        )
                    }
                </Grid.Col>

            </Grid>
        </Card>
    );
};

export default CartItem;

CartItem.propTypes = {
    item: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
    onQuantityChange: PropTypes.func.isRequired,
    remove: PropTypes.string
};