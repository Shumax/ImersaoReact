import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
  background-color: #282c34;
  color: var(--white);
	flex: 1;
	height: 100vh;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;


function PageDefault({ children }) {
  return (
    <>
      <Menu />
        <Main>
          {children}
        </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
