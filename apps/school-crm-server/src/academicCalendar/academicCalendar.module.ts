import { Module } from "@nestjs/common";
import { AcademicCalendarModuleBase } from "./base/academicCalendar.module.base";
import { AcademicCalendarService } from "./academicCalendar.service";
import { AcademicCalendarController } from "./academicCalendar.controller";
import { AcademicCalendarResolver } from "./academicCalendar.resolver";

@Module({
  imports: [AcademicCalendarModuleBase],
  controllers: [AcademicCalendarController],
  providers: [AcademicCalendarService, AcademicCalendarResolver],
  exports: [AcademicCalendarService],
})
export class AcademicCalendarModule {}
