import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  items: any;
  searchValue: any;

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.getAllPosts();
  }

  //GetPost's
  getAllPosts() {
    this.http.getPost().subscribe((res) => {
      this.items = res;
    });
  }
}
