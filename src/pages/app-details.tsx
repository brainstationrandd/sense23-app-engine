import CommonSection from "@component/home-1/CommonSection";
import AppLayout from "@component/layout/AppLayout";
import Grid from "@component/grid/Grid";
import Container from "@component/Container";
import DropdownMenu from "@component/home-1/DropdownMenu";

const AppDetails = () => {

  const categroyList1 = [
    {
      title: "User1",
      subCategories: ["Profile", "Portfolio"],
    },
    {
      title: "User2",
      subCategories: ["Profile", "Portfolio"],
    },
    {
      title: "User3",
      subCategories: ["Profile", "Portfolio"],
    },
    {
      title: "User4",
      subCategories: ["Profile", "Portfolio"],
    },
  ];

    const categroyList2 = [
      {
        title: "Service1",
        subCategories: ["Profile", "Portfolio"],
      },
      {
        title: "Service2",
        subCategories: ["Profile", "Portfolio"],
      },
      {
        title: "Service3",
        subCategories: ["Profile", "Portfolio"],
      },
      {
        title: "Service4",
        subCategories: ["Profile", "Portfolio"],
      },
    ];

      const categroyList3 = [
        {
          title: "Service1",
          subCategories: ["Profile", "Portfolio"],
        },
        {
          title: "Service2",
          subCategories: ["Profile", "Portfolio"],
        },
        {
          title: "Service3",
          subCategories: ["Profile", "Portfolio"],
        },
        {
          title: "Service4",
          subCategories: ["Profile", "Portfolio"],
        },
      ];
  
  return (
    <main>
      <CommonSection navOpen={false}/>
      <Container mb="20px" mt="20px">
        <Grid container >
          <Grid item gridGap={10} sm={12} lg={4} spacing={10} md={6}>
            <DropdownMenu categroyList={categroyList1} CategoryTitle="Device and User Tracking"/>
          </Grid>
          <Grid item gridGap={10} sm={12} lg={4} spacing={10} md={6}>
            <DropdownMenu categroyList={categroyList2} CategoryTitle="Services"/>
          </Grid>
          <Grid item gridGap={10} sm={12} lg={4} spacing={10} md={6}>
            <DropdownMenu categroyList={categroyList3} CategoryTitle="Features"/>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

AppDetails.layout = AppLayout;

export default AppDetails;
