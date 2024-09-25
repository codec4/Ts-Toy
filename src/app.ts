import {formatDuration} from './codewars/human-readable-duration-format';

console.log(formatDuration(1), ': 1 second');
console.log(formatDuration(62), ': 1 minute and 2 seconds');
console.log(formatDuration(120), ': 2 minutes');
console.log(formatDuration(3600), ': 1 hour');
console.log(formatDuration(3662), ': 1 hour, 1 minute and 2 seconds');
