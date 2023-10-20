import {toString, addDays, getToday, getTomorrow, getYesterday} from '../dates';

describe('Tests of addDays function', () => {
  test('Given a valid date and a positive number of days. Expects a date', () => {
    const givenDate = new Date(2020, 10, 21);
    const givenNumberOfDays = 5;

    const actualResult = addDays(givenDate, givenNumberOfDays);
    const expectedResult = new Date(2020, 10, 26);

    expect(actualResult).toEqual(expectedResult);
  });
  test('Given a valid date and a negative number of days. Expects a date', () => {
    const givenDate = new Date(2020, 10, 21);
    const givenNumberOfDays = -10;

    const actualResult = addDays(givenDate, givenNumberOfDays);
    const expectedResult = new Date(2020, 10, 11);

    expect(actualResult).toEqual(expectedResult);
  });
  test('Given a valid date and zero number of days. Expects a date', () => {
    const givenDate = new Date(2020, 10, 21);
    const givenNumberOfDays = 0;

    const actualResult = addDays(givenDate, givenNumberOfDays);
    const expectedResult = new Date(2020, 10, 21);

    expect(actualResult).toEqual(expectedResult);
  });
  test('Given a valid date and such number of days that the result will be next month and next year. Expects a correct date', () => {
    const givenDate = new Date(2020, 11, 21);
    const givenNumberOfDays = 20;

    const actualResult = addDays(givenDate, givenNumberOfDays);
    const expectedResult = new Date(2021, 0, 10);

    expect(actualResult).toEqual(expectedResult);
  });
  test('Given a valid date and such number of days that the result will be previous month and previous year. Expects a correct date', () => {
    const givenDate = new Date(2020, 0, 10);
    const givenNumberOfDays = -20;

    const actualResult = addDays(givenDate, givenNumberOfDays);
    const expectedResult = new Date(2019, 11, 21);

    expect(actualResult).toEqual(expectedResult);
  });
  test('Given null as a date and expects raise of TypeError', () => {
    const givenDate = null;
    const givenNumberOfDays = 1;

    expect(() => {
      addDays(givenDate, givenNumberOfDays);
    }).toThrow(TypeError);
  });
  test('Given undefined as a date and expects raise of TypeError', () => {
    const givenDate = undefined;
    const givenNumberOfDays = 1;

    expect(() => {
      addDays(givenDate, givenNumberOfDays);
    }).toThrow(TypeError);
  });
  test('Given undefined as a number of days and expects raise of TypeError', () => {
    const givenDate = new Date();
    const givenNumberOfDays = undefined;

    expect(() => {
      addDays(givenDate, givenNumberOfDays);
    }).toThrow(TypeError);
  });
  test('Given null as a number of days and expects raise of TypeError', () => {
    const givenDate = new Date();
    const givenNumberOfDays = null;

    expect(() => {
      addDays(givenDate, givenNumberOfDays);
    }).toThrow(TypeError);
  });
});

describe('Tests of getToday function', () => {
  test("Expects a correct today's date", () => {
    const actualResult = getToday();
    const expectedResult = new Date();

    expect(actualResult).toEqual(expectedResult);
  });
});

describe('Tests of getTomorrow function', () => {
  test("Expects a correct tomorrow's date", () => {
    const actualResult = getTomorrow();
    const expectedResult = addDays(new Date(), 1);

    expect(actualResult).toEqual(expectedResult);
  });
});

describe('Tests of getYesterday function', () => {
  test("Expects a correct yesterday's date", () => {
    const actualResult = getYesterday();
    const expectedResult = addDays(new Date(), -1);

    expect(actualResult).toEqual(expectedResult);
  });
});

describe('Tests of toString function', () => {
  test('Given a valid date and expects a string', () => {
    const givenDate = new Date(2020, 10, 21);

    const actualResult = toString(givenDate);
    const expectedResult = 'November 21, 2020';

    expect(actualResult).toEqual(expectedResult);
  });
  test('Given undefined as a date and expects raise of TypeError', () => {
    const givenDate = undefined;

    expect(() => {
      toString(givenDate);
    }).toThrow(TypeError);
  });
  test('Given null as a date and expects raise of TypeError', () => {
    const givenDate = null;

    expect(() => {
      toString(givenDate);
    }).toThrow(TypeError);
  });
});
