import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { differentValue } from '../different-value.validator';

@Component({
  selector: 'app-form-group-validator',
  templateUrl: './form-group-validator.component.html',
  styleUrls: ['./form-group-validator.component.css']
})
export class FormGroupValidatorComponent implements OnInit {
  form = new FormGroup({})

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      '1': null,
      '2': null
    }, {validators: differentValue})
  }

  ngOnInit(): void {
  }

}
