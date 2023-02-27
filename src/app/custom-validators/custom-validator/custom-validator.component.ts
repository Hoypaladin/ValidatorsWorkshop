import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { format } from 'date-fns';
import { todayValidator } from '../today.validator';

@Component({
  selector: 'app-custom-validator',
  templateUrl: './custom-validator.component.html',
  styleUrls: ['./custom-validator.component.css']
})
export class CustomValidatorComponent implements OnInit {
  form = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      today: [null, todayValidator]
    })
  }

  ngOnInit(): void {
  }

  getFormattedDate(date: Date): string {
    return format(date, 'EEEE dd MMMM yyyy')
  }

}
