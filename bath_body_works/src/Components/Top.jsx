import {
  Button,
  Box,
  Badge,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Image,
  Stack,
  Skeleton,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const get = () => {
  return axios.get(" http://localhost:8080/products");
};
function Top() {
  const [data, setData] = useState([]);
  useEffect(() => {
    get().then((res) => setData(res.data));
    console.log(data);
  }, []);
  console.log(data);
  return (
    <Stack w="80%" m="auto">
      <Stack borderBottom="1px solid " py="3">
        <Text
          as="b"
          fontSize="2xl"
          fontFamily="TradeGothicLTW05-BoldNo\.2,Arial,sans-serif;"
        >
          Top Offers
        </Text>
      </Stack>
      <Flex flexDirection="column">
        <Flex background="#F16166" color="white" justifyContent="center" p="2">
          <Text as="b">LIMITED TIME ONLY!</Text>
        </Flex>
        <Image
          src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwa3427eb2/images/Fall2022/13503W_fa3_xbsk_6x1.gif?yocs=s_"
          w="100%"
          marginBottom="10"
        />
      </Flex>
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
          gap="4"
          justifyContent="center"
          alignItems="center"
          lineHeight="2"
        >
          {data.map((el) => (
            <Link to={`/topOffers/${el.id}`}>
              <GridItem textAlign="center">
                <Box
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                >
                  <Box textAlign="center">
                    <Image src={el.image_link} alt="" m="auto" />
                  </Box>
                  <Box p="6">
                    <Box display="flex" alignItems="baseline">
                      <Badge borderRadius="full" px="2" colorScheme="blue">
                        Top Offers for today
                      </Badge>
                    </Box>
                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                    >
                      {el.name}
                    </Box>

                    <Box>
                      {`$${el.price}`}
                      <Box as="span" color="gray.600" fontSize="sm">
                        / 1pcs
                      </Box>
                    </Box>
                    <Button
                      bg="blackAlpha.900"
                      color="white"
                      px="20"
                      borderRadius="0"
                    >
                      Shop Now
                    </Button>
                  </Box>
                </Box>
              </GridItem>
            </Link>
          ))}
        </Grid>
      )}{" "}
    </Stack>
  );
}

export default Top;
