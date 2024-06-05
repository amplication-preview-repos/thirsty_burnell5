import { ExaminationWhereInput } from "./ExaminationWhereInput";
import { ExaminationOrderByInput } from "./ExaminationOrderByInput";

export type ExaminationFindManyArgs = {
  where?: ExaminationWhereInput;
  orderBy?: Array<ExaminationOrderByInput>;
  skip?: number;
  take?: number;
};
