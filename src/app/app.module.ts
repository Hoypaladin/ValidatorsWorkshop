import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicValidatorsComponent } from './basic-validators/basic-validators/basic-validators.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'
import {MatTabsModule} from '@angular/material/tabs';
import { CustomValidatorComponent } from './custom-validators/custom-validator/custom-validator.component';
import { ValidatorFactoryComponent } from './validator-factory/validator-factory/validator-factory.component';
import { FormGroupValidatorComponent } from './form-group-validators/form-group-validator/form-group-validator.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicValidatorsComponent,
    CustomValidatorComponent,
    ValidatorFactoryComponent,
    FormGroupValidatorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule
  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
