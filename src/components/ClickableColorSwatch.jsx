import { useState } from 'react';
import { Container, SimpleGrid, Center, ColorSwatch, Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const ClickableColorSwatch = ({ colors, onChange }) => {
    const [selectedColor, setSelectedColor] = useState(null);

    const handleColorClick = (color) => {
        setSelectedColor(color);
        if (onChange) {
            onChange(color);
        }
    };

    const smallScreen = useMediaQuery('(max-width: 810px)');

    return (
        <Container bg={smallScreen ? '#fff' : ''}>
            <Grid>
                {colors?.map((color, index) => (
                    <Grid.Col span={4} key={index}>
                        <Center  onClick={() => handleColorClick(color)} style={{ cursor: 'pointer', border: '1px solid #1E1E1E', padding: '15px', width: '50px', height: '25px', borderRadius: '5px' }}>
                            <ColorSwatch
                                color={color}
                                size={20}
                                style={{
                                    cursor: 'pointer',
                                    border: selectedColor === color ? '2px solid #000' : '2px solid transparent',
                                    boxShadow: selectedColor === color ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none',
                                }}
                            />
                        </Center>
                    </Grid.Col>
                ))}
            </Grid>
        </Container>
    );
};



export default ClickableColorSwatch;
