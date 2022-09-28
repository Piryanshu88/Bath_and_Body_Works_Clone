import { Container  ,GridItem,Grid,Text, Button ,Box, Divider, VStack, Stack} from "@chakra-ui/react"
import '../App.css';
function TopOffers(){
    return (
        <VStack w='80%'  margin='auto' background='#F2F2F2' gap='10' paddingBottom='10'>
        <Text as="b" marginTop='10'fontSize='2rem' >TODAY'S TOP OFFERS</Text>
        <Grid templateColumns='repeat(6,25%)' w='1200px' overflowX='scroll' gap='5' className="scroll" >
            <GridItem  background="white" p='20px' lineHeight='4rem'textAlign='center'  h='220px'cursor='pointer'>
                <Stack  lineHeight='1.2rem' h='50' marginTop='10px'>
                <Text fontSize='1.25rem'>All Full-Size Body Care</Text>
                <Text as='b'>Buy 3, Get 1 FREE</Text>
                <Text >Lowest-priced item is free</Text>
                </Stack>
                <Button w='100%' borderRadius='0' background='blackAlpha.900' color='white' marginTop='48px'>SHOP</Button>
            </GridItem>
            <GridItem  background="white" p='20px' lineHeight='8rem' textAlign='center' h='220px'cursor='pointer'>
                <Stack lineHeight='1.5rem' h='50' marginTop='10px'>
                <Text fontSize='1.25rem'>Hand Soaps</Text>
                <Text as='b'>5/$25</Text>
                </Stack>
                <Button w='100%' borderRadius='0' background='blackAlpha.900' color='white'>SHOP</Button>
            </GridItem>
            <GridItem  background="white" p='20px' lineHeight='8rem' textAlign='center' h='220px'cursor='pointer'>
                <Stack lineHeight='1.5rem' h='50' marginTop='10px'>
                <Text fontSize='1.25rem'>Single Wick cream</Text>
                <Text as='b'> 2/$22</Text>
                </Stack>
                <Button w='100%' borderRadius='0' background='blackAlpha.900' color='white'>SHOP</Button>
            </GridItem>
            <GridItem  background="white" p='20px' lineHeight='8rem' textAlign='center' h='220px'cursor='pointer'>
                <Stack lineHeight='1.5rem' h='50' marginTop='10px'>
                <Text fontSize='1.25rem'>Hand Sanitizers 5-packs</Text>
                <Text as='b'> $8</Text>
                </Stack>
                <Button w='100%' borderRadius='0' background='blackAlpha.900' color='white'>SHOP</Button>
            </GridItem>
            <GridItem  background="white" p='20px' lineHeight='8rem' textAlign='center' h='220px'cursor='pointer'>
                <Stack lineHeight='1.5rem' h='50' marginTop='18px' marginBottom='2'>
                <Text fontSize='1.25rem'>Travel, Hand & Lip Care </Text>
                <Text as='b'>Buy 3, Get 1 FREE</Text>
                <Text >Lowest-priced item is free</Text>
                </Stack>
                <Button w='100%' borderRadius='0' background='blackAlpha.900' color='white'>SHOP</Button>
            </GridItem>
            <GridItem background="white" p='20px' lineHeight='8rem' textAlign='center' h='220px'cursor='pointer'>
                <Stack lineHeight='1.5rem' h='50' marginTop='10px'>
                <Text fontSize='1.25rem'>Room Sprays</Text>
                <Text as='b'> 3/$22</Text>
                </Stack>
                <Button w='100%' borderRadius='0' background='blackAlpha.900' color='white'>SHOP</Button>
            </GridItem>
        </Grid>
        </VStack>
    )
}
export default TopOffers