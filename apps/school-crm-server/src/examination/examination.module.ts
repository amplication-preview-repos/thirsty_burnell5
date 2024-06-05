import { Module } from "@nestjs/common";
import { ExaminationModuleBase } from "./base/examination.module.base";
import { ExaminationService } from "./examination.service";
import { ExaminationController } from "./examination.controller";
import { ExaminationResolver } from "./examination.resolver";

@Module({
  imports: [ExaminationModuleBase],
  controllers: [ExaminationController],
  providers: [ExaminationService, ExaminationResolver],
  exports: [ExaminationService],
})
export class ExaminationModule {}
