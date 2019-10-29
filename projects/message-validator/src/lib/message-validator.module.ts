import { NgModule } from '@angular/core';
import { MessageValidatorComponent } from './message-validator.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [MessageValidatorComponent],
  imports: [
    CommonModule
  ],
  exports: [MessageValidatorComponent]
})
export class MessageValidatorModule { }
