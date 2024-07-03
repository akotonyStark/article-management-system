import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Grid, GridItem} from "@chakra-ui/react";

const RootLayout = () => {
  return (
    <>
      <Grid
        templateAreas={
                `"header header"
                  "nav main"
                  "nav footer"`}
     
        gridTemplateColumns={"1fr 5fr"}
        h="200px"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem  area={"header"} color={"white"} >
          <Navbar/>
        </GridItem>
        <GridItem  area={"nav"}>
          <Sidebar/>
        </GridItem>
        <GridItem  area={"main"}>
          <Outlet/>
        </GridItem>
      </Grid>
    </>
  );
};

export default RootLayout;
