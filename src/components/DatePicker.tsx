import classes from './DatePicker.module.css';
import {Button, Group, Text} from '@mantine/core';
import {DatesProvider, DatePickerInput} from '@mantine/dates';
import {getToday, getYesterday, getTomorrow} from '../utils/dates';

interface DatePickerProps {
  title: string;
  value: Date;
  onChange: (value: any) => void;
}

export function DatePicker(props: DatePickerProps) {
  return (
    <div className={classes.wrapper}>
      <Text className={classes.title}>{props.title}</Text>
      <DatesProvider settings={{locale: 'gb'}}>
        <DatePickerInput
          value={props.value}
          defaultValue={new Date()}
          onChange={props.onChange}
          className={classes.input}
        />
      </DatesProvider>

      <Group className={classes.fixedDaysButtonsWrapper} grow gap={5}>
        <FixedDateButton
          label="Yesterday"
          date={getYesterday()}
          update={props.onChange}
        />
        <FixedDateButton
          label="Today"
          date={getToday()}
          update={props.onChange}
        />
        <FixedDateButton
          label="Tomorrow"
          date={getTomorrow()}
          update={props.onChange}
        />
      </Group>
    </div>
  );
}

interface FixedDateButtonProps {
  label: string;
  date: Date;
  update: CallableFunction;
}

function FixedDateButton(props: FixedDateButtonProps) {
  return (
    <Button
      variant="light"
      size="compact-xs"
      onClick={() => {
        props.update(props.date);
      }}
      className={classes.fixedDaysButton}
    >
      {props.label}
    </Button>
  );
}
