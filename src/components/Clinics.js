import { useState } from "react";
import {
	Flex,
	Box,
	Heading,
	FormControl,
	FormLabel,
	Input,
	Button,
	Stack,
	RadioGroup,
	Radio,
  useToast
} from '@chakra-ui/react';

const SignUpForm = () => {
  const [formValues, setformValues] = useState({});
  const toast = useToast()

  function onInputChange(e) {
    const { name, value } = e.target

    setformValues({
      ...formValues,
      [name]: value,
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const { firstName, lastName, email, guestCount, level } = formValues
    console.log(firstName, lastName, email, guestCount, level)
    const response = await fetch('http://localhost:5000/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstName, lastName, email, guestCount, level})
    })

    let data = await response.json();
    if (data.status === 'success') {
      toast({
        title: 'Success!',
        description: 'Third Shot Drop has been alerted regarding your booking!',
        status: 'success',
        duration: 5000,
        isClosable: false
      })
    } else {
      toast({
        title: 'An unexpected error occurred!',
        description: 'Please contact the owner!',
        status: 'error',
        duration: 5000,
        isClosable: false
      })
    }
  }
  return (
	<Flex marginTop='30px' flexDirection='column' align="center">
        <Box textAlign="left">
          <Heading>Clinic Reservations</Heading>
        </Box>
		<form action="submit" onSubmit={handleSubmit} autoComplete="off">
      <FormControl>
        <Stack alignItems="left">
          <RadioGroup my={6} name="level">
            <Stack>
              <Radio value='1' onChange={onInputChange}>Brockville Ontario - New Player Intro - 125 Stewart St - 9am</Radio>
              <Radio value='2' onChange={onInputChange}>Brockville Ontario - Up Your Game - 125 Stewart St - 11:30am</Radio>
            </Stack>
          </RadioGroup>
          <Stack spacing={5} my={6} textAlign="left">
            <FormLabel>First Name</FormLabel>
            <Input name="firstName" type='text' placeholder="John" defaultValue={formValues.firstName} onChange={onInputChange} />

            <FormLabel>Last Name</FormLabel>
            <Input name="lastName" type='text' placeholder="Doe" defaultValue={formValues.lastName} onChange={onInputChange} />

            <FormLabel>Email Address</FormLabel>
            <Input name="email" type='email' placeholder="john@aol.com" defaultValue={formValues.email} onChange={onInputChange} />

            <FormLabel># of additional guests</FormLabel>
            <Input name="guestCount" type='number' placeholder="1" defaultValue={formValues.guestCount} onChange={onInputChange} />

            <Button width="full" mt={4} type="submit">Book Now</Button>
          </Stack>
        </Stack>
      </FormControl>
		</form>
		<Flex textAlign={"left"} padding="30px 30%;" className="sign-up-warning">
			<p>No refund if guests are cancelling less than 48 hours from the start time. Refunds issued if Third Drop Shot is concerned about weather. We offer to rebook if we can accommodate guests. $1 admin fee for Refunds</p>
		</Flex>
    </Flex>
  );
};

export default SignUpForm;