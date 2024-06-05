import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExaminationServiceBase } from "./base/examination.service.base";

@Injectable()
export class ExaminationService extends ExaminationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
