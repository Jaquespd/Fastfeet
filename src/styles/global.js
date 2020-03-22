import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    
  }

  *:focus {
    outline: 0;

  }

  html, body, #root {
    height: 100%;
    
  }

  body {
    -webkit-font-smoothing: antialiased;
    // background: linear-gradient(180deg, #7159c1, #ab59c1);
    // background: #7D40E7 0% 0% no-repeat padding-box;
    background: #F5F5F5;
    

  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
