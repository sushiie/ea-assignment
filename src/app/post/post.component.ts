import { Component, OnInit, TemplateRef } from '@angular/core';
import { PostService } from './post.service';
import { PostModel } from './post-model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postdata: PostModel[];
  modalRef: BsModalRef;
  selectedPost: PostModel;
  searchTitle = '';
  constructor(private postService: PostService,
    private modalService: BsModalService
    ) { }

  ngOnInit() {
    setInterval(() => this.fetchPosts(), 10000);
  }

  openPostModal(data, template: TemplateRef<any>) {
    this.selectedPost = data;
    this.modalRef = this.modalService.show(template);
  }

  fetchPosts() {
    this.postService.getPosts().subscribe(posts => {
      this.postdata = posts;
      // console.log(this.postdata);
    });
  }

}
