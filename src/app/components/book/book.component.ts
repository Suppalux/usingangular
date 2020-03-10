import { Component, OnInit } from '@angular/core';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  //[x: string]: any;
  //[x: string]: any;
  //public isbn: string;
  //public title: string;
  //public price: number;
  result: any;




  constructor(private _bookService: BookService) {}

  ngOnInit(){
    //this.isbn = '1111';
    //this.title = 'พื้นฐานการใช้งาน C#';
    //this.price = 399;
    this.getAllBooks();
  }

  getAllBooks() {
    this._bookService.getBooks().then(data => {
      this.result = data;
    }, err => {
      console.log(err);
          });
  }
}
