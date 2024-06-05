import * as graphql from "@nestjs/graphql";
import { ExaminationResolverBase } from "./base/examination.resolver.base";
import { Examination } from "./base/Examination";
import { ExaminationService } from "./examination.service";

@graphql.Resolver(() => Examination)
export class ExaminationResolver extends ExaminationResolverBase {
  constructor(protected readonly service: ExaminationService) {
    super(service);
  }
}
