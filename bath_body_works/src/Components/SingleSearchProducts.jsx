import { Flex, Stack, Text,Box,Image, Button, Skeleton, SimpleGrid, GridItem, Grid, Link } from "@chakra-ui/react"
import {useState,useEffect} from 'react'
import { StarIcon } from "@chakra-ui/icons"

let product=JSON.parse(localStorage.getItem('singleproduct'))||[]
// let count=0
// if(count==0){
//     window.location.href=""
// }window.location.href='#'
 
 const AddtoCart=()=>{
    let arr=JSON.parse(localStorage.getItem('add-to-cart'))||[]
    arr.push(product)
    localStorage.setItem('add-to-cart',JSON.stringify(arr))
    
 }
function SingleSearchPro(){
    
    const [data,setpro]=useState(product)
    useEffect(()=>{
        setpro(product)
    },[product])
    
    return (
        <Box>
        <Flex justifyContent='center' marginY='30px' >
            <Flex width='35%'  >
                <Image src={data.heroImage} m='auto' width='50%' ></Image>
            </Flex>
            <Flex flexDirection='column' width='35%'  p='1' lineHeight='2'>
                <Text as='u'>{data.brandName}</Text>
                <Text as='b'  borderBottom='1px solid'pY='2' fontSize='2xl' fontFamily='"ProximaNova",Helvetica Neue,Helvetica,Arial,sans-serif'> {data.name}</Text>
                <Flex><Text>{data.currentSku.skuType}({data.productId})</Text></Flex>
                <Box display="flex" mt="2" alignItems="center">
          {new Array(5).fill("").map((_, i) => (
            <StarIcon key={i} color={i < data.rating ? "gray.500" : "gray.300"} />
          ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm" >
            {data.rating} stars <Text as='u'>Write a review</Text>
          </Box>
        </Box>
        <Text as='b' fontSize='3xl' pY='3'  fontFamily='"ProximaNova",Helvetica Neue,Helvetica,Arial,sans-serif'>{`${data.currentSku.listPrice}`}</Text>
        <Button margin='10' background='blackAlpha.900' color='white' borderRadius='0' fontSize='20px' onClick={AddtoCart}>Add to Cart</Button>
            </Flex>
        </Flex>
        <Box borderBottom='2px solid' textAlign='center'>
            <Text as='b'>Some More Images</Text>
            <Grid templateColumns='repeat(6,1fr)' gap='10' p='2' justifyContent='center' >
               <GridItem> <Image src={data.currentSku.skuImages.image42}  w='200px'/></GridItem>
               <GridItem> <Image src={data.currentSku.skuImages.image62} w='200px'/></GridItem>
               <GridItem> <Image src={data.currentSku.skuImages.image97} w='200px'/></GridItem>
               <GridItem> <Image src={data.currentSku.skuImages.image135} w='200px'/></GridItem>
              <GridItem>  <Image src={data.currentSku.skuImages.image162} w='200px'/></GridItem>
            </Grid>
        </Box>
        <Box p="1">
            <Text><Text w='80%'margin='auto'lineHeight='2' >{data.description}</Text></Text>
        </Box>
        </Box>
        
    )
}
export default SingleSearchPro
