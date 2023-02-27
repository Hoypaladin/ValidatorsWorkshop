import { AbstractControl } from "@angular/forms";
import { getDayOfYear, isValid, parse } from "date-fns";

export const birthdayValidator = (date: Date, name: string) => {
  return (control: AbstractControl) => {
    if (!isValid(parse(control.value, 'dd-MM', new Date()))) {
      return {
        invalidDate: control.value
      }
    }
  
    const controlDate = parse(control.value, 'dd-MM', new Date());
  
    if (getDayOfYear(controlDate) !== getDayOfYear(date)) {
      return {
        notBirthday: {
          date: controlDate,
          name
        }
      }
    }
  
    return null;
  }
} 
