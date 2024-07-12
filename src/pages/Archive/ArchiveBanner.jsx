import { Container, Grid, Image, Text, Title, Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';

const ArchiveBanner = () => {
    const smallScreen = useMediaQuery(`(max-width: 768px)`);
    const tabletScreen = useMediaQuery(`(max-width: 850px)`);
    const laptopScreen = useMediaQuery(`(max-width: 1224px)`);

    const ref1 = useRef(null);

    const isInView1 = useInView(ref1, { once: true });

    const firstAnimationProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 2.5, delay: 0.5 }
    };

    const secondAnimationProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 2.5, delay: 1 }
    };

    return (
        <Container fluid h={'auto'} style={{ backgroundColor: '#0D1759', color: '#fff' }} py={smallScreen ? '20px' : '5px'}>
            <Container style={{ backgroundColor: '#0D1759', color: '#fff', display: 'flex', alignItems: 'center' }} maw={'1180px'}>
                <Grid style={{ width: '100%' }} gutter="xs">
                    <Grid.Col span={smallScreen ? 12 : 7} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: smallScreen ? '20px' : '40px' }}>
                        <motion.div ref={ref1}
                            {...firstAnimationProps}
                            animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}>
                            <Title order={1} style={{ color: '#fff', marginBottom: '20px', fontSize: tabletScreen ? '1.5rem' : '2rem' }}>Unlock Your Style with 20% Off!</Title>
                        </motion.div>
                        <motion.div ref={ref1}
                            {...secondAnimationProps}
                            animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}>
                            <Text size={tabletScreen ? 'sm' : 'md'} style={{ marginBottom: '20px', color: '#e9f3ffcc' }}>
                                {
                                    smallScreen
                                        ? 'Use code NOMA20 at checkout to enjoy 20% off your first purchase. Hurry, this offer is for a limited time only!'
                                        : 'Noma Couture Creations is giving out an exclusive discount. Use code NOMA20 at checkout to enjoy 20% off your first purchase. Hurry, this offer is for a limited time only!'
                                }
                            </Text>
                        </motion.div>
                        <motion.div ref={ref1}
                            {...firstAnimationProps}
                            animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}>
                            <Button radius="md" style={{ backgroundColor: '#fff', color: '#0D1759', alignSelf: 'start' }} w={'50%'}>
                                <Text size='sm'>Get Offer</Text>
                            </Button>
                        </motion.div>
                    </Grid.Col>
                    <Grid.Col span={smallScreen ? 5 : 5} style={{ display: smallScreen ? 'none' : 'flex', justifyContent: smallScreen ? 'center' : 'center', padding: '10px' }}>
                        <Image src={'https://res.cloudinary.com/dg8os5pul/image/upload/v1720633274/image_19_b2jhda.png'} alt="banner" style={{ objectFit: 'contain', height: smallScreen ? '200px' : '100%' }} />
                    </Grid.Col>
                </Grid>
            </Container>
        </Container>
    );
}

export default ArchiveBanner;
