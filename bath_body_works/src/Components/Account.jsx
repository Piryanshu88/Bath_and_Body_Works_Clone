import {
  Box,
  Text,
  Image,
  useToast,
  Stack,
  Flex,
  InputGroup,
  Button,
  InputRightElement,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  FormControl,
  Checkbox,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
function Account() {
  const [input, setInput] = useState("");
  const toast = useToast();
  const statuses = ['success', 'error']
  const handleInputChange = (e) => setInput(e.target.value);
  const [show, setShow] = useState(false);
  const isError = input === "";

  const handleClick = () => setShow(!show);
  return (
    <Stack w="65%" m="auto">
      <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw67bc4699/images/banners/sign-in_d.png?yocs=s_" />
      <Box borderBottom="2px solid" p="2">
        <Text fontSize="2xl">Sign In or Sign Up</Text>
      </Box>
      <Flex justifyContent="space-between" gap="6">
        <Flex
          flexDirection="column"
          justifyContent=""
          alignItems="center"
          lineHeight="3rem"
          p="3"
        >
          <Text fontSize="xl">SIGN IN</Text>
          <Text fontSize="s">
            If you already have an account with us, sign in below
          </Text>

          <FormControl isInvalid={isError} lineHeight="2rem">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              borderRadius="0"
              value={input}
              onChange={handleInputChange}
            />
            {!isError ? (
              <FormHelperText>
                Enter the email you'd like to receive the best offers.
              </FormHelperText>
            ) : (
              <FormErrorMessage>
                Please enter your email address
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <InputGroup size="md">
              <Input
                // pr='4.5rem'
                borderRadius="0"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Flex
            w="100%"
            justifyContent="space-between"
            alignItems="center"
            mt="3"
          >
            <Text as="u" color="gray.500">
              Forget Password?
            </Text>
            <Checkbox color="gray.500">Remember me</Checkbox>
          </Flex>
          <Text fontSize="s" as="u" color="gray.500">
            {" "}
            Privacy Policy
          </Text>
          <Button
            background="blackAlpha.900"
            color="white"
            borderRadius="0"
            px="6"
            mt="4"
            onClick={() =>
              toast({
                title:input==""? "Login failed" :"Login Successfully.",
                description:input==""?"Please fill correct details": "Have a great day.",
                status: "success",
                duration: 1400,
                isClosable: true,
                position: 'top',
                status:input===""?"error":"success"
              })
            }
          >
            SIGN IN
          </Button>
        </Flex>
        <Divider orientation="vertical" h="500" mx="3" />
        <Flex
          flexDirection="column"
          justifyContent=""
          alignItems="center"
          lineHeight="3rem"
          p="3"
        >
          <Text fontSize="xl">SIGN UP</Text>
          <Text fontSize="s">
            Create an account to access the best of your favorite store
          </Text>
          <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0f47b7b9/images/loyalty/boc-launch-prospects_lacb_0.jpg?yocs=s_" />
          <Button
            background="blackAlpha.900"
            color="white"
            borderRadius="0"
            px="6"
            mt="4"
          >
            Create an Account
          </Button>
        </Flex>
      </Flex>
    </Stack>
  );
}

export default Account;
