import React from "react";
import { Box } from "@chakra-ui/react";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardMain from "../components/DashboardMain";

const DashboardPage = () => {
  return (
    <React.Fragment>
      <Box>
        <DashboardNavbar />
        <DashboardMain />
      </Box>
    </React.Fragment>
  );
};

export default DashboardPage;
