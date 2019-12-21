import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NotFoundRoutingModule } from './not-found-routing.module';



@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ],
  exports: [
    PageNotFoundComponent,
    NotFoundRoutingModule
  ]
})
export class NotFoundModule { }
