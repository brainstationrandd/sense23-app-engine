import Section1 from "@component/home-1/Section1";
import AppLayout from "@component/layout/AppLayout";

const Dashboard = () => {

  return (
    <main>
      <Section1/>
    </main>
  );
};

Dashboard.layout = AppLayout;

export default Dashboard;
