import { Button, ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';


function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Button colorScheme="teal">ボタン</Button>
        <p>chakraUI</p>
      </ChakraProvider>
    </div>
  );
}

export default App;
