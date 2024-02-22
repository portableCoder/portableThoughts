
import crypto from 'crypto';
import dayjs from './dayjs';

export function hashUtcToUid(utcTimestamp: number): string {
  const hash = crypto.createHash('md5');
  const hashBuffer = hash.update(String(utcTimestamp)).digest();
  const shortUid = hashBuffer.toString('hex').slice(0, 8);
  return shortUid;
}

export function reverseUidToUtc(shortUid: string): number | null {
  if (!/^[0-9a-fA-F]{8}$/.test(shortUid)) {
    console.error('Invalid short UID format');
    return null;
  }

  const timestampStr = parseInt(shortUid, 16).toString();
  const utcTimestamp = parseInt(timestampStr, 10);
  return isNaN(utcTimestamp) ? null : utcTimestamp;
}
export function formatUtcToDateString(utcTimestamp: number, userLocale: string): string {
  dayjs.locale(userLocale); // Automatically loads the necessary locale if available

  const formattedDate = dayjs(utcTimestamp * 1000).format('LL LT');
  return formattedDate;
}
