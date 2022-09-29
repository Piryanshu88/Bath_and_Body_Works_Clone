import { Flex, Stack, Text,Box,Image, Button } from "@chakra-ui/react"
import {useParams} from 'react-router-dom'
import { StarIcon } from "@chakra-ui/icons"
import {useEffect,useState} from 'react'
const getdata=(url)=>{
    return fetch(url).then((res)=>res.json())
}
function SingleProducts(){
    const [data,setData]=useState([])
    const {topOffers_id}=useParams()
    useEffect(()=>{
        getdata(`  http://localhost:8080/products/${topOffers_id}`).then((res)=>setData(res))
    },[topOffers_id])
    
    return (
        <Box>
        <Flex justifyContent='center' marginY='30px' >
            <Flex width='35%'  >
                <Image src={data.image_link} m='auto' width='50%' ></Image>
            </Flex>
            <Flex flexDirection='column' width='35%'  p='1' lineHeight='2'>
                <Text as='u'>{data.brand}</Text>
                <Text as='b'  borderBottom='1px solid'pY='2' fontSize='2xl' fontFamily='"ProximaNova",Helvetica Neue,Helvetica,Arial,sans-serif'> {data.name}</Text>
                <Flex><Text>{data.product_type}({data.id})</Text></Flex>
                <Box display="flex" mt="2" alignItems="center">
          {new Array(5).fill("").map((_, i) => (
            <StarIcon key={i} color={i < data.rating ? "gray.500" : "gray.300"} />
          ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm" >
            {data.rating}.0 stars <Text as='u'>Write a review</Text>
          </Box>
        </Box>
        <Text as='b' fontSize='3xl' pY='3'  fontFamily='"ProximaNova",Helvetica Neue,Helvetica,Arial,sans-serif'>{`$${data.price}`}</Text>
        <Button margin='10' background='blackAlpha.900' color='white' borderRadius='0' fontSize='20px'>Add to Cart</Button>
            </Flex>
        </Flex>
        <Box borderBottom='2px solid' textAlign='center'>
            <Text as='b'>Description</Text>
        </Box>
        <Box p="1">
            <Text><Text w='80%'margin='auto'lineHeight='2' >{data.description}</Text></Text>
        </Box>
        </Box>
    )
}

export default SingleProducts