// src/components/CustomHeader.jsx
import { Container, Group, Title, Image, ActionIcon, Badge, Anchor } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconHeart, IconBell, IconSearch, IconUserCircle, IconShoppingBag } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import { useCart } from 'react-use-cart';

const CustomHeader = () => {

    const smallScreen = useMediaQuery('(max-width: 768px)');

    const tabletScreen = useMediaQuery('(max-width: 1024px)');

    const { totalItems } = useCart();

    return (
        <div className='bg-light-blue'>
            <div style={{ borderBottom: `1px solid #0D1759`, padding: '15px 0' }}>
                <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} maw={'1180px'}>
                    <Group>
                        <ActionIcon variant='transparent' c={'#1E1E1ECC'}>
                            <IconUserCircle size={24} />
                        </ActionIcon>
                        <ActionIcon variant='transparent' c={'#1E1E1ECC'}>
                            <IconBell size={24} />
                        </ActionIcon>
                        <ActionIcon variant='transparent' c={'#1E1E1ECC'} style={{ visibility: 'hidden', cursor: 'not-allowed' }}>
                            <IconBell size={24} />
                        </ActionIcon>
                    </Group>
                    <Link to="/">
                        <Image src="https://res.cloudinary.com/dg8os5pul/image/upload/v1720552732/unnamed_1_yblyjq.png" alt="Logo" width={40} height={40} />
                    </Link>
                    <Group>

                        <ActionIcon variant='transparent' c={'#1E1E1ECC'} style={{ visibility: smallScreen ? 'hidden' : 'visible', cursor: 'not-allowed' }}>
                            <IconSearch size={24} />
                        </ActionIcon>
                        <Link to="/wishlist">
                            <ActionIcon variant='transparent' c={'#1E1E1ECC'}>
                                <IconHeart size={24} />
                            </ActionIcon></Link>
                        <Link to="/cart" style={{ position: 'relative' }}>
                            <ActionIcon variant='transparent' c={'#1E1E1ECC'}>
                                <IconShoppingBag size={24} />
                            </ActionIcon>
                            <div style={{ position: 'absolute', top: -7, right: -3 }}>
                                <Badge size="xs" circle>{totalItems}</Badge>
                            </div>
                        </Link>
                    </Group>
                </Container>
            </div>

            <div style={{ borderBottom: `1px solid #0D1759`, padding: '14px 0' }}>
                <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Group spacing={smallScreen ? "xs" : tabletScreen ? "sm" : "xl"}>
                        <Link to="/" >
                            <Title px={smallScreen ? 10 : 20} lts={1} size={smallScreen ? "12px" : tabletScreen ? "16px" : "19px"} c={'#0D1759'}>Home</Title>
                        </Link>
                        <Anchor href="/#about">
                            <Title px={smallScreen ? 10 : 20} lts={1} size={smallScreen ? "12px" : tabletScreen ? "16px" : "19px"} c={'#0D1759'}>About</Title>
                        </Anchor>
                        <Link to="/products">
                            <Title px={smallScreen ? 10 : 20} lts={1} size={smallScreen ? "12px" : tabletScreen ? "16px" : "19px"} c={'#0D1759'}>Shop</Title>
                        </Link>
                        <Anchor href="/#testimonials">
                            <Title px={smallScreen ? 10 : 20} lts={1} size={smallScreen ? "12px" : tabletScreen ? "16px" : "19px"} c={'#0D1759'}>Testimonials</Title>
                        </Anchor>
                    </Group>
                </Container>
            </div>

        </div>
    );
};

export default CustomHeader;
