import React, { useEffect, useState } from "react";
import { textStyle, colorStyle, buttonStyle } from 'styled-system';
import Box from "../Box";
import Container from "../Container";
import FlexBox from "../FlexBox";
import Typography from "../Typography";
import StyledProductCategory from "./ProductCategoryStyle";
import TweetsItem from '../TweetsItem';
import Button from '../buttons/Button';

type Props = {
  tweetTitle?: string;
  tweetList?: Array<String>;
};


const TweetBox: React.FC<Props> = ({tweetList,tweetTitle}) => {
  const [type, setType] = useState("tweets");
  const [selected, setSelected] = useState("");
  const [list, setList] = useState([]);

  const handleCategoryClick = (tweet) => {
    if (selected.match(tweet)) {
      setSelected("");
    } else setSelected(tweet);
  };

  useEffect(() => {
    if (type === "tweets") setList(tweetList);
  }, [type]);

  return (
    <Container mt={40} mb="20px">
      <FlexBox flexWrap='wrap' justifyContent='center'>
          <Box minHeight={278} mb={20} shadow={6} borderRadius={10} padding="1.25rem" bg="white">
            <FlexBox mt="-0.5rem" mb="0.5rem">
              <Typography
                fontWeight="600"
                fontSize="20px"
                padding="0.5rem 1rem"
                style={{ cursor: "pointer" }}
                color={type === "tweets" ? "gray.900" : "gray.600"}
                onClick={() => setType("tweets")}
              >
                {tweetTitle}
              </Typography>
            </FlexBox>

            {list.map((tweet, ind) => (
              <TweetsItem 
              bg={selected.match(tweet) ? "#D9D9D9" : "#F3F6F9"} 
              shadow={selected.match(tweet) ? 4 : null}
              py={2} px={3} mb={2} borderRadius={5} >
                <span>Tweet {ind+1}</span>
                <StyledProductCategory
                  key={tweet}
                  mb="0.75rem"
                  bg="#D9D9D9"
                  mt={2}
                  borderRadius={1}
                  onClick={() => {}}
                >
                  {tweet}
                </StyledProductCategory>
              </TweetsItem>
            ))}


            <Button mt="3rem" size="small" fullwidth bg={"#F3F6F9"}>
              <Typography fontWeight="normal">
                Loadmore ...
              </Typography>
             </Button>

            {/* <StyledProductCategory
              
              bg={selected.match(`all-${type}`) ? "white" : "gray.100"}
              shadow={selected.match(`all-${type}`) ? 4 : null}
              onClick={() => handleCategoryClick(`all-${type}`)}
            >
              <span className="product-category-title show-all">
                Load More ...
              </span>
            </StyledProductCategory> */}
          </Box>
      </FlexBox>
    </Container>
  );
};


export default TweetBox;
