import React, { useState } from "react";
// Styled components
import styled from "styled-components";
// Componnets
import Button from "./Button";
import Box from "src/components/Box/Box";
// Interfaces
import { Tabs } from "./interfaces";
// Views
import AddCountry from "src/views/AddCountry/AddCountry";
import Table from "src/views/Table/Table";

const initialState = Tabs.addCountry;

const Content = () => {
  const [activeTab, setActiveTab] = useState<Tabs>(initialState);

  const turnTab = (tab: Tabs) => {
    setActiveTab(tab);
  };

  return (
    <React.Fragment>
      <Box title="Select tab">
        <TabsSelectContainer>
          <Button
            name={Tabs.addCountry}
            isActive={activeTab === Tabs.addCountry ? true : false}
            turnTab={turnTab}
          >
            {Tabs.addCountry}
          </Button>
          <Button
            name={Tabs.table}
            isActive={activeTab === Tabs.table ? true : false}
            turnTab={turnTab}
          >
            {Tabs.table}
          </Button>
        </TabsSelectContainer>
      </Box>
      {activeTab === Tabs.addCountry && <AddCountry />}
      {activeTab === Tabs.table && <Table />}
    </React.Fragment>
  );
};

const TabsSelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
`;

export default Content;
