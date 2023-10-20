import {MantineProvider, localStorageColorSchemeManager} from '@mantine/core';
import MainPage from './pages/main/Page';

function App() {
  const colorSchemeManager = localStorageColorSchemeManager({
    key: 'overstay-app-color-scheme',
  });

  return (
    <MantineProvider colorSchemeManager={colorSchemeManager}>
      <MainPage />
    </MantineProvider>
  );
}

export default App;
