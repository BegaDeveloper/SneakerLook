import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  //Get Post's
  getPost(): Observable<Post> {
    return this.http.get<Post>('http://localhost:3000/posts');
  }
}
