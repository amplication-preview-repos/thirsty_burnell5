import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ExaminationService } from "./examination.service";
import { ExaminationControllerBase } from "./base/examination.controller.base";

@swagger.ApiTags("examinations")
@common.Controller("examinations")
export class ExaminationController extends ExaminationControllerBase {
  constructor(protected readonly service: ExaminationService) {
    super(service);
  }
}
