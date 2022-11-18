import Grid from "@component/grid/Grid";
import TweetBox from "@component/home-1/TweetBox";
import AppLayout from "../components/layout/AppLayout";
import Container from '../components/Container';
import FlexBox from "@component/FlexBox";
import Button from '../components/buttons/Button';
import Typography from "@component/Typography";
import Icon from "@component/icon/Icon";
import CustomModal from '../components/custom-modal/index';
import { useState } from 'react';
import TextField from '../components/text-field/TextField';
import Radio from '../components/radio/Radio';
import Box from "@component/Box";
import CheckBox from "./CheckBox";
import Slider from "../components/slider/Slider";
var Twitter = require('twitter');

const IndexPage = () => {


var client = new Twitter({
  consumer_key: '9O66Br238hKMsxtyREDouhXqD',
  consumer_secret: 'jEMNUscYPDpLzXjzf8ffGwFIMWLwXP88cZSGOMpmjduKKMw31h',
  access_token_key: '2290852158-788lRxK1mFKOkFznB2lHbHLGTV1da1RDmM4vubJ',
  access_token_secret: 'ymGrxoHppBu24oswcIVLxaUpfz266cl8KG5SfxMORF4U2'
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log("Generated tweets..........................................................", tweets);
  }
});
  const tweetList = ["Lorem ipsum doler","Lorem ipsum doler","Lorem ipsum doler"];

  const handleModalClose = () => {
    setIsOpenmodal(false)
  }

  const [isOpenmodal, setIsOpenmodal] = useState(false);

  return (
    <main>
      <Container mb="20px" mt="20px">
        <FlexBox justifyContent={'flex-end'}>
          <Button size="small" color={'primary'} p="0.5rem 1.5rem"  border={'1px solid blue'} onClick={()=>setIsOpenmodal(true)}>
            <Typography mr={2}>
              <Icon size="1rem">options</Icon>
            </Typography>
            Setting
          </Button>
        </FlexBox>

        <CustomModal size isModalOpen={isOpenmodal} handleModalClose={handleModalClose}>
          <Typography>
            <h2>Form Field</h2>
          </Typography>

          <Box mb={3}>
            <Radio label={"Option 1"} name="radio1" value={1} mb={2} checked />
            <Radio label={"Option 2"} name="radio1" value={2} mb={2} />
          </Box>

          <Grid container>
              <FlexBox width={"100%"} justifyContent={"space-between"}>
                <Box mb={3}>
                  <CheckBox label="Check 1" mb={2} />
                  <CheckBox label="Check 2" mb={2} />
                </Box>
                <Box ml={'auto'}>
                  <Button m={3} borderRadius={20}  bg={'#D23F57'} p={2}>
                    <Typography color={"#ffffff"}>
                      <Icon>user</Icon>
                    </Typography>
                  </Button>

                  <FlexBox >
                    <Button m={3} borderRadius={5}  bg={'#D23F57'} px={4}>
                      <Typography color={"#ffffff"}>Button Small</Typography>
                    </Button>

                    <Button m={3} borderRadius={20}  bg={'#D23F57'} px={2}>
                      <Typography color={"#ffffff"}>
                        <Icon>plus</Icon>
                      </Typography>
                    </Button>

                    <Button size="large" m={3} borderRadius={30}  bg={'#D23F57'} py={3} px="3">
                      <Typography color={"#ffffff"}>
                        <Icon>plus</Icon>
                      </Typography>
                    </Button>
                  </FlexBox>
                </Box>
              </FlexBox>
             

          </Grid>

          <Grid container width="100%">
            <Grid item lg={6} pr={2}>
              <FlexBox justifyContent="flex-end" >
                <p>$0 - $2,500</p>
              </FlexBox>
              <Slider width="100%" min="0" max="2500" mb={3}/>
            </Grid>
            
          </Grid>

          
          
          

          <TextField label="Name" placeholder="Enrter your name" fullwidth />
          <Typography>
            <h4>Modal content here</h4>
            <p><strong>Size should be:</strong> fluid, xl, lg, md, sm</p>
            <p>
              <strong>fluid:</strong> 98% <br />
              <strong>xl:</strong> 910px <br />
              <strong>lg:</strong> 750px <br />
              <strong>md:</strong> 550px <br />
              <strong>sm:</strong> 350px
            </p>
            <p><strong>Size default:</strong> md</p>

            <hr />
            <h5>Modal props</h5>
            <p><strong>isModalOpen: </strong>boolean, <strong> <br />size: </strong> string, <br /> <strong>handleModalClose: </strong> function,</p>
          </Typography>
        </CustomModal>

        <Grid container >
          <Grid item gridGap={10} sm={12} lg={4} spacing={10} md={6}>
            <TweetBox tweetList={tweetList} tweetTitle="Live Tweets"/>
          </Grid>
          <Grid item gridGap={10} sm={12} lg={4} spacing={3} md={6}>
            <TweetBox tweetList={tweetList} tweetTitle="Mixed Tweets"/>
          </Grid>
          <Grid item gridGap={10} sm={12} lg={4} spacing={3} md={6}>
            <TweetBox tweetList={tweetList} tweetTitle="Generated Tweets"/>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

IndexPage.layout = AppLayout;

export default IndexPage;
