import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './root/root.component';
import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot([
    {path: '', component: IndexComponent},
  ])],
  
  declarations: [RootComponent, IndexComponent,NavbarComponent],
  
  bootstrap: [RootComponent] 
})
export class AppModule {}
