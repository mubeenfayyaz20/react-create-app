import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background: aliceblue;
  padding: 10px 60px !important;
  justify-content: space-between;
  list-style-type: none;
  display: flex;
  margin-bottom: 0;
  align-items: center;
  gap: 50px;
  padding: 0;
  img {
    width: 250px;
  }
`;

export const ProfileLink = styled.li`
  list-style-type: none;

  img {
    border-radius: 100px;
    width: 40px;
  }
`;

export const NavListWrapper = styled.ul`
  padding: 0;
  list-style-type: none;
  margin: 0;
`;

export const FooterWrapper = styled.footer`
  padding: 20px;
  background: whitesmoke;
  text-align: center;
  margin-top: auto;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
`;

export const CalanderModal = styled.div`
  width: 30vw;
  height: auto;
  background-color: #fff;
  padding: 2rem;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(5px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
`;

export const CalanderModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
