import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BookComponent } from "./components/book/book.component";
import { FooterComponent } from "./components/footer/footer.component";

import { FormsModule } from "@angular/forms"; //<<<< import it herec

import { HttpClientModule } from "@angular/common/http";
import { BookService } from "./book.service";

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule, //<<<< and here
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {}
