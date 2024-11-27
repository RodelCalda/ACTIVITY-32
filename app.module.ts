import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; 
import { BookComponent } from './components/book/book.component'; 

@NgModule({
  imports: [
    BrowserModule,
    AppComponent, 
    BookComponent, 
  ],
  providers: [],
})
export class AppModule {}

