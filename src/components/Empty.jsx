import { Button, Center, Container, Image, Stack, Text, Title } from '@mantine/core'
import PropTypes from 'prop-types'

const Empty = ({ title = 'Oops, No Products In Cart', button }) => {
    return (
        <Container fluid>
            <Center h={300}>
                <Stack>
                    <Center>
                        <Image w={100} src={'https://res.cloudinary.com/dg8os5pul/image/upload/v1720552732/unnamed_1_yblyjq.png'} alt="No Products Found" />
                    </Center>
                    <Title order={3} mt={20}>{title}</Title>
                    {
                        button && <Button onClick={() => window.location.href = '/products'} mt={5}>
                            <Text size='xs'>Continue Shopping</Text>
                        </Button>
                    }
                </Stack>
            </Center>
        </Container>
    )
}

Empty.propTypes = {
    title: PropTypes.string.isRequired,
    button: PropTypes.string
}

export default Empty