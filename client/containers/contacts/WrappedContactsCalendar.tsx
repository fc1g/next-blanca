import { fetchMany } from '@/server/actions/bookedDate/fetchMany';
import ContactsCalendar from './ContactsCalendar';
import { unstable_noStore } from 'next/cache';

export default async function WrappedContactsCalendar() {
  unstable_noStore();
  const { bookedDates } = await fetchMany();

  return <ContactsCalendar data={bookedDates} />;
}
