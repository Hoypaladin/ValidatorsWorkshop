import { AbstractControl, ValidatorFn } from "@angular/forms";

export const differentValue: ValidatorFn = (control: AbstractControl) => {
  const control1 = control.get('1')
  const control2 = control.get('2')

  if (!control1 || !control2) {
    throw new Error('controls not defined')
  }

  if (control1.value === control2.value) {
    return {
      sameValue: control1.value
    }
  }

  return null
}