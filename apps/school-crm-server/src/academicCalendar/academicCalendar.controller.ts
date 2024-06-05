import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AcademicCalendarService } from "./academicCalendar.service";
import { AcademicCalendarControllerBase } from "./base/academicCalendar.controller.base";

@swagger.ApiTags("academicCalendars")
@common.Controller("academicCalendars")
export class AcademicCalendarController extends AcademicCalendarControllerBase {
  constructor(protected readonly service: AcademicCalendarService) {
    super(service);
  }
}
