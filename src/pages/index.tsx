import Grid from "@component/grid/Grid";
import TweetBox from "@component/home-1/TweetBox";
import AppLayout from "../components/layout/AppLayout";
import Container from '../components/Container';

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

  return (
    <main>
      <Container mb="20px" mt="20px">
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
