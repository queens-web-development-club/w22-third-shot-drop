import React from 'react';

import {
	Flex,
	Box,
	Heading,
	FormControl,
	FormLabel,
	Input,
	Button,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	Stack,
	RadioGroup,
	Radio
  } from '@chakra-ui/react';

const SignUpForm = () => {
  return (
	<Flex marginTop='30px' flexDirection='column' align="center">
        <Box textAlign="left">
          <Heading>Clinic Reservations</Heading>
        </Box>
		<form action="">
			<Stack className="sign-up-fields" alignItems="left">
			<RadioGroup my={6} marginLeft="3em">
					<Stack>
						<Radio value='1'>Brockville Ontario - New Player Intro - 125 Stewart St, STINGERS.</Radio>
						<Radio value='2'>Brockville Ontario - New Player Intro - 125 Stewart St, STINGERS.</Radio>
						<Radio value='3'>Brockville Ontario - New Player Intro - 125 Stewart St, STINGERS.</Radio>
					</Stack>
				</RadioGroup>
				<Stack spacing={5} my={6} textAlign="left">
					<FormControl>
					<FormLabel>First Name</FormLabel>
					<Input type='text' isRequired={true} placeholder="John" />
					</FormControl>
							<FormControl>
					<FormLabel>Last Name</FormLabel>
					<Input type='text' isRequired={true} placeholder="Smith" />
					</FormControl>
							<FormControl>
					<FormLabel>Email</FormLabel>
					<Input type='text' isRequired={true} type="email" placeholder="name@email.com" />
					</FormControl>
					<FormControl mt={6}>
					<FormLabel>Number of Additional Guests</FormLabel>
							<NumberInput defaultValue={0} min={0}>
								<NumberInputField/>
								<NumberInputStepper>
									<NumberIncrementStepper />
									<NumberDecrementStepper />
								</NumberInputStepper>
								</NumberInput>
					</FormControl>
					<Button width="full" mt={4} type="submit">
					Submit
					</Button>
				</Stack>
			</Stack>
		</form>
		<Flex textAlign={"left"} padding="30px 30%;" className="sign-up-warning">
			<p>No refund if guests are cancelling less than 48 hours from the start time. Refunds issued if Third Drop Shot is concerned about weather. We offer to rebook if we can accommodate guests. $1 admin fee for Refunds</p>
		</Flex>
    </Flex>
  );
};

export default SignUpForm;
