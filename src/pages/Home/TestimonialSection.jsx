import { Container, SimpleGrid, Title, Text, Center, Stack, Flex, Group, ActionIcon } from '@mantine/core';
import TestimonialCard from '../../components/TestimonialCard';
import { useMediaQuery } from '@mantine/hooks';
import { IconArrowNarrowLeft, IconArrowNarrowRight } from '@tabler/icons-react';
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';

const testimonials = [
    {
        text: 'Lorem ipsum dolor sit amet consectetur. Sed diam turpis ornare sed ut non sed. Duis egestas dictumst dolor libero lacus at semper congue. Adipiscing in in nisi neque ipsum et dictum sed. Amet sollicitudin eu molestie tellus amet.',
        name: 'Mercy Nwanzi',
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
        rating: 4,
    },
    {
        text: 'Lorem ipsum dolor sit amet consectetur. Sed diam turpis ornare sed ut non sed. Duis egestas dictumst dolor libero lacus at semper congue. Adipiscing in in nisi neque ipsum et dictum sed. Amet sollicitudin eu molestie tellus amet.',
        name: 'Mercy Nwanzi',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        rating: 4,
    },
    {
        text: 'Lorem ipsum dolor sit amet consectetur. Sed diam turpis ornare sed ut non sed. Duis egestas dictumst dolor libero lacus at semper congue. Adipiscing in in nisi neque ipsum et dictum sed. Amet sollicitudin eu molestie tellus amet.',
        name: 'Mercy Nwanzi',
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
        rating: 4,
    },
];


const TestimonialsSection = () => {

    const ref1 = useRef(null);

    const isInView1 = useInView(ref1, { once: true });

    const firstAnimationProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 2.5, delay: 0.5 }
    };

    const smallScreen = useMediaQuery('(max-width: 768px)');

    return (
        <Container pt="xl" pb={'90px'} id='testimonials' maw={'1180px'}>
            {
                smallScreen ? <Flex justify={'space-between'}>
                    <Title order={2} align="center" size={'34px'} c={'#0D1759'}>Testimonials</Title>

                    <Group>
                        <ActionIcon size="md" variant="filled" color='grey' disabled>
                            <IconArrowNarrowLeft size={24} />
                        </ActionIcon>
                        <ActionIcon size="md" variant="filled" style={{ backgroundColor: '#0D1759', cursor: 'not-allowed' }} >
                            <IconArrowNarrowRight size={24} />
                        </ActionIcon>
                    </Group>
                </Flex> :
                    <Center pb={'30px'} pos={'relative'} >
                        <Stack align="center" spacing="sm">
                            <Title order={2} align="center" size={'64px'} c={'#0D1759'}>Testimonials</Title>
                            <Text size="19px" mt={'-20px'} align="center">What our customers say about us:</Text>
                        </Stack>

                        <Group pos={'absolute'} right={0} top={20}>
                            <ActionIcon size="md" variant="filled" color='grey' disabled>
                                <IconArrowNarrowLeft size={24} />
                            </ActionIcon>
                            <ActionIcon size="md" variant="filled" style={{ backgroundColor: '#0D1759', cursor: 'not-allowed' }} >
                                <IconArrowNarrowRight size={24} />
                            </ActionIcon>
                        </Group>
                    </Center>
            }
            <SimpleGrid cols={{ base: 1, xs: 2, sm: 2, md: 3 }} spacing="lg" mt="xl" breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
                {testimonials.map((testimonial, index) => (
                    <motion.div ref={ref1}
                        {...firstAnimationProps}
                        animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} key={index}>
                        <TestimonialCard testimonial={testimonial} />
                    </motion.div>
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default TestimonialsSection;
