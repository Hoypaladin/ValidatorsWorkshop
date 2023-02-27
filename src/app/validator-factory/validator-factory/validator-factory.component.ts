import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { format } from 'date-fns';
import { birthdayValidator } from '../birthday.validator';

@Component({
  selector: 'app-validator-factory',
  templateUrl: './validator-factory.component.html',
  styleUrls: ['./validator-factory.component.css']
})
export class ValidatorFactoryComponent implements OnInit {
  form = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      alex: [null, birthdayValidator(new Date('1998-10-03'), 'Alex')],
      adrien: [null, birthdayValidator(new Date('2000-02-07'), 'Adrien')],
      josias: [null, birthdayValidator(new Date('1998-01-03'), 'Josias')]
    })
  }

  ngOnInit(): void {
  }

  getFormattedDate(date: Date): string {
    return format(date, 'dd MMMM')
  }

  getErrorMessage(controlName: string): string {
    return `${this.getFormattedDate(this.form.get(controlName)?.errors?.['notBirthday'].date)} is not ${this.form.get(controlName)?.errors?.['notBirthday'].name}'s birthday`
  }

}
