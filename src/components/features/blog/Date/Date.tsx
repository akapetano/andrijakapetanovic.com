import { parseISO, format } from 'date-fns';

interface IDateProps {
  dateString: string;
}

export default function Date({ dateString }: IDateProps) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}