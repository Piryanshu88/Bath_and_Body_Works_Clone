import { Divider, Grid ,GridItem, Image,Text, VStack} from "@chakra-ui/react";
import '../App.css'
function LastSection(){
    return (
        <VStack>
            <Text as='b' fontSize='1.5rem'>MORE GOOD THINGS, THIS WAY</Text>
        <Grid templateColumns={{base:'repeat(6,1fr)',sm:'repeat(2,1fr)',md:'repeat(6,1fr)'}} gap='3' w='80%' textAlign='center' marginBottom='20px'>
            <GridItem cursor='pointer' lineHeight='2rem'>
                <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw8f6e14ad/images/Spring2022/xcat_mwts-bopis_sp2_vn.jpg?yocs=o_s_'/>
                <Text as='u'>Shop--it's fast,free,easy</Text>
            </GridItem>
            <GridItem cursor='pointer' lineHeight='2rem'>
                <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw644e724c/images/Spring2022/xcat_mwts-sms_sp2_vn.jpg?yocs=o_s_'/>
                <Text as='u'>Sign up for texts</Text>
            </GridItem>
            <GridItem cursor='pointer' lineHeight='2rem'>
                <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw41a3328c/images/Spring2022/xcat_mwts-email_sp2_vn.jpg?yocs=o_s_'/>
                <Text as='u'>Sign up for emails</Text>
            </GridItem>
            <GridItem cursor='pointer' lineHeight='2rem'>
                <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw611329aa/images/Spring2022/xcat_mwts-autorefresh_sp2_vn.png?yocs=o_s_'/>
                <Text as='u'>Check out Auto Refresh</Text>
            </GridItem>
            <GridItem cursor='pointer' lineHeight='2rem'>
                <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwb9d60d44/images/Fall2022/boc-launch-prospects_vn_0.png?yocs=o_s_'/>
                <Text as='u'>Join the VIPs</Text>
            </GridItem>
            <GridItem cursor='pointer' lineHeight='2rem'>
                <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw4dd3c5f1/images/Spring2022/xcat_mwts-returns_sp2_vn.jpg?yocs=o_s_'/>
                <Text as='u'>See our return Policy</Text>
            </GridItem>
        </Grid>
        <Divider className="divider" m='auto' w='1200px'/>
        <Grid w='700px' m='auto' textAlign='center' marginTop='30px'>
            <Text as='bold' fontSize='1.5rem'>Bath & Body Works</Text>
            <Text>Bath and Body Works is your go-to place for gifts & goodies that surprise & delight. From fresh fragrances to soothing skin care, we make finding your perfect something special a happy-memory-making experience. Searching for new seasonal creations or your favorite discontinued scents? We’ve got you covered there, too. Oh! And while you're browsing, shop our latest & greatest selection of lotions, soaps and candles!</Text>
        </Grid>
        </VStack>
    )
}

export default LastSection