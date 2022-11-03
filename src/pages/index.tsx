import Grid from "@component/grid/Grid";
import TweetBox from "@component/home-1/TweetBox";
import AppLayout from "../components/layout/AppLayout";

const IndexPage = () => {
  const tweetList = ["Lorem ipsum doler","Lorem ipsum doler","Lorem ipsum doler"];

  return (
    <main>
      <Grid container spacing={0}>
        <Grid item md={4}>
          <TweetBox tweetList={tweetList} tweetTitle="Live Tweets"/>
        </Grid>
        <Grid item md={4}>
          <TweetBox tweetList={tweetList} tweetTitle="Mixed Tweets"/>
        </Grid>
        <Grid item md={4}>
          <TweetBox tweetList={tweetList} tweetTitle="Generated Tweets"/>
        </Grid>
      </Grid>
    </main>
  );
};

IndexPage.layout = AppLayout;

export default IndexPage;
