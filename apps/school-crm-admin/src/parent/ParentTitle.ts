import { Parent as TParent } from "../api/parent/Parent";

export const PARENT_TITLE_FIELD = "id";

export const ParentTitle = (record: TParent): string => {
  return record.id?.toString() || String(record.id);
};
