import SearchBar from './components/Search';
import styled from 'styled-components';
import GlobalStyle from './globalStyle';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
 
`;

const App = () => {


  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <SearchBar />

      </Wrapper>

    </>
  );
}

export default App;
