import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PokemonExists } from '../async-validator.validator';

@Component({
  selector: 'app-async-validator',
  templateUrl: './async-validator.component.html',
  styleUrls: ['./async-validator.component.css']
})
export class AsyncValidatorComponent implements OnInit {
  form = new FormGroup({})
  constructor(private fb: FormBuilder, private validator: PokemonExists) {
    this.form = this.fb.group({
      name: [null, {
        updateOn: 'blur',
        asyncValidators: [this.validator.validate.bind(this.validator)]
      }]
    })
   }

  ngOnInit(): void {
  }

}
