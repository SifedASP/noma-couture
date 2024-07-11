import { useState } from 'react';
import { Container, SimpleGrid, Center, ColorSwatch } from '@mantine/core';
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
            <SimpleGrid cols={3}>
                {colors?.map((color, index) => (
                    <Center key={index} onClick={() => handleColorClick(color)} style={{ cursor: 'pointer', border: '1px solid #1E1E1E', padding: '15px', width: '60px', height: '25px', borderRadius: '5px' }}>
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
                ))}
            </SimpleGrid>
        </Container>
    );
};



export default ClickableColorSwatch;
