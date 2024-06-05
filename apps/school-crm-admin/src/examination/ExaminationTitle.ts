import { Examination as TExamination } from "../api/examination/Examination";

export const EXAMINATION_TITLE_FIELD = "id";

export const ExaminationTitle = (record: TExamination): string => {
  return record.id?.toString() || String(record.id);
};
