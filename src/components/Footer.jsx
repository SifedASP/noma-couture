import { Container, SimpleGrid, Text, Title, Group, Anchor, Flex, Divider } from '@mantine/core';
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

const Footer = () => {
    const smallScreen = useMediaQuery('(max-width: 768px)');

    return (
        <div style={{ backgroundColor: '#0D1759', color: '#fff', padding: '40px 0' }}>
            <Container bg={'#0D1759'}>
                <Flex direction={smallScreen ? 'column' : 'row'} justify="space-between" align="center">
                    <Container bg={'#0D1759'} style={{ padding: '0 20px' }} w={smallScreen ? '100%' : '40%'}>
                        <Group align="center" mb="md">
                            <div style={{ width: 50, height: 50, position: 'relative', backgroundColor: '#fff', clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: '#0D1759', fontWeight: 700, fontSize: 20 }}>N</Text>
                            </div>
                            <Title order={4} style={{ color: '#fff', marginLeft: smallScreen ? '10px' : '0' }}>Noma Couture Creations</Title>
                        </Group>
                        <Text size="xs" style={{ color: '#e9f3ffcc' }} lh={2}>
                            Welcome to Noma Couture Creations, where African heritage meets modern couture. Our fashion house celebrates the rich tapestry of African cultures through exquisite designs that blend traditional craftsmanship with contemporary flair.
                        </Text>
                    </Container>
                    <Container bg={'#0D1759'} w={smallScreen ? '100%' : '60%'} mt={smallScreen ? '20px' : '0'}>
                        <SimpleGrid cols={smallScreen ? 1 : 3}>
                            <div style={{ margin: '0 5px' }}>
                                <Title order={5} style={{ marginBottom: '10px', color: '#fff' }}>Contact Us</Title>
                                <Text size="xs" c={'#e9f3ffcc'} style={{overflowWrap: 'anywhere'}} maw={160}>nomacouture@gmail.com</Text>
                                <Text size="xs" c={'#e9f3ffcc'}>(+234) 70 878 9417</Text>
                            </div>
                            <div style={{ margin:  smallScreen ? '0 0' : '0 15px' }}>
                                <Title order={5} style={{ marginBottom: '10px', color: '#fff' }}>Our Company</Title>
                                <Anchor href="#" style={{ color: '#e9f3ffcc', display: 'block', marginBottom: '5px' }} size='xs'>About</Anchor>
                                <Anchor href="#" style={{ color: '#e9f3ffcc', display: 'block', marginBottom: '5px' }} size='xs'>Shop</Anchor>
                                <Anchor href="#" style={{ color: '#e9f3ffcc', display: 'block', marginBottom: '5px' }} size='xs'>Testimonials</Anchor>
                            </div>
                            <div>
                                <Title order={5} style={{ marginBottom: '10px', color: '#fff' }}>Legal</Title>
                                <Anchor href="#" style={{ color: '#e9f3ffcc', display: 'block', marginBottom: '5px' }} size='xs'>Terms and Conditions</Anchor>
                                <Anchor href="#" style={{ color: '#e9f3ffcc', display: 'block', marginBottom: '5px' }} size='xs'>Privacy</Anchor>
                            </div>
                        </SimpleGrid>
                    </Container>
                </Flex>
            </Container>
            <Divider my="sm" color={'#e1e1e1'} style={{ padding: '0 20px' }} />
            <Container bg={'#0D1759'} w={'100%'}>
                <Flex pt={'lg'} mt={'lg'} direction={smallScreen ? 'column' : 'row'} justify="space-between" align={'center'}>
                    <Text size="xs" align="center" style={{ color: '#e9f3ffcc' }}>Copyrights©2024 Noma Couture Creations. All rights reserved</Text>
                    <Group position="center" mt="md">
                        <Anchor href="#" style={{ color: '#fff' }}>
                            <IconBrandFacebook size={24} />
                        </Anchor>
                        <Anchor href="#" style={{ color: '#fff' }}>
                            <IconBrandInstagram size={24} />
                        </Anchor>
                        <Anchor href="#" style={{ color: '#fff' }}>
                            <IconBrandLinkedin size={24} />
                        </Anchor>
                        <Anchor href="#" style={{ color: '#fff' }}>
                            <IconBrandTwitter size={24} />
                        </Anchor>
                    </Group>
                </Flex>
            </Container>
        </div>
    );
};

export default Footer;
