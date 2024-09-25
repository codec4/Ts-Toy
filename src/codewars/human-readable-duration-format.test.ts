import tap from 'tap';
const test = tap.test;
import {lastDigit, lastDigitIterative} from './last-digit-of-a-huge-numbers';
import {formatDuration} from './human-readable-duration-format';

test('humanReadable duration format ', t => {
  t.equal(formatDuration(0), 'now');
  t.equal(formatDuration(1), '1 second');
  t.equal(formatDuration(62), '1 minute and 2 seconds');
  t.equal(formatDuration(120), '2 minutes');
  t.equal(formatDuration(3600), '1 hour');
  t.equal(formatDuration(3662), '1 hour, 1 minute and 2 seconds');
  t.end();
});
