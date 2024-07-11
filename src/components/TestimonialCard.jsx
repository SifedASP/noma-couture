import { Card, Text, Avatar, Group, Stack, Image } from '@mantine/core';
import { IconStarFilled } from '@tabler/icons-react';
import PropTypes from 'prop-types';

const TestimonialCard = ({ testimonial }) => {
    return (
        <Card shadow="0" padding="lg" radius="md" withBorder bg={'#e9f3ff'} style={{ borderColor: '#0D1759' }}>
            <Stack spacing="md" py={30}>
                <Image w={30} src={'https://res.cloudinary.com/dg8os5pul/image/upload/v1720648102/unnamed_4_wbrjra.png'} alt="testi" />
                <Text size="xs" py={10}>{testimonial.text}</Text>
                <Group>
                    <Avatar src={testimonial.avatar} radius="xl" />
                    <div>
                        <Text size="sm" fw={700}>{testimonial.name}</Text>
                        <Group gap={4}>
                            {[...Array(5)].map((_, index) => (
                                <IconStarFilled key={index} size={16} color={index < testimonial.rating ? '#FFD700' : '#D3D3D3'} />
                            ))}
                        </Group>
                    </div>
                </Group>
            </Stack>
        </Card>
    );
};

TestimonialCard.propTypes = {
    testimonial: PropTypes.shape({
        text: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
    }).isRequired,
};

export default TestimonialCard;
