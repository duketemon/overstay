export function getYesterday() {
  const today = getToday();
  return addDays(today, -1);
}

export function getToday() {
  return new Date();
}

export function getTomorrow() {
  const today = getToday();
  return addDays(today, 1);
}

export function addDays(date: Date, daysNumber: number) {
  if (!date) {
    throw new TypeError('Received invalid date object');
  }
  if (!daysNumber && daysNumber !== 0) {
    throw new TypeError('Received invalid number of days object');
  }

  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + daysNumber);
  return newDate;
}

export function toString(date: Date) {
  const str = date.toLocaleDateString('EN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return str;
}
