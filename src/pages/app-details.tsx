import CommonSection from "@component/home-1/CommonSection";
import AppLayout from "@component/layout/AppLayout";

const AppDetails = () => {

  return (
    <main>
      <CommonSection navOpen={false}/>
    </main>
  );
};

AppDetails.layout = AppLayout;

export default AppDetails;
