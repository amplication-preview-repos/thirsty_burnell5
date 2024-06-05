import { AcademicCalendar as TAcademicCalendar } from "../api/academicCalendar/AcademicCalendar";

export const ACADEMICCALENDAR_TITLE_FIELD = "id";

export const AcademicCalendarTitle = (record: TAcademicCalendar): string => {
  return record.id?.toString() || String(record.id);
};
