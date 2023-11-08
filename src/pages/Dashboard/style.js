import styled from "styled-components";

export const MainDashboard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const MainLayout = styled.div`
  display: flex;
`;

export const SidebarWrapper = styled.aside`
  flex-shrink: 0;
  width: 20%;
  background: aliceblue;
  height: 100vh;
  border-top: 10px solid #2b95cf;
  padding: 20px 30px;
`;

export const SidebarList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  li {
    a {
      font-size: 18px;
      text-decoration: none;
      color: #000;
    }
    &.active {
      background-color: #2b95cf;
      padding: 10px 20px;
      width: 100%;
      color: #fff;
      border-radius: 5px;
    }
  }
  .active {
    background-color: #2b95cf;
    padding: 10px 20px;
    width: 100%;
    color: #fff;
    border-radius: 5px;
  }
`;

export const MainContentWrapper = styled.main`
  padding: 20px 30px;
  width: 100%;
`;

export const CardEventsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
`;

export const DashboardCardWrapper = styled.div`
  padding: 20px;
  border: 1px solid red;
  border-radius: 10px;
`;
