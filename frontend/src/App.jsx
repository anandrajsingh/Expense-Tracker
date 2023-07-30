import React, { useState, useMemo } from 'react'
import styled from "styled-components";
import { useGlobalContext } from './context/globalContext';
import {MainLayout} from './styles/Layouts'

function App() {
  const [active, setActive] = useState(1)

  const global = useGlobalContext()
  console.log(global)

  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])

  const AppStyled = styled.div`
    height: 100vh;
    background-image: url(${props => props.bg});
    position: relative;
    main{
      flex: 1;
      background: rgba(252, 246, 249, 0.78);
      border: 3px solid #FFFFFF;
      backdrop-filter: blur(4.5px);
      border-radius: 32px;
      overflow-x: hidden;
      &::-webkit-scrollbar{
        width: 0;
      }
    }
`;

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>

      </MainLayout>
    </AppStyled>
  );
}

export default App;
