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
  } from '@chakra-ui/react';

const SignUpForm = () => {
  return (
	<Flex width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Box textAlign="left">
          <Heading>Clinic Reservations</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input placeholder="John" />
            </FormControl>
			<FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Smith" />
            </FormControl>
			<FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="name@email.com" />
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
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default SignUpForm;
