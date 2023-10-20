import {AppShell} from '@mantine/core';
import Body from './Body';
import Footer from './Footer';

export default function MainPage() {
  return (
    <AppShell>
      <AppShell.Main>
        <Body />
      </AppShell.Main>

      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}
