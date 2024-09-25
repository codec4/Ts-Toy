export function getDates(seconds: number) {
  const minute = 60;
  const day = 24;
  const year = 365;
  const r = {
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  while (seconds >= minute) {
    r.minutes += 1;
    seconds -= minute;
    if (r.minutes % minute === 0 && r.minutes !== 0) {
      r.hours += 1;
      r.minutes = 0;
    }
    if (r.hours % day === 0 && r.hours !== 0) {
      r.days += 1;
      r.hours = 0;
    }
    if (r.days % year === 0 && r.days !== 0) {
      r.years += 1;
      r.days = 0;
    }
  }
  r.seconds = seconds;
  return r;
}

export function formatDuration(seconds: number) {
  if (!seconds) return 'now';

  const r = getDates(seconds);

  const getReadable = (key: string, curr: string) =>
    r[key] > 1 ? `${r[key]} ${key}` : `${r[key]} ${curr}`;

  return ['year', 'day', 'hour', 'minute', 'second']
    .reduce(
      ([f, l], curr, index, lst) =>
        r[`${curr}s`] === 0
          ? [f, l]
          : index !== lst.length - 1
            ? [f.concat(`${getReadable(`${curr}s`, curr)}`), l]
            : [f, l.concat(`${getReadable(`${curr}s`, curr)}`)],
      [[], []],
    )
    .filter(v => v.length)
    .map(v => v.join(', '))
    .join(' and ');
}
