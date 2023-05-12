export function getDateRange(startDate: Date, range: number = 7): Date[] {
  // Wrong argument
  if (range < 1) return [];

  let result: Date[] = [];

  for (let i = 0; i < range; ++i) {
    // Prepare date variable
    const date = new Date(startDate);
    // Date for the date offset by i
    date.setDate(date.getDate() + i);
    // Add to the result
    result.push(date);
  }

  // Set Time/Min/Sec for the edge cases
  result[0].setHours(0, 0, 0, 0);
  result[range - 1].setHours(23, 59, 59, 999);

  return result;
}

export function offsetDate(date: Date, offset: number = 1): Date {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + offset);

  return newDate;
}

export function sameDate(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

export function getRangeMonth(dateRange: Date[]): string {
  if (dateRange.length === 0) return '';

  const date1 = dateRange[0];
  const date2 = dateRange[dateRange.length - 1];

  const date1Str = date1.toLocaleString('en', {
    month: 'short',
    year: 'numeric',
  });

  const date2Str = date2.toLocaleString('en', {
    month: 'short',
    year: 'numeric',
  });

  if (date1.getMonth() === date2.getMonth()) return date1Str;
  else return `${date1Str}/${date2Str}`;
}
