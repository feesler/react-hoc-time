const MS_IN_MINUTE = 60 * 1000;
const MS_IN_HOUR = 60 * MS_IN_MINUTE;
const MS_IN_DAY = 24 * MS_IN_HOUR;

function formatPlural(num, single, few, several) {
  const dozens = num % 100;
  const lastDig = num % 10;

  if (dozens < 10 || dozens > 20) {
    if (lastDig === 1) {
      return single;
    }
    if (lastDig >= 2 && lastDig <= 4) {
      return few;
    }
  }

  return several;
}

export function formatTimePretty(date) {
  let time;

  if (typeof date === 'string') {
    time = Date.parse(date);
    if (Number.isNaN(time)) {
      throw new TypeError('Invalid date string');
    }
  } else if (typeof date === 'number') {
    time = date;
  } else if (date instanceof Date) {
    time = date.getTime();
  } else {
    throw new TypeError('Invalid type of parameter');
  }

  const now = Date.now();
  const diff = now - time;

  if (diff < MS_IN_HOUR) {
    const minutes = Math.floor(diff / MS_IN_MINUTE);
    const minPlural = formatPlural(minutes, 'минуту', 'минуты', 'минут');

    return `${minutes} ${minPlural} назад`;
  }

  if (diff < MS_IN_DAY) {
    const hours = Math.floor(diff / MS_IN_HOUR);
    const hoursPlural = formatPlural(hours, 'час', 'часа', 'часов');

    return `${hours} ${hoursPlural} назад`;
  }

  const days = Math.floor(diff / MS_IN_DAY);
  const daysPlural = formatPlural(days, 'день', 'дня', 'дней');

  return `${days} ${daysPlural} назад`;
}
