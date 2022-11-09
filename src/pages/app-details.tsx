import CommonSection from "@component/home-1/CommonSection";
import AppLayout from "@component/layout/AppLayout";
import Grid from "@component/grid/Grid";
import Container from "@component/Container";
import Navbar from "@component/navbar/Navbar";
import DeviceUserTracking from "@data/deviceUserTracking";
import navbarNavigations from "@data/navbarNavigations";

const AppDetails = () => {

  return (
    <main>
      <CommonSection navOpen={false}/>
      <Container mb="20px" mt="20px">
        <Grid container >
          <Grid item gridGap={10} sm={12} lg={4} spacing={10} md={6}>
          <Navbar navListOpen={true} navbarNavigations={navbarNavigations} navData={DeviceUserTracking}  navBarTitle="Device and User Tracking"/>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

AppDetails.layout = AppLayout;

export default AppDetails;
