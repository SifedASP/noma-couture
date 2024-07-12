import { Card, Text, Image, Button, Group, Container, ActionIcon, Flex, Skeleton } from '@mantine/core';
import { IconHeart, IconStarFilled } from '@tabler/icons-react';
import PropTypes from 'prop-types';
import { useWishlist } from 'react-use-wishlist';
import { useCart } from 'react-use-cart';
import { notifications } from '@mantine/notifications';
import { useEffect, useState } from 'react';

const ProductCard = ({ product }) => {
    const { addItem } = useCart();
    const { addWishlistItem, removeWishlistItem, inWishlist } = useWishlist();
    const [adding, setAdding] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        },2000);
    }, []);

    const handleAddToCart = (item) => {
        setAdding(true);
        setTimeout(() => {
            addItem(product);
            notifications.show({
                title: 'Added to cart',
                message: `${item.title} has been added to your cart.`,
                color: 'green',
                autoClose: 1500,
            });
            setAdding(false);
        }, 2000);
    };

    const handleWishlist = (item) => {
        if (inWishlist(item.id)) {
            removeWishlistItem(item.id);
            notifications.show({
                title: 'Removed from wishlist',
                message: `${item.title} has been removed from your wishlist.`,
                color: 'red',
                autoClose: 1500,
            });
        } else {
            addWishlistItem(item);
            notifications.show({
                title: 'Added to wishlist',
                message: `${item.title} has been added to your wishlist.`,
                color: 'blue',
                autoClose: 1500,
            });
        }
    };

    if (isLoading) {
        return (
            <Card shadow="0" p="lg" radius="md" bg={'#e9f1fe'} style={{ borderRadius: '25px' }}>
                <Card.Section bg={'#e9f1fe'} pt={'lg'}>
                    <Skeleton height={250} radius={'lg'} />
                </Card.Section>
                <Flex mt="md" mb="xs" justify="space-between">
                    <Skeleton height={20} width="60%" />
                    <Skeleton height={20} width="30%" />
                </Flex>
                <Group position="apart" mb="xs">
                    <Skeleton height={20} width="40%" />
                </Group>
                <Skeleton height={40} mt="md" radius="md" />
            </Card>
        );
    }

    return (
        <Card shadow="0" p="lg" bg={'#e9f3ff'} radius={'xl'}>
            <Card.Section bg={'#D7EAFF'} pt={'xs'} style={{ borderRadius: '25px' }}>
                <ActionIcon
                    variant="transparent"
                    style={{ position: 'absolute', top: 20, right: 20, zIndex: 1 }}
                    onClick={() => handleWishlist(product)}
                >
                    <IconHeart size={17} fill={inWishlist(product.id) ? '#0D1759' : 'none'} />
                </ActionIcon>
                <a href={`/product/${product.id}`}>
                    <Container className="zoom-container">
                        <Image src={product.image} alt={product.title} className='zoom-image' style={{ objectFit: 'contain' }} />
                    </Container>
                </a>
            </Card.Section>

            <Flex mt="md" mb="xs" justify="space-between" align={'center'}>
                <Text fw={700} size='13px' w={150}>{product.title}</Text>
                <Text size="sm" fw={600} style={{ color: '#0D1759' }}>
                    ${product.price}
                </Text>
            </Flex>

            <Group position="apart" mb="0">
                <Group spacing={5}>
                    <IconStarFilled size={16} color="#FFD700" />
                    <Text size="sm">{product.rating}</Text>
                    <Text size="xs">
                        ({product.reviews})
                    </Text>
                </Group>
            </Group>

            <Button
                variant="outline"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => handleAddToCart(product)}
                loading={adding}
            >
                Add to Cart
            </Button>
        </Card>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    isLoading: PropTypes.bool
};

export default ProductCard;
