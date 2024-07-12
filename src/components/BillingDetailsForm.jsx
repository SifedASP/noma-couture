import { TextInput, Select, Checkbox, Container, Grid, Paper } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const BillingDetailsForm = ({ form, isShipping }) => {

    const smallScreen = useMediaQuery('(max-width: 768px)');

    return (
        <Container bg={smallScreen ? '#e9f3ff' : '#fff'} p={smallScreen ? 0 : 20}>
            <form>
                <Paper bg={smallScreen ? '#e9f3ff' : '#fff'}>
                    <Grid mb={20}>
                        <Grid.Col span={6}>
                            <TextInput label="First Name" size='md' placeholder="e.g. Jane" {...form.getInputProps('firstName')} />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <TextInput label="Last Name" size='md' placeholder="e.g. Doe" {...form.getInputProps('lastName')} />
                        </Grid.Col>
                    </Grid>
                    <TextInput type="email" mb={20} size='md' label="Email" placeholder="e.g. janedoe@gmail.com" {...form.getInputProps('email')} />
                    <Grid mb={20}>
                        <Grid.Col span={6}>
                            <Select
                                label="Country"
                                placeholder="Country"
                                data={['Country 1', 'Country 2']}
                                size='md'
                                {...form.getInputProps('country')}
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <TextInput label="Phone number" size='md' placeholder="e.g. 1234567890" {...form.getInputProps('phoneNumber')} />
                        </Grid.Col>
                    </Grid>
                    <TextInput mb={20} label="Address" size='md' placeholder="e.g. 123 Main St" {...form.getInputProps('address')} />
                    <Grid mb={20}>
                        <Grid.Col span={6}>
                            <TextInput label="Town/city" size='md' placeholder="City" {...form.getInputProps('city')} />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <TextInput label="Postcode" size='md' placeholder="e.g. 12345" {...form.getInputProps('postcode')} />
                        </Grid.Col>
                    </Grid>
                </Paper>
                {
                    !isShipping && <Checkbox mt={20} variant='filled' label="Different shipping details" {...form.getInputProps('differentShipping', { type: 'checkbox' })} />
                }
            </form>
        </Container>
    );
};

export default BillingDetailsForm;
