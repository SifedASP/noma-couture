import { Button, Center, Container, Flex, Grid, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconChevronsRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BannerGrid = () => {
    const smallScreen = useMediaQuery('(max-width: 668px)');

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

    const thirdAnimationProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 2.5, delay: 1.5 }
    };

    const fourthAnimationProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 2.5, delay: 2 }
    };

    return (
        <Container mt={"md"} maw={'1180px'}>
            <Grid gutter="md">
                <Grid.Col span={smallScreen ? 12 : 5}>
                    <motion.div {...firstAnimationProps}>
                        <Image
                            src="https://res.cloudinary.com/dg8os5pul/image/upload/v1720555660/unnamed_2_xptevm.png"
                            alt="Image 1"
                            radius="md"
                        />
                    </motion.div>
                </Grid.Col>
                {smallScreen ? null : (
                    <Grid.Col span={3}>
                        <motion.div {...secondAnimationProps}>
                            <Image
                                src="https://res.cloudinary.com/dg8os5pul/image/upload/v1720555657/image_11_gm6x5q.png"
                                alt="Image 2"
                                radius="md"
                            />
                        </motion.div>
                        <motion.div {...thirdAnimationProps} transition={{ delay: 0.2, duration: 0.5 }}>
                            <Image
                                src="https://res.cloudinary.com/dg8os5pul/image/upload/v1720555659/image_12_fcvcqd.png"
                                alt="Image 3"
                                radius="md"
                                mt="md"
                            />
                        </motion.div>
                    </Grid.Col>
                )}
                {smallScreen ? null : (
                    <Grid.Col span={4}>
                        <Flex pos={"relative"}>
                            <motion.div {...fourthAnimationProps}>
                                <Image
                                    src="https://res.cloudinary.com/dg8os5pul/image/upload/v1720555656/image_13_uk6kvc.png"
                                    alt="Image 4"
                                    radius="md"
                                />
                            </motion.div>
                            <Flex align={"center"} bg={"#e9f3ff"} justify={"center"} pos={"absolute"} style={{ bottom: 0, right: 0, borderRadius: "20px 0 0 0" }} w={"140px"} p={20} >
                                <Link to="/products">
                                    <Button radius={"12px"} rightSection={<IconChevronsRight size={12} />}>
                                        <Text c={'white'} size='12px'>Explore</Text>
                                    </Button>
                                </Link>
                            </Flex>
                        </Flex>
                    </Grid.Col>
                )}
            </Grid>

            {smallScreen ? (
                <Center mt={"md"}>
                    <Link to="/products" style={{ width: "60%", textDecoration: "none" }}>
                        <Button size="lg" radius={"12px"} rightSection={<IconChevronsRight size={15} />} fullWidth>
                            <Text c={'white'} size='13px'>Explore</Text>
                        </Button>
                    </Link>
                </Center>
            ) : null}
        </Container>
    );
};

export default BannerGrid;
