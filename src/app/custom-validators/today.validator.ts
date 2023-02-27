import { AbstractControl, ValidatorFn } from "@angular/forms";
import { isSameDay, isValid, parse } from "date-fns";

export const todayValidator: ValidatorFn = (control: AbstractControl) => {
  if (!isValid(parse(control.value, 'dd-MM-yyyy', new Date()))) {
    return {
      invalidDate: control.value
    }
  }

  const controlDate = new Date(control.value);

  if (!isSameDay(controlDate, new Date())) {
    return {
      notToday: controlDate
    }
  }

  return null;
}

// Adrien Augé: 7 février