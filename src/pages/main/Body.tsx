import classes from './Body.module.css';
import {Title, Text, Stack, Group, Container} from '@mantine/core';
import {useInputState} from '@mantine/hooks';
import {DatePicker} from '../../components/DatePicker';
import {DaysCounter} from '../../components/DaysCounter';
import {addDays, toString} from '../../utils/dates';

export default function Body() {
  const [entryDate, setEntryDate] = useInputState(new Date());
  const [numberOfDays, setNumberOfDays] = useInputState(30);
  const overstayDate = addDays(entryDate, numberOfDays - 1);

  return (
    <Container size={840} className={classes.wrapper}>
      <Stack className={classes.content}>
        <div className={classes.titleSection}>
          <Title className={classes.title}>
            Calculator of remaining travel days
          </Title>
        </div>

        <div>
          <Text>
            Are you trying to figure out how long you can stay in a country
            without overstaying your visa or entry stamp?
          </Text>
          <Text>
            Provide an arrival date and the number of days you're allowed to
            stay on your trip.
          </Text>
        </div>

        <Group className={classes.widgetsSection}>
          <DatePicker
            title="Date of entry"
            value={entryDate}
            onChange={setEntryDate}
          />

          <DaysCounter
            title="Duration of the trip"
            minValue={1}
            maxValue={365}
            value={numberOfDays}
            onChange={setNumberOfDays}
          />
        </Group>

        <div>
          If you reach your destination on{' '}
          <span className={classes.entryDateInResultMessage}>
            {toString(entryDate)}
          </span>
          , and intend to spend{' '}
          <span className={classes.numberOfDaysInOutput}>{numberOfDays}</span>{' '}
          days there, it's important to depart by{' '}
          <span className={classes.overstayDateInResultMessage}>
            {toString(overstayDate)}
          </span>
          , to avoid exceeding your allowed stay
        </div>
      </Stack>
    </Container>
  );
}
