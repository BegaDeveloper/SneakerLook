import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  p: Post;
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.p = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
      price: this.route.snapshot.params['price'],
      place: this.route.snapshot.params['place'],
      image: this.route.snapshot.params['image'],
      date: this.route.snapshot.params['date'],
      desc: this.route.snapshot.params['desc'],
    };
    /*this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      (this.p.id = params['id']),
        (this.p.name = params['name']),
        (this.p.price = params['price']),
        (this.p.place = params['place']),
        (this.p.image = params['image']),
        (this.p.date = params['date']),
        (this.p.desc = params['desc']);
    });*/
  }

  /*ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }*/
}
