import { Card, Text, Image, Flex, Title, Container, Grid, Radio } from '@mantine/core';
import PropTypes from 'prop-types';
import { useMediaQuery } from '@mantine/hooks';

const ShippingItem = ({ shipping, selectedShipping, setShipping }) => {
    const smallScreen = useMediaQuery('(max-width: 768px)');
    const smallestScreen = useMediaQuery('(max-width: 500px)');

    return (
        <Card shadow="0" bg={'white'} padding="lg" radius="md" withBorder mb="md" style={{ borderColor: '#0D1759' }}>
            <Grid>
                <Grid.Col span={smallestScreen ? 12 : 3}>
                    <Container style={{ borderRadius: '10px', backgroundColor: '#d8eaff' }}>
                        <Image src={shipping.image} alt={shipping.title} width={100} height={100} radius="md" style={{ objectFit: 'contain' }} />
                    </Container>
                </Grid.Col>
                <Grid.Col span={smallestScreen ? 12 : 9}>
                    <Flex direction={'column'} ml="md" mt={'lg'}>
                        <Flex justify={smallScreen ? 'flex-start' : 'space-between'} align={smallScreen ? 'start' : 'center'} direction={smallScreen ? 'column' : ''}>
                            <Title order={5} size={'md'}>{shipping.title}</Title>
                            <Flex gap={'xs'} align={'center'}>
                                <Text size="sm" weight={500}>{shipping.price > 0 ? `$${shipping.price}.00` : "Free"}</Text>
                                <Radio
                                    checked={selectedShipping === shipping.id}
                                    value={shipping.id}
                                    onChange={() => {setShipping(shipping.id)}}
                                    name='shipping'
                                />
                            </Flex>
                        </Flex>
                        <Text size="sm" weight={500}>{shipping.desc}</Text>
                    </Flex>
                </Grid.Col>
            </Grid>
        </Card>
    );
};

ShippingItem.propTypes = {
    shipping: PropTypes.object.isRequired,
    selectedShipping: PropTypes.number.isRequired,
    setShipping: PropTypes.func.isRequired,
};

export default ShippingItem;
