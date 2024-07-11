import { Container, Title, Grid, Flex, Text, ThemeIcon, Accordion, Checkbox, UnstyledButton, Stack, Center, Image, Button, Drawer } from '@mantine/core';
import { products } from '../data/data';
import ProductCard from '../components/ProductCard';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import ArchiveBanner from './Archive/ArchiveBanner';
import { useState } from 'react';
import ClickableColorSwatch from '../components/ClickableColorSwatch';
import { IconAdjustmentsHorizontal } from '@tabler/icons-react';

const colors = [
    '#000',
    '#fff',
    '#0319B1',
    '#E80B0B',
    '#FAD40B',
    '#28DA19',
    '#9D10F3',
    '#F2148C',
    '#E5820D',
];

const ProductArchive = () => {

    const smallScreen = useMediaQuery('(max-width: 810px)');

    const tabletScreen = useMediaQuery('(max-width: 1024px)');

    const [opened, { open, close }] = useDisclosure(false);

    const [value, setValue] = useState([]);

    const [category, setCategory] = useState('Gowns');

    const handleColorChange = (color) => {
        console.log('Selected color:', color);
    };

    const categoryProduct = products.filter(product => product.category === category);

    const handleCategory = (category) => {
        setCategory(category);
        if (smallScreen) {
            close();
        }
    }


    return (
        <div>
            <ArchiveBanner />
            <Container fluid >

                <Grid>

                    {
                        !smallScreen && (
                            <Grid.Col span={smallScreen ? 12 : tabletScreen ? 4 : 3} style={{ borderRight: '1px solid #1E1E1ECC' }}>

                                <Container m={0} py={'xl'} style={{ borderBottom: '1px solid #1E1E1ECC' }}>
                                    <Title order={3}>Category</Title>

                                    <Container>
                                        <Stack align={'left'} gap={'xs'} mt={'xs'}>
                                            <UnstyledButton variant='subtle' w={'fit-content'} onClick={() => setCategory('Top')}>
                                                <Text fw={category === 'Top' ? 'bold' : ''}>Top</Text>
                                            </UnstyledButton>
                                            <UnstyledButton variant='subtle' w={'fit-content'} onClick={() => setCategory('Bottom')}>
                                                <Text fw={category === 'Bottom' ? 'bold' : ''}>Bottom</Text>
                                            </UnstyledButton>
                                            <UnstyledButton variant='subtle' w={'fit-content'} onClick={() => setCategory('Gowns')}>
                                                <Text fw={category === 'Gowns' ? 'bold' : ''}>Gowns</Text>
                                            </UnstyledButton>
                                            <UnstyledButton variant='subtle' w={'fit-content'} onClick={() => setCategory('Two piece')}>
                                                <Text fw={category === 'Two piece' ? 'bold' : ''}>Two piece</Text>
                                            </UnstyledButton>
                                            <UnstyledButton variant='subtle' w={'fit-content'} onClick={() => setCategory('Suits')}>
                                                <Text fw={category === 'Suits' ? 'bold' : ''}>Suits</Text>
                                            </UnstyledButton>
                                            <UnstyledButton variant='subtle' w={'fit-content'} onClick={() => setCategory('Accessories')}>
                                                <Text fw={category === 'Accessories' ? 'bold' : ''}>Accessories</Text>
                                            </UnstyledButton>
                                        </Stack>
                                    </Container>
                                </Container>

                                <Container py={'xl'}>
                                    <Title order={3}>Filter by:</Title>

                                    <Accordion variant='filled' bg={'#e9f3ff'} multiple defaultValue={['type', 'size', 'Colour', 'price']}>
                                        <Accordion.Item value={'type'}>
                                            <Accordion.Control bg={'#e9f3ff'}>
                                                <Title order={4}>Type</Title>
                                            </Accordion.Control>
                                            <Accordion.Panel bg={'#e9f3ff'}>
                                                <Container>
                                                    <Checkbox.Group value={value} onChange={setValue}>
                                                        <Checkbox value="plain" label="Plain" variant='outline' mb={10} color="rgba(25, 19, 46, 1)" />
                                                        <Checkbox value="pattern" label="Pattern" variant='outline' color="rgba(25, 19, 46, 1)" />
                                                    </Checkbox.Group>
                                                </Container>

                                            </Accordion.Panel>
                                        </Accordion.Item>

                                        <Accordion.Item value={'size'}>
                                            <Accordion.Control bg={'#e9f3ff'}>
                                                <Title order={4}>Size</Title>
                                            </Accordion.Control>
                                            <Accordion.Panel bg={'#e9f3ff'}>
                                                <Container>
                                                    <Checkbox.Group value={value} onChange={setValue}>
                                                        <Checkbox value="small" label="Small" variant='outline' mb={10} color="rgba(25, 19, 46, 1)" />
                                                        <Checkbox value="medium" label="Medium" variant='outline' mb={10} color="rgba(25, 19, 46, 1)" />
                                                        <Checkbox value="large" label="Large" variant='outline' mb={10} color="rgba(25, 19, 46, 1)" />
                                                        <Checkbox value="extra-large" label="Extra Large" variant='outline' mb={10} color="rgba(25, 19, 46, 1)" />
                                                        <Checkbox value="custom" label="Custom" variant='outline' mb={10} color="rgba(25, 19, 46, 1)" />
                                                    </Checkbox.Group>
                                                </Container>
                                            </Accordion.Panel>
                                        </Accordion.Item>

                                        <Accordion.Item value={'Colour'}>
                                            <Accordion.Control bg={'#e9f3ff'}>
                                                <Title order={4}>Colour</Title>
                                            </Accordion.Control>
                                            <Accordion.Panel bg={'#e9f3ff'}>
                                                <ClickableColorSwatch colors={colors} onClick={handleColorChange} />
                                            </Accordion.Panel>
                                        </Accordion.Item>

                                        <Accordion.Item value={'price'}>
                                            <Accordion.Control bg={'#e9f3ff'}>
                                                <Title order={4}>Price</Title>
                                            </Accordion.Control>
                                            <Accordion.Panel bg={'#e9f3ff'}></Accordion.Panel>
                                        </Accordion.Item>
                                    </Accordion>
                                </Container>

                            </Grid.Col>
                        )
                    }

                    <Grid.Col span={smallScreen ? 12 : tabletScreen ? 8 : 9}>

                        <Flex py="md" style={{ textWrap: 'wrap' }}>
                            <Text size='xs'>Shop
                                <ThemeIcon size='xs' variant='subtle' px={20}>&gt;</ThemeIcon> <span>Category</span>
                                <ThemeIcon size='xs' variant='subtle' px={20}>&gt;</ThemeIcon> <span style={{ fontWeight: 'bold' }}>
                                    {category}
                                </span>
                            </Text>

                        </Flex>

                        {
                            smallScreen && (
                                <>

                                    <Flex justify={'space-between'} align={'center'} mb={'xl'} mt={'md'}>
                                        <Title order={1} >{category}</Title>
                                        <Button rightSection={<IconAdjustmentsHorizontal size={19} />} variant='light' bg={'#d8eaff'} onClick={open}>Filter</Button>
                                    </Flex>
                                    <Drawer opened={opened} onClose={close} title="Filters">
                                        <Grid.Col span={smallScreen ? 12 : tabletScreen ? 4 : 3} style={{ borderRight: '0' }}>

                                            <Container m={0} py={'xl'} bg={'#fff'} style={{ borderBottom: '1px solid #1E1E1ECC' }}>
                                                <Title order={3}>Category</Title>

                                                <Container bg={'#fff'}>
                                                    <Stack align={'left'} gap={'xs'} mt={'xs'}>
                                                        <UnstyledButton variant='subtle' w={'fit-content'} onClick={() => handleCategory('Top')}>
                                                            <Text fw={category === 'Top' ? 'bold' : ''}>Top</Text>
                                                        </UnstyledButton>
                                                        <UnstyledButton variant='subtle' w={'fit-content'} onClick={() => handleCategory('Bottom')}>
                                                            <Text fw={category === 'Bottom' ? 'bold' : ''}>Bottom</Text>
                                                        </UnstyledButton>
                                                        <UnstyledButton variant='subtle' w={'fit-content'} onClick={() => handleCategory('Gowns')}>
                                                            <Text fw={category === 'Gowns' ? 'bold' : ''}>Gowns</Text>
                                                        </UnstyledButton>
                                                        <UnstyledButton variant='subtle' w={'fit-content'} onClick={() => handleCategory('Two piece')}>
                                                            <Text fw={category === 'Two piece' ? 'bold' : ''}>Two piece</Text>
                                                        </UnstyledButton>
                                                        <UnstyledButton variant='subtle' w={'fit-content'} onClick={() => handleCategory('Suits')}>
                                                            <Text fw={category === 'Suits' ? 'bold' : ''}>Suits</Text>
                                                        </UnstyledButton>
                                                        <UnstyledButton variant='subtle' w={'fit-content'} onClick={() => handleCategory('Accessories')}>
                                                            <Text fw={category === 'Accessories' ? 'bold' : ''}>Accessories</Text>
                                                        </UnstyledButton>
                                                    </Stack>
                                                </Container>
                                            </Container>

                                            <Container py={'xl'} bg={'#fff'}>
                                                <Title order={3}>Filter by:</Title>

                                                <Accordion variant='filled' bg={'#fff'} multiple defaultValue={['type', 'size', 'Colour', 'price']}>
                                                    <Accordion.Item value={'type'}>
                                                        <Accordion.Control bg={'#fff'}>
                                                            <Title order={4}>Type</Title>
                                                        </Accordion.Control>
                                                        <Accordion.Panel bg={'#fff'}>
                                                            <Container bg={'#fff'}>
                                                                <Checkbox.Group value={value} onChange={setValue}>
                                                                    <Checkbox value="plain" label="Plain" variant='outline' mb={10} color="rgba(25, 19, 46, 1)" />
                                                                    <Checkbox value="pattern" label="Pattern" variant='outline' color="rgba(25, 19, 46, 1)" />
                                                                </Checkbox.Group>
                                                            </Container>

                                                        </Accordion.Panel>
                                                    </Accordion.Item>

                                                    <Accordion.Item value={'size'}>
                                                        <Accordion.Control bg={'#fff'}>
                                                            <Title order={4}>Size</Title>
                                                        </Accordion.Control>
                                                        <Accordion.Panel bg={'#fff'}>
                                                            <Container bg={'#fff'}>
                                                                <Checkbox.Group value={value} onChange={setValue}>
                                                                    <Checkbox value="small" label="Small" variant='outline' mb={10} color="rgba(25, 19, 46, 1)" />
                                                                    <Checkbox value="medium" label="Medium" variant='outline' mb={10} color="rgba(25, 19, 46, 1)" />
                                                                    <Checkbox value="large" label="Large" variant='outline' mb={10} color="rgba(25, 19, 46, 1)" />
                                                                    <Checkbox value="extra-large" label="Extra Large" variant='outline' mb={10} color="rgba(25, 19, 46, 1)" />
                                                                    <Checkbox value="custom" label="Custom" variant='outline' mb={10} color="rgba(25, 19, 46, 1)" />
                                                                </Checkbox.Group>
                                                            </Container>
                                                        </Accordion.Panel>
                                                    </Accordion.Item>

                                                    <Accordion.Item value={'Colour'}>
                                                        <Accordion.Control bg={'#fff'}>
                                                            <Title order={4}>Colour</Title>
                                                        </Accordion.Control>
                                                        <Accordion.Panel bg={'#fff'}>
                                                            <ClickableColorSwatch colors={colors} onClick={handleColorChange} />
                                                        </Accordion.Panel>
                                                    </Accordion.Item>

                                                    <Accordion.Item value={'price'}>
                                                        <Accordion.Control bg={'#fff'}>
                                                            <Title order={4}>Price</Title>
                                                        </Accordion.Control>
                                                        <Accordion.Panel bg={'#fff'}></Accordion.Panel>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </Container>

                                        </Grid.Col>
                                    </Drawer>

                                </>
                            )
                        }


                        {
                            categoryProduct < 1 ? <Container>
                                <Center h={300}>
                                    <Stack>
                                        <Center>
                                            <Image w={100} src={'https://res.cloudinary.com/dg8os5pul/image/upload/v1720552732/unnamed_1_yblyjq.png'} alt="No Products Found" />
                                        </Center>
                                        <Title order={3} mt={20}>Oops, No Product Found for {category}</Title>
                                    </Stack>
                                </Center>
                            </Container> : <Grid pb={'xl'}>
                                {categoryProduct.map((product) => (
                                    <Grid.Col key={product.id} span={smallScreen ? 12 : tabletScreen ? 6 : 4}>
                                        <ProductCard product={product} />
                                    </Grid.Col>
                                ))}
                            </Grid>
                        }
                    </Grid.Col>
                </Grid>

            </Container>
        </div>
    );
};

export default ProductArchive;
