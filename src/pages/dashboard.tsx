import Box from "@component/Box";
import Container from "@component/Container";
import Grid from "@component/grid/Grid";
import CommonSection from "@component/home-1/CommonSection";
import AppLayout from "@component/layout/AppLayout";
import Section1 from '../components/dashboard/Section1';

const Dashboard = () => {

  return (
    <main>
      <CommonSection/>
      <Box bg="gray.white" mb="3.75rem">
        <Container pb="2rem">
          <Section1 />
        </Container>
      </Box>
    </main>
  );
};

Dashboard.layout = AppLayout;

export default Dashboard;
