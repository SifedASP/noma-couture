// src/pages/Home.jsx
import { Container, Title, Center, Text } from '@mantine/core';
import BannerGrid from './Home/BannerGrid';
import AboutUs from './Home/AboutUs';
import NewCollection from './Home/NewCollection';
import ProductCarousel from './Home/ProductCarousel';
import NewArrivals from './Home/NewArrivals';
import { useMediaQuery } from '@mantine/hooks';
import TestimonialsSection from './Home/TestimonialSection';

const Home = () => {

    const smallScreen = useMediaQuery('(max-width: 768px)');

    const tabletScreen = useMediaQuery('(max-width: 1024px)');

    return (
        <Container fluid w={'100vw'} p={0}>
            <Center pt={'60px'} pb={'10px'}>
                <Title size={smallScreen ? '30px' : tabletScreen ? '40px' : '50px'} c={'#0D1759'} lts={2} ta={'center'}>Noma Couture Creations</Title>
            </Center>
            <Center maw={'840px'} mx="auto" pb={'30px'} px={smallScreen ? '20px' : '0'}>
                <Text ta={'center'} fw={300} size='14px' lh={1.5}>
                    Welcome to Noma Couture Creations, where African heritage meets modern couture. Our fashion house celebrates the rich tapestry of African cultures through exquisite designs that blend traditional craftsmanship with contemporary flair.
                </Text>
            </Center>

            <BannerGrid />

            <AboutUs />

            <NewCollection />

            <ProductCarousel />

            <NewArrivals />

            <TestimonialsSection />
            
        </Container>
    );
};

export default Home;
