// imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderComponent} from './header.component'

const EXPORTS = [HeaderComponent];

// @NgModule decorator with its metadata
@NgModule({
  declarations: [HeaderComponent],
  imports: [BrowserModule]
})
export class HeaderModule {
static exports = EXPORTS;

}