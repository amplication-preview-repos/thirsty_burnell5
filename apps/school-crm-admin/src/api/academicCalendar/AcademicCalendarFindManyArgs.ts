import { AcademicCalendarWhereInput } from "./AcademicCalendarWhereInput";
import { AcademicCalendarOrderByInput } from "./AcademicCalendarOrderByInput";

export type AcademicCalendarFindManyArgs = {
  where?: AcademicCalendarWhereInput;
  orderBy?: Array<AcademicCalendarOrderByInput>;
  skip?: number;
  take?: number;
};
