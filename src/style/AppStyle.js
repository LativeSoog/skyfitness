import styled, { createGlobalStyle } from 'styled-components'

export const StyLeGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: 'StratosSkyeng', sans-serif;
  cursor: pointer;
  color: inherit;
}

button {
  cursor: pointer;
}

@font-face {
  font-family: 'StratosSkyeng';
  src:
    local('StratosSkyeng'),
    local('StratosSkyeng'),
    url('../../public/fonts/StratosSkyeng.woff2') format('woff2'),
    url('../../public/fonts/StratosSkyeng.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
html,
body {
  font-family: 'StratosSkyeng', sans-serif;
}
`
