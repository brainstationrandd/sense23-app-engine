import Grid from "@component/grid/Grid";
import TweetBox from "@component/home-1/TweetBox";
import AppLayout from "../components/layout/AppLayout";
import Container from '../components/Container';

const IndexPage = () => {
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
