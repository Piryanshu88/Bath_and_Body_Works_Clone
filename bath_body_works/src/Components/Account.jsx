import React from "react";

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
  useDisclosure,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
function Account() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { IsOpen, OnOpen, OnClose } = useDisclosure()
  const btnRef = React.useRef();
  const [input, setInput] = useState("");
  const toast = useToast();
  const statuses = ["success", "error"];
  const loginUser={
    email:"",
    password:""
  }
  const [loginuser,serloginuser]=React.useState(loginUser)
  const handleInputChange = (e) =>{
     setInput(e.target.value)
     serloginuser({...loginuser,[e.target.name]:e.target.value})
     console.log(loginuser)
     
    }
  const [show, setShow] = useState(false);
  const isError = input === "";

  // Create account 
const initSignup={
  name:"",
  email:"",
  password:"",
  confirmemail:""
}
const [user,setuser]=React.useState(initSignup)
let IsPassword=(user.password.split("").includes("@"||'#'||"$"||"%"||"^"||"&"||"*")&&user.password.split("").length>=8)
const handleChange=({target})=>{
  const {name,value}=target
  setuser({...user,[name]:value})
  console.log(user)
   IsPassword=(user.password.split("").includes("@"||'#'||"$"||"%"||"^"||"&"||"*")&&user.password.split("").length>=8)
   console.log(IsPassword)
}
const SaveData=()=>{
  if(user.name==""||user.email==""||user.password==""||user.confirmemail==""){
    alert('Fill the details ')
  }
  if((user.password.split("").includes("@"||'#'||"$"||"%"||"^"||"&"||"*")&&user.password.split("").length>=8)){
    localStorage.setItem('users',JSON.stringify(user))
  }
  
}
let LoginData=JSON.parse(localStorage.getItem('users'))

const {name,email,password,confirmemail}=initSignup
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
              name='email'
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
                name="password"
                onChange={handleInputChange}
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
                title: LoginData.email==loginuser.email&&LoginData.password==loginuser.password  ?  "Login Successfully.":"Login failed" ,
                description:
                LoginData.email==loginuser.email&&LoginData.password==loginuser.password
                    ? "Have a great day.":"Please fill correct details"
                    ,
                status: "success",
                duration: 1400,
                isClosable: true,
                position: "top",
                status: LoginData.email==loginuser.email&&LoginData.password==loginuser.password ? "success": "error" ,
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
            ref={btnRef}
            onClick={onOpen}
          >
            Create an Account
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader fontSize="2xl">Create your account</DrawerHeader>

              <DrawerBody>
                <FormControl isRequired>
                  <FormLabel>First name</FormLabel>
                  <Input placeholder="First name" name='name' onChange={handleChange} />
                  <FormLabel>Last name</FormLabel>
                  <Input placeholder="Last name" />
                  <FormLabel>Email</FormLabel>
                  <Input placeholder="enter your email" name='email'onChange={handleChange}/>
                  <FormControl isInvalid={isError}>
                    <FormLabel>Confirm Email</FormLabel>
                    <Input
                      type="email"
                      // onChange={handleInputChange}
                      placeholder="enter your email" name='confirmemail' onChange={handleChange}
                    />
                    {user.email===user.confirmemail ? (
                      <FormHelperText>
                        ready to go
                      </FormHelperText>
                    ) : (
                      <FormErrorMessage>email is not same as above</FormErrorMessage>
                    )}
                  </FormControl>

                  <FormControl isInvalid={IsPassword}>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      name='password'
                      onChange={handleChange}
                    />
                    {!IsPassword ? (
                      <FormErrorMessage>
                        min 8 characters and a symbol is required.
                      </FormErrorMessage>
                    ) : (
                      <FormHelperText>Click on Save to continue</FormHelperText>
                    )}
                  </FormControl>
                </FormControl>
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue" onClick={SaveData}>Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Flex>
    </Stack>
  );
}

export default Account;
