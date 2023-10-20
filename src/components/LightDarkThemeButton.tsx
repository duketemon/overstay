import {ActionIcon, useMantineColorScheme} from '@mantine/core';
import {IconSun, IconMoonStars} from '@tabler/icons-react';

export default function LightDarkThemeButton() {
  const {colorScheme, toggleColorScheme} = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant="outline"
      size={35}
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
    >
      {dark ? <IconSun /> : <IconMoonStars />}
    </ActionIcon>
  );
}
