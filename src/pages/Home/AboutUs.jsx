import { Grid, Text, Button, Container, Image, Title, Stack, Center } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconChevronsRight } from '@tabler/icons-react';
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';

const AboutUs = () => {
    const ref1 = useRef(null);

    const isInView1 = useInView(ref1, { once: true });

    const firstAnimationProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 2.5, delay: 0.5 }
    };

    const smallScreen = useMediaQuery('(max-width: 768px)');

    return (
        <Container mt={"70px"} mb={"xl"} id='about' maw={'1180px'}>
            <Grid gutter="md" align="center">
                <Grid.Col span={smallScreen ? 12 : 6}>
                    <Text size="lg" weight={500} style={{ color: '#0D1759' }}>
                        About Us
                    </Text>
                    <Stack w={'100%'}>
                        <Title order={1} style={{ color: '#0D1759' }}>
                            Elegance in
                        </Title>
                        <Title order={1} style={{ color: '#0D1759' }} ta={'center'}>
                            Every Stitch
                        </Title>
                    </Stack>
                    <Text mt="md" size="13px" c={'#1E1E1E'} ta={'justify'} lh={1.5}>
                        Where African heritage meets modern couture. Our fashion house
                        celebrates the rich tapestry of African cultures through exquisite
                        designs that blend traditional craftsmanship with contemporary
                        flair. From vibrant Ankara prints to hand-woven textiles, each piece
                        at Zuri Couture Creations embodies the essence of African elegance
                        and timeless beauty. Discover our collection and adorn yourself in
                        the spirit of Africa&lsquo;s diverse and captivating fashion landscape.
                    </Text>
                    {
                        smallScreen ? null :
                            (
                                <Button
                                    mt="md"
                                    size="md"
                                    style={{ backgroundColor: '#0D1759' }}
                                    radius={"12px"}
                                    w={'45%'}
                                    rightSection={<IconChevronsRight size={12} />}>
                                    <Text c={'white'} size='12px'>See more</Text>
                                </Button>
                            )
                    }
                </Grid.Col>
                <Grid.Col span={smallScreen ? 12 : 6}>
                    <motion.div ref={ref1}
                        {...firstAnimationProps}
                        animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}>
                        <Image
                            src="https://res.cloudinary.com/dg8os5pul/image/upload/v1720562218/image_14_lheurr.png"
                            alt="About Us Image"
                            radius="md"
                        />
                    </motion.div>
                </Grid.Col>
            </Grid>
            {
                !smallScreen ? null :
                    (
                        <Center>
                            <Button
                                mt="md"
                                size="lg"
                                style={{ backgroundColor: '#0D1759' }}
                                radius={"12px"}
                                w={'55%'}
                                rightSection={<IconChevronsRight size={12} />}>
                                <Text c={'white'} size='12px'>See more</Text>
                            </Button>
                        </Center>
                    )
            }
        </Container>
    );
};

export default AboutUs;
