import classes from './DaysCounter.module.css';
import {useRef} from 'react';
import {
  NumberInput,
  NumberInputHandlers,
  ActionIcon,
  Text,
  Group,
  Button,
} from '@mantine/core';
import {IconPlus, IconMinus} from '@tabler/icons-react';

interface DaysCounterProps {
  title: string;
  minValue: number;
  maxValue: number;
  value: number;
  onChange: (value: any) => void;
}

export function DaysCounter(props: DaysCounterProps) {
  const handlers = useRef<NumberInputHandlers>(null);
  const fixedDays = [15, 30, 45, 60, 90];

  return (
    <div className={classes.wrapper}>
      <Text className={classes.title}>{props.title}</Text>
      <div className={classes.controlWidgetsWrapper}>
        <ActionIcon<'button'>
          variant="transparent"
          onClick={() => handlers.current?.decrement()}
          disabled={props.value === props.minValue}
          className={classes.control}
          onMouseDown={event => event.preventDefault()}
        >
          <IconMinus size="1.47rem" stroke={2.5} />
        </ActionIcon>

        <NumberInput
          min={props.minValue}
          max={props.maxValue}
          handlersRef={handlers}
          value={props.value}
          onChange={props.onChange}
          className={classes.input}
          suffix=" days"
          hideControls
        />

        <ActionIcon<'button'>
          variant="transparent"
          onClick={() => handlers.current?.increment()}
          disabled={props.value === props.maxValue}
          className={classes.control}
          onMouseDown={event => event.preventDefault()}
        >
          <IconPlus size="1.47rem" stroke={2.5} />
        </ActionIcon>
      </div>

      <Group className={classes.fixedDaysButtonsWrapper} gap={5} grow>
        {fixedDays.map(d => (
          <FixedDayButton key={d} daysNumber={d} update={props.onChange} />
        ))}
      </Group>
    </div>
  );
}

interface FixedDayButtonProps {
  daysNumber: number;
  update: CallableFunction;
}

function FixedDayButton(props: FixedDayButtonProps) {
  return (
    <Button
      variant="light"
      size="compact-xs"
      onClick={() => {
        props.update(props.daysNumber);
      }}
    >
      {props.daysNumber}
    </Button>
  );
}
