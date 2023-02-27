import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-validators',
  templateUrl: './basic-validators.component.html',
  styleUrls: ['./basic-validators.component.css']
})
export class BasicValidatorsComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      required: [null, Validators.required],
      onlyNumbers: [null, Validators.pattern('[0-9]*')],
      max: [null, Validators.max(500)]
    })
  }

  ngOnInit(): void {
  }

}
