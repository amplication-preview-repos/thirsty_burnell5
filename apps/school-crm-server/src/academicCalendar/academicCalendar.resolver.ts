import * as graphql from "@nestjs/graphql";
import { AcademicCalendarResolverBase } from "./base/academicCalendar.resolver.base";
import { AcademicCalendar } from "./base/AcademicCalendar";
import { AcademicCalendarService } from "./academicCalendar.service";

@graphql.Resolver(() => AcademicCalendar)
export class AcademicCalendarResolver extends AcademicCalendarResolverBase {
  constructor(protected readonly service: AcademicCalendarService) {
    super(service);
  }
}
