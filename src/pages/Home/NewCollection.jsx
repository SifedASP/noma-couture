import { Grid, Text, Container, Image, Title, Stack, Flex, } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';

const NewCollection = () => {

    const ref1 = useRef(null);

    const isInView1 = useInView(ref1, { once: true });

    const firstAnimationProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 2.5, delay: 0.5 }
    };

    const smallScreen = useMediaQuery('(max-width: 768px)');

    return (
        <Container mt="70px" mb="xl">
            <Stack align={smallScreen ? 'left' : 'center'}>
                <Title order={1} style={{ color: '#0D1759' }} ml={!smallScreen ? '0' : '2%'} lts={2} mr={smallScreen ? '0' : '-20%'}>
                    Brand New
                </Title>
                <Title order={1} style={{ color: '#0D1759' }} ml={!smallScreen ? '0' : '35%'} mr={smallScreen ? '0' : '-50%'} lts={2} mt={-10}>
                    Collection
                </Title>
            </Stack>
            <Grid gutter="md" align="center" mt={smallScreen ? 'xl' : '0'}>
                <Grid.Col span={smallScreen ? 2 : 1} style={{ alignSelf: 'start' }}>
                    <Title order={2} size="30px" style={{ color: '#0D1759' }}>
                        01
                    </Title>
                </Grid.Col>
                <Grid.Col span={smallScreen ? 10 : 5}>
                <motion.div ref={ref1}
                        {...firstAnimationProps}
                        animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}>
                    <Image
                        src="https://res.cloudinary.com/dg8os5pul/image/upload/v1720583582/image_15_k0kpsf.png"
                        alt="Collection Image"
                        radius="md"
                    />
                    </motion.div>
                </Grid.Col>
                <Grid.Col span={smallScreen ? 12 : 6}>
                    <Stack spacing="xs">
                        <Title order={3} size="25px" lts={2} mt="md" style={{ color: '#0D1759' }}>
                            Ashanti Ruffle 3 piece set (Green)
                        </Title>
                        <Text mt="md" size="13px" style={{ lineHeight: 1.5 }} c={'#1E1E1E'}>
                            Girls night out Festivals Casual hangouts Birthday celebration High-end formal events Off the shoulder Crop top Ruffled shoulder detail Elastic band Bottom Wide leg pants Smocked hips High waist Ruffle detail Handmade 100% African cotton wax Model is wearing a size medium Packaging What’s in the box? 1 Ashanti Ruffle Crop Top 1 pair of Ashanti Ruffle Pants 1 Matching Headwrap
                        </Text>
                        <Flex justify={'space-between'} align={'center'}>
                            <Title order={3} mt="md" size="lg" weight={500} style={{ color: '#0D1759' }}>
                                Release date
                            </Title>
                            <Title size="lg" weight={500} style={{ color: '#0D1759' }}>
                                03-08-2024
                            </Title>
                        </Flex>
                    </Stack>
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default NewCollection;
