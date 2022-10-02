import {Image,Badge,Button ,GridItem, SimpleGrid, Stack, Box, Text, Flex,Select, Skeleton, Grid } from "@chakra-ui/react";
import '../App.css'
import { StarIcon } from "@chakra-ui/icons";
import {Link} from 'react-router-dom'
let data = JSON.parse(localStorage.getItem("search")) || [];
console.log("data", data);

const searchdata=(el)=>{
    localStorage.setItem('singleproduct',JSON.stringify(el))
}
window.location="#"
export function Search() {
  return (
    <Stack  w='90%' margin='auto'>
      <Box
        borderBottom="1px solid"
        
        p='2'
        fontFamily="TradeGothicLTW05-BoldNo\.2,Arial,sans-serif;"
      >
        <Text as="b" fontSize="2xl">
          Search Products
        </Text>
      </Box>
      <SimpleGrid alignItems='center' templateColumns='repeat(5,1fr)' gap='4' w=''  p='2' background='gray.500' >
        <Text as='b'  fontSize="xl">Filter By :-</Text>
        <Select placeholder="Product type" border='none' borderBottom='3px solid' borderRadius='0'>
          <option value="option1">Bar Soaps</option>
          <option value="option2">EyeShadows</option>
          <option value="option3">lipsticks</option>
          <option value="option3">Face Care</option>

        </Select>
        <Select placeholder="Product name" border='none' borderBottom='3px solid' borderRadius='0'>
          <option value="option1">Mabyliene</option>
          <option value="option2">Dior</option>
          <option value="option3">Calvin Klein</option>
          <option value="option3">Lacoste</option>
        </Select>
        <Select placeholder="Product Category" border='none' borderBottom='3px solid' borderRadius='0'>
          <option value="option1">Face Care</option>
          <option value="option2">Men's range</option>
          <option value="option3">Perfumes</option>
        </Select>

        <Select placeholder="SORT BY" border='none' borderBottom='3px solid' borderRadius='0'>
          <option value="option1">Name(asc to desc)</option>
          <option value="option2">Name(desc to asc)</option>
          <option value="option3">Price (low to high)</option>
          <option value="option3">Price (high to low)</option>
          <option value="option3">Rating (low to high)</option>
          <option value="option3">Rating (high to low)</option>
        </Select>
      </SimpleGrid>
      <Flex >
      {data == "" ? (
        <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
          gap="4"
          justifyContent="center"
          alignItems="center"
          lineHeight="2"
        >
          <Skeleton h="350"></Skeleton>
          <Skeleton h="350"></Skeleton>
          <Skeleton h="350"></Skeleton>
          <Skeleton h="350"></Skeleton>
          <Skeleton h="350"></Skeleton>
          <Skeleton h="350"></Skeleton>
          <Skeleton h="350"></Skeleton>
          <Skeleton h="350"></Skeleton>
          <Skeleton h="350"></Skeleton>
          <Skeleton h="350"></Skeleton>
          <Skeleton h="350"></Skeleton>
          <Skeleton h="350"></Skeleton>
          <Skeleton h="350"></Skeleton>
          <Skeleton h="350"></Skeleton>
          <Skeleton h="350"></Skeleton>
          <Skeleton h="350"></Skeleton>
          <Skeleton h="350"></Skeleton>
          <Skeleton h="350"></Skeleton>
        </SimpleGrid>
      ) : (
        <Grid
          templateColumns={{ base: "repeat(3,25%)" }}
          gap="10"
          margin='auto'
          w='100%'
          border='1px solid'
          justifyContent="center"
          alignItems="center"
          lineHeight="2"
        >
          {data.map((el) => (
             <Link to={`/singlesearchpro/${el.productId}`}>
              <GridItem textAlign="center" lineHeight='9' onClick={()=>searchdata(el)}>
              <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={el.heroImage} alt='product_img' w='70%' py='2' margin='auto'/>

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="3" colorScheme="cyan">
            New Collection
          </Badge>
          <Box
            color="lightblue"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {el.brandName}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {el.productName}
        </Box>

        <Box>
          {el.currentSku.listPrice}
          {/* <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box> */}
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {new Array(5).fill("").map((_, i) => (
            <StarIcon key={i} color={i < el.rating ? "yellow.500" : "grey.100"} />
          ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {el.reviews} reviews
          </Box>
        </Box>
        <Button background='blackAlpha.900' color='white' borderRadius='0' >Shop Now</Button>
      </Box>
    </Box>
    
              </GridItem>
             </Link>
          ))}
        </Grid>)}

      </Flex>
    </Stack>
  );
}
