import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";



@NgModule({
  declarations: [],
  imports: [],
  exports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class SharedModule { }
