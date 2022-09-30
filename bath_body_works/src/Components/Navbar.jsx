import {Flex, Image,Box,ButtonGroup,Button,Spacer, HStack, Icon,Input, InputGroup,InputRightElement, Text, IconButton} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { SearchIcon} from '@chakra-ui/icons'
import React from 'react';

let id;
function debounce(fn){
    if(id){
        clearInterval(id)
    }
   id= setTimeout(function(){
        fn()
    },1000)
}
// Api call---->
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '673350cdfdmsh46e0b62adddf144p1d768bjsn3d8878c91b82',
		'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
	}
};

const get=(query)=>{
    return fetch(`https://sephora.p.rapidapi.com/products/search?q=${query}&pageSize=60&currentPage=1`, options).then((res)=>res.json()).then((re)=>re)
}

function Navbar(){
    const [username, setUsername] = React.useState("");
    console.log(username)
    const handleClick=()=>{
        console.log(get(username))
    }
    return  (
        <Box>
        <Flex minWidth='max-content' alignItems='center' gap='2' border='1px solid'justifyContent='space-evenly' p="1" >
            <HStack w="310px" ></HStack>
                <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw22126b8b/images/svg-icons/Logos-main.svg?yocs=o_s_'  alt='company_logo' width='258px' />
            <HStack marginRight='-50px' gap='3' >
                <InputGroup>
                    <Input placeholder='search..' onChange={(e)=>setUsername(e.target.value)} border='1px solid black' type='search' borderRightRadius='0'/>
                    <InputRightElement onClick={()=>debounce(handleClick)} children={<SearchIcon/>}></InputRightElement>
                </InputGroup>
                
                <Link to='/Login'><Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw88f6c71d/images/svg-icons/UI-MyAccount.svg?yocs=o_s_' width='36px'/></Link>
                <Link to='/Cart'><Image src='https://cdn3.iconfinder.com/data/icons/buno-black-friday-discount/32/shopping_sale_discount_bag-512.png' width="37px"/></Link>
                
            </HStack>
        </Flex>
        <Flex alignItems='center' justifyContent='space-evenly' my="4">
            <Text color='#666'fontfamily=' Trade Gothic W01 Light,Arial,sans-serif' fontSize='0.875rem'><Link to='/topOffers'>TOP OFFERS</Link></Text>
            <Text color='#666'fontfamily=' Trade Gothic W01 Light,Arial,sans-serif' fontSize='0.875rem'>CANDLES</Text>
            <Text color='#666'fontfamily=' Trade Gothic W01 Light,Arial,sans-serif' fontSize='0.875rem'>HOME FRANGRANCE</Text>
            <Text color='#666'fontfamily=' Trade Gothic W01 Light,Arial,sans-serif' fontSize='0.875rem'>HAND SOAPS & SANITIZERS</Text>
            <Text color='#666'fontfamily=' Trade Gothic W01 Light,Arial,sans-serif' fontSize='0.875rem'>MEN'S SHOP</Text>
            <Text color='#666'fontfamily=' Trade Gothic W01 Light,Arial,sans-serif' fontSize='0.875rem'>GIFT</Text>
            <Text color='#666'fontfamily=' Trade Gothic W01 Light,Arial,sans-serif' fontSize='0.875rem'>FALL SHOP</Text>
        </Flex>
        <Flex justifyContent='center' border='1px solid lightblue' lineHeight='2.25rem' color='#1876A7' gap="1" background="lightblue">
            <Text as='b'fontfamily='TradeGothicLTW05-BoldNo\.2,Arial,sans-serif' fontSize='1rem' letter-spacing='0.005em'>My Bath & Body Works Rewards is now available nationwide!</Text>
            <Text as='u' fontfamily='TradeGothicLTW05-BoldNo\.2,Arial,sans-serif' fontSize='1rem' letter-spacing='0.005em'>JOIN THE VIPS</Text>
        </Flex>
        </Box>
    )

}


export default Navbar