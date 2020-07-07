import { dateToString } from "../../../../../utils";
export const payloadFormatter = formData => {
  const result = { ...formData };
  const { startDate, returnDate } = formData;

  if (startDate) {
    result.startDate = dateToString(startDate);
  }
  if (returnDate) {
    result.returnDate = dateToString(returnDate);
  }
  return result;
};
