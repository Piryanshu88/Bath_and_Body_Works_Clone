import { Image, Stack, VStack ,Flex,Text, Grid, GridItem} from "@chakra-ui/react"

function Category(){
    return (
        <Stack textAlign='center' width='80%' margin='auto' gap='2'>
            <Text as='b' fontSize='1.5rem'>SHOP BY CATEGORY</Text>
        <Flex gap='4'>
            <VStack  cursor='pointer'>
                <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw5c79520c/images/Fall2022/bc_fall-in-bloom_fa2_vn%E2%80%8B.jpg?yocs=o_s_'/>
                <Text as='u'>Body Care</Text>
            </VStack>
            <VStack cursor='pointer'>
                <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw16b341ca/images/Fall2022/cndl_thankful-toast_fa3_vn%E2%80%8B.jpg?yocs=o_s_'/>
                <Text as='u'>Candles</Text>
            </VStack>
            <VStack cursor='pointer'>
                <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw85446105/images/Fall2022/diff_holiday-newness_fa3_vn%E2%80%8B.jpg?yocs=o_s_'/>
                <Text as='u'>Wallflowers</Text>
            </VStack>
            <VStack cursor='pointer'>
                <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw5d0a0476/images/Fall2022/sp_thankful-toast_fa3_vn%E2%80%8B.jpg?yocs=o_s_'/>
                <Text as='u'>Soaps</Text>
            </VStack>
            <VStack cursor='pointer'>
                <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw751cc2c2/images/Fall2022/bc_at-presspause_fa3_vn%E2%80%8B%E2%80%8B.jpg?yocs=o_s_'/>
                <Text as='u'>Aromatherapy</Text>
            </VStack>
            <VStack cursor='pointer'>
                <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw8a1239a3/images/Fall2022/bc_new-mensshop_fa3_vn%E2%80%8B.jpg?yocs=o_s_'/>
                <Text as='u'>Shop Men's</Text>
            </VStack>
        </Flex>
        <Grid templateColumns={{base:'repeat(2,1fr)',sm:'repeat(1,1fr)',md:'repeat(2,1fr)'}} gap='8' >
            <GridItem  cursor='pointer'>
                <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw87e16b0d/images/Fall2022/xcat_thankful-toast_fa3_hps.jpg?yocs=o_s_'/>
                <Text>The best way to celebrate is with all the new fall things</Text>
                <Text as='u'>Shop New Arrivals</Text>
            </GridItem>
            <GridItem cursor='pointer'>
                <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwe7929b0b/images/Fall2022/bc_at-presspause_fa3_hps.jpg?yocs=o_s_'/>
                <Text>Fall for the comfort of a new kind of cozy</Text>
                <Text as='u'>Shop Aromatherapyr</Text>
            </GridItem>
            <GridItem cursor='pointer'>
                <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw9a7949c7/images/Fall2022/xcat_mens_fa3_hps.jpg?yocs=o_s_'/>
                <Text>Find so many new scents at the Mens's Shop.</Text>
                <Text as='u'> Shop Men's</Text>
            </GridItem>
            <GridItem cursor='pointer'>
                <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwb144b2bc/images/Fall2022/xcat_fall-in-bloom-xcat_fa2_hps.jpg?yocs=o_s_'/>
                <Text>Vibrant. Warm. Sweet. Try Fall in Bloom the perfect right-now floral</Text>
                <Text as='u'>Shop Top Fragrances</Text>
            </GridItem>
        </Grid>
        
        </Stack>
    )
}
export default Category