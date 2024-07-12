import { Group, Text, Container, ActionIcon } from '@mantine/core';
import { IconPlus, IconMinus } from '@tabler/icons-react';
import PropTypes from 'prop-types';

const Counter = ({ count, setCount }) => {

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <Container style={{ backgroundColor: '#d8eaff', padding: '5px', borderRadius: '10px', display: 'inline-flex' }}>
            <Group spacing="sm">
                <ActionIcon size="md" style={{ backgroundColor: '#0D1759', padding: '5px' }} onClick={increment}>
                    <IconPlus size={16} />
                </ActionIcon>
                <Text size="md" style={{ alignSelf: 'center' }}>{count}</Text>
                <ActionIcon size="md" style={{ backgroundColor: '#0D1759', padding: '5px' }} onClick={decrement}>
                    <IconMinus size={16} />
                </ActionIcon>
            </Group>
        </Container>
    );
};

Counter.propTypes = {
    count: PropTypes.number.isRequired,
    setCount: PropTypes.func.isRequired,
};

export default Counter;
