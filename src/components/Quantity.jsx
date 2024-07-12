import { Group, Text, Container, ActionIcon } from '@mantine/core';
import { IconPlus, IconMinus } from '@tabler/icons-react';
import PropTypes from 'prop-types';

const Quantity = ({ count, setCount }) => {


    return (
        <div className='counter'>
            <Container fluid style={{ backgroundColor: '#d8eaff', padding: '5px', borderRadius: '10px', display: 'inline-flex' }} ml={0}>
                <Group spacing="sm">
                    <ActionIcon size="sm" style={{ backgroundColor: '#0D1759', padding: '5px' }} onClick={() => setCount(count + 1)}>
                        <IconPlus size={16} />
                    </ActionIcon>
                    <Text size="xs" style={{ alignSelf: 'center' }}>{count}</Text>
                    <ActionIcon size="sm" style={{ backgroundColor: '#0D1759', padding: '5px' }} onClick={() => setCount(count - 1)}>
                        <IconMinus size={16} />
                    </ActionIcon>
                </Group>
            </Container>
        </div>
    );
};

Quantity.propTypes = {
    count: PropTypes.number.isRequired,
    setCount: PropTypes.func.isRequired,
};

export default Quantity;
