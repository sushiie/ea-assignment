import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostModel } from './post-model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  private readonly postURL = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';

  getPosts() {
    // return this.http.get(this.postURL).subscribe(data => {
    //   data['hits'].map(res => {
    //     console.log(res);
    //     return this.getDataInPostModel(res);
    //   });
    // });
    return this.http.get(this.postURL).pipe(map(res => this.getDataInPostModel(res['hits'])));
  }

  getDataInPostModel(hits: any[]): PostModel[] {
    return hits.map(hit => new PostModel(hit.title, hit.url, hit.created_at, hit.author));
  }
}
