import { Stepper, rem } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import PropTypes from 'prop-types';

function StyledStepper(props) {
    return (
        <Stepper
            styles={{
                step: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: rem(5),
                },
                separator: {
                    backgroundColor: 'rgba(7, 4, 43, 1)',
                },
            }}
            {...props}
        />
    );
}

function StyledStepperMobile(props) {
    return (
        <Stepper
            styles={{
                separator: {
                    backgroundColor: 'rgba(7, 4, 43, 1)',
                },
            }}
            {...props}
        />
    );
}

const CheckoutStepper = ({ activeStep, setActiveStep }) => {

    const smallScreen = useMediaQuery('(max-width: 520px)');

    return (
        <>
            {
                smallScreen ?
                    <StyledStepperMobile allowNextStepsSelect={false}  orientation="vertical" active={activeStep} onStepClick={setActiveStep} mt="xl" mb="mb" color={'rgba(7, 4, 43, 1)'} variant='filled'>
                        <Stepper.Step label="Billing Address" />
                        <Stepper.Step label="Payment" />
                        <Stepper.Step label="Confirmation" />
                    </StyledStepperMobile>
                    :
                    <StyledStepper allowNextStepsSelect={false} active={activeStep} onStepClick={setActiveStep} mt="xl" mb="mb" color={'rgba(7, 4, 43, 1)'} variant='filled'>
                        <Stepper.Step label="Billing Address" />
                        <Stepper.Step label="Payment" />
                        <Stepper.Step label="Confirmation" />
                    </StyledStepper>
            }
        </>
    );
};

CheckoutStepper.propTypes = {
    activeStep: PropTypes.number.isRequired,
    setActiveStep: PropTypes.func.isRequired,
};



export default CheckoutStepper;
