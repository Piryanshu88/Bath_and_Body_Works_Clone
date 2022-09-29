import { SimpleGrid, GridItem } from "@chakra-ui/react";
import {InfoOutlineIcon,EmailIcon} from '@chakra-ui/icons'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  IconButton,
  Input,
  Image,
  Flex,
  Text,
  FormHelperText,
} from "@chakra-ui/react";

function Footer() {
  return (
    <SimpleGrid templateColumns='repeat(5,0.7fr)' fontSize='14px' fontfamily='Trade Gothic W01 Light,Arial,sans-serif' color='#666' gap="2" p='5' > 
      <GridItem lineHeight='2rem' p='2' paddingLeft='6'>
        <Text>Get email offers & the latest news from Bath & Body Works!</Text>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" w='170px' borderRadius='0'   />
          <InfoOutlineIcon w='6'h='6'mx='2' />
          <FormLabel>Confirm Email address</FormLabel>
          <Input type="email" w='170px' borderRadius='0'   />
          <IconButton  mb='1.5'
            borderRadius='0'
            variant='outline'
            aria-label='Send email'
            icon={<EmailIcon/>}
            />
        </FormControl>
        <Text as='b' >GET CONNECTED</Text>
        <Flex gap='2'>
            <Image src='https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-128.png'  w='1.7rem' cursor='pointer'/>
            <Image src='https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-128.png' w='1.7rem' cursor='pointer'></Image>
            <Image src='https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Pinterest-128.png' w='1.7rem' cursor='pointer'></Image>
            <Image src='https://cdn2.iconfinder.com/data/icons/social-media-2421/512/TikTok-128.png' w='1.7rem' cursor='pointer'></Image>
            <Image src='https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-128.png' w='1.7rem' cursor='pointer'></Image>
            <Image src='https://cdn3.iconfinder.com/data/icons/picons-social/57/58-youtube-128.png' w='1.7rem' cursor='pointer'></Image>
        </Flex>
      </GridItem>
      <GridItem lineHeight='2rem'  p='2' paddingLeft='6'>
        <Text as='b'>CUSTOMER CARE</Text>
        <Text>Help & FAQs</Text>
        <Text>Shipping</Text>
        <Text>Return & Exchanges</Text>
        <Text>Order Tracking</Text>
        <Text>Corporate Sales & Gifts</Text>
        <Text>Contact us</Text>
      </GridItem>
      <GridItem lineHeight='2rem'  p='2' paddingLeft='6'>
        <Text as='b'>MY ACCOUNT</Text>
        <Text>Sign In or Sign Up</Text>
        <Text>Order Tracking</Text>
        <Text>My Auto Refresh</Text>
        <Text>My Love-It List</Text>
      </GridItem>
      <GridItem lineHeight='2rem'  p='2' paddingLeft='6'>
        <Text as='b'>DISCOVER</Text>
        <Text>About Us</Text>
        <Text>Careers</Text>
        <Text>Gift Cards</Text>
        <Text>Shop by Fragrance</Text>
        <Text>Product Ingredients</Text>
        <Text>Get Inspired</Text>
        <Text>Diversity, Equity & Inclusion</Text>
      </GridItem>
      <GridItem lineHeight='2rem'  p='2' paddingLeft='6'>
        <Text as='b'>FIND US</Text>
        <Text >Store Locator</Text>
        <Text  >Global Locations</Text>
      </GridItem>
    </SimpleGrid>
  );
}

export default Footer;
