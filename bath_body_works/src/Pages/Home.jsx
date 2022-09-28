import { Container,Text,Image, Flex, Stack, Button ,Wrap,WrapItem, Divider} from "@chakra-ui/react"
import Category from "../Components/ategory"
import Footer from "../Components/Footer"
import LastSection from "../Components/lastSection"
import TopOffers from "../Components/TopOffers"
import '../App.css'
function Home(){
    return(
        <Stack border='1px solid' gap='10'>
            <Flex  justifyContent='center' >
                <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwe88105b6/images/Fall2022/diff_decor_fa3_hm.gif?yocs=s_' w='1200px' h='636'/>
            </Flex>
            <Flex  justifyContent='center' >
            <TopOffers/>
            </Flex>
            <Flex  justifyContent='center' >
            <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw17a1b397/images/Fall2022/350crs_fa3_xbxl_16x9.gif?yocs=s_' w='1200px' h='636'/>
            </Flex>
            <Flex  justifyContent='center' >
            <Category/>
            </Flex>
            <Flex justifyContent='center'>
                <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwda661154/images/Fall2022/xcat_stl-givelove_fa1_hb%E2%80%8B.jpg?yocs=s_' w='1200px'/>
            </Flex>
            <Flex  gap='4' justifyContent='center'>
                <Wrap justify='center' w='1000px'>
                <WrapItem>
                <Button color='white' background='blackAlpha.800' borderRadius='0' px='23' >GIFTS UNDER $15</Button>
                </WrapItem>
                <WrapItem>
                <Button color='white' background='blackAlpha.800' borderRadius='0' px='23' >GIFTS FOR EVERYONE</Button>
                </WrapItem>
                <WrapItem>
                <Button  color='white' background='blackAlpha.800' borderRadius='0' px='23'>GIFTS UNDER $30</Button>
                </WrapItem>
                <WrapItem>
                <Button  color='white' background='blackAlpha.800' borderRadius='0' px='23'>GIFTS FOR HER</Button>
                </WrapItem>
                <WrapItem>
                <Button  color='white' background='blackAlpha.800' borderRadius='0' px='23'>TOP GIFTS PICKS</Button>
                </WrapItem>
                <WrapItem>
                <Button  color='white' background='blackAlpha.800' borderRadius='0' px='23'>GIFT SETS</Button>
                </WrapItem>
                </Wrap>
            </Flex>
            <Flex justifyContent='center'>
                <LastSection/>
            </Flex>
            {/* <Flex justifyContent='center' fontSize='14px' fontfamily='Trade Gothic W01 Light,Arial,sans-serif' px='20' background='#F2F2F2'>
                <Text>Terms Of Use </Text>  <Divider orientation='vertical' h='5' className='last' mx='3' />
                <Text>Privacy Policy</Text><Divider orientation='vertical' h='5' className='last' mx='3' />
                <Text>Security Bug Report</Text><Divider orientation='vertical' h='5' className='last' mx='3' />
                <Text> States Privacy Rights Notice (Certain States) </Text><Divider orientation='vertical' h='5' className='last' mx='3' />
                <Text>Do Not Sell or Share My Personal Information (Certain States)</Text><Divider orientation='vertical' h='5' className='last' mx='3' />
                <Text>Transparency in Supply Chains Targeted Ad Preferences (Certain States)</Text><Divider orientation='vertical' h='5' className='last' mx='3' />
                <Text>Limit the Use of My Sensitive Personal Information (California)</Text>
            </Flex> */}

        </Stack>
    )
}

export default Home