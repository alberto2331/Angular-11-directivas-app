import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { CustimIfDirective } from './directives/custim-if.directive';

@NgModule({
  declarations: [
    ErrorMsgDirective,
    CustimIfDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorMsgDirective,
    CustimIfDirective
  ]
})
export class SharedModule { }
