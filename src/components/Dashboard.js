// src/components/Dashboard.js
import React from 'react';
import Navbar from './Navbar';
import AppUsage from './AppUsage';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Main = styled.main`
  flex: 4;
  padding: 20px;
`;

const Dashboard = () => {
  return (
    <Container>
      <Main>
        <Navbar />
        <AppUsage />
      </Main>
    </Container>
  );
};

export default Dashboard;
