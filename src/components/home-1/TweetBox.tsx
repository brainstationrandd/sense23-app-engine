import React, { Fragment, useEffect, useState } from "react";
import Box from "../Box";
import Container from "../Container";
import FlexBox from "../FlexBox";
import Typography from "../Typography";
import StyledProductCategory from "./ProductCategoryStyle";
import TweetsItem from '../TweetsItem';

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
    <Container mb="20px">
      <FlexBox>
          <Box width={1} mx={10} shadow={6} borderRadius={10} padding="1.25rem" bg="white">
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
                  
                  onClick={() => handleCategoryClick(tweet)}
                >
                  <span className="product-category-title">{tweet}</span>
                </StyledProductCategory>
              </TweetsItem>
            ))}

            <StyledProductCategory
              mt="4rem"
              bg={selected.match(`all-${type}`) ? "white" : "gray.100"}
              shadow={selected.match(`all-${type}`) ? 4 : null}
              onClick={() => handleCategoryClick(`all-${type}`)}
            >
              <span className="product-category-title show-all">
                Load More ...
              </span>
            </StyledProductCategory>
          </Box>
      </FlexBox>
    </Container>
  );
};


export default TweetBox;
