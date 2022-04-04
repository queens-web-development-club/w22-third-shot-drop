import React, { useState } from 'react';

import {
	Flex,
	Box,
	Heading,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	Button,
	Stack,
	Textarea,
	useToast,
	Center
} from '@chakra-ui/react';




const ContactUs = () => {

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phoneNum, setPhoneNum] = useState('')
	const [message, setMessage] = useState('')

	const toast = useToast()
	const idSuccess = 'success-toast'
	const idError = 'error-toast'

	const handleSubmit = async e => {
		e.preventDefault()

		try {
			const userData = {
				name,
				email,
				phoneNum,
				message
			}

			const response = await fetch('http://localhost:5000/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(userData)
			})
			if (!toast.isActive(idSuccess)) {
				toast({
					title: "Message Sent!",
					description: "We'll contact you soon.",
					status: "success",
					duration: 2000,
					isClosable: true,
					id: idSuccess
				})
			}
		}
		catch (error) {
			if (!toast.isActive(idError)) {
				toast({
					title: "Message failed to send!",
					description: "Unable to send the message, please try again later or call us",
					status: "error",
					duration: 4000,
					isClosable: true,
					id: idError
				})
			}
		}
		// setName('')
		// setEmail('')
		// setPhoneNum('')
		// setMessage('')
	}

	return (
		<>
			<Flex marginTop='30px' flexDirection='column' alignItems="center">
				<Heading>Contact Us</Heading>

				<form onSubmit={handleSubmit}>
					<Stack>

						<Stack spacing={5} my={6}>
							<FormControl>
								<FormLabel htmlFor='name' >Name</FormLabel>
								<Input id='name' type='text' isRequired={true} placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
							</FormControl>

							<FormControl>
								<FormLabel htmlFor='email'>Email</FormLabel>
								<Input id='email' isRequired={true} type="email" placeholder="name@email.com" value={email} onChange={e => setEmail(e.target.value)} />
							</FormControl>

							<FormControl>
								<FormLabel htmlFor='phone-number'>Phone Number</FormLabel>
								<InputGroup>
									<Input id='phone-number' isRequired={true} type='tel' placeholder='Phone number' value={phoneNum} onChange={e => setPhoneNum(e.target.value)} />
								</InputGroup>
							</FormControl>

							<FormControl>
								<FormLabel htmlFor='message'>Message</FormLabel>
								<Textarea id='message' isRequired={true} placeholder="You're message" value={message} onChange={e => setMessage(e.target.value)} />
							</FormControl>

							<Button width="full" mt={4} type="submit">
								Submit
							</Button>

						</Stack>
					</Stack>
				</form>

			</Flex>
		</>
	)


}

export default ContactUs