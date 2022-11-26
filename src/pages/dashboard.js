import React, { useContext } from "react";
import {
  Container,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Image,
} from "@chakra-ui/react";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardMain from "../components/DashboardMain";
import DashboardProfile from "../components/DashboardProfile";
import { AuthUserContext } from "../context/AuthUserProvider";
import ImageDashboard from "../assets/images_dashborad.webp";

const DashboardPage = () => {
  const { id, username, email } = useContext(AuthUserContext);
  return (
    <React.Fragment>
      <Box>
        <DashboardNavbar />
        <Container maxW="xl" mt="2">
          {id && username && email ? (
            <Tabs isFitted>
              <TabList>
                <Tab>Posts</Tab>
                <Tab>Profile</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <DashboardMain />
                </TabPanel>
                <TabPanel>
                  <DashboardProfile />
                </TabPanel>
              </TabPanels>
            </Tabs>
          ) : (
            <Box p="20">
              <Flex justify="center">
                <Image
                  boxSize="450px"
                  objectFit="cover"
                  rounded="md"
                  src={ImageDashboard}
                  alt="Dan Abramov"
                />
              </Flex>
            </Box>
          )}
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default DashboardPage;
