import classes from './Footer.module.css';
import {Group, Text} from '@mantine/core';
import LightDarkThemeButton from '../../components/LightDarkThemeButton';
import UIScalePicker from '../../components/UIScalePicker';

export default function Footer() {
  return (
    <footer className={classes.wrapper}>
      <Group>
        <LightDarkThemeButton />
        <UIScalePicker />
      </Group>
      <Group className={classes.copyright}>
        <Text>© 2023 duketemon</Text>
      </Group>
    </footer>
  );
}
