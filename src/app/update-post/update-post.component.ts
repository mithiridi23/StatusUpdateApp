import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommentmodalComponent } from '../commentmodal/commentmodal.component';

import { CommonService } from '../common.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  private postList: Array<any> = [];
  public cmtentered: Object;
  public showCommentflag: boolean;
  private countVote: any = 0;
  public replyFlag: boolean;


  @ViewChild(CommentmodalComponent)
  private commentModalComponent: CommentmodalComponent;
  ngOnInit() {
  }

  constructor(private commonService: CommonService) { }

  onSubmit(form: NgForm) {
    let formData = {
      userName: form.value.username,
      cmtentered: form.value.statusBox,
    }

    this.postList.push(formData);
    console.log(this.postList);
    form.reset();
  }

  onStatusReply(event, form: NgForm) {
    this.showCommentflag = true;
    this.replyFlag = true;
    this.commentModalComponent.openModal();
  }

  showChildMsg() {
    return true;
  }

  countPlusOne(idx, id) {
    this.commonService.incrementLike(idx, id);
  }

  countMinusOne(idx, id) {
    this.commonService.dislike(idx, id);
  }

  open(content) {
    // this.commentModalComponent.open(content);
  }



}
