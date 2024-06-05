import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AcademicCalendarServiceBase } from "./base/academicCalendar.service.base";

@Injectable()
export class AcademicCalendarService extends AcademicCalendarServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
