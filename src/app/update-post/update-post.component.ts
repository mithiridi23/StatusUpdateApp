import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommentmodalComponent } from '../commentmodal/commentmodal.component';

import { CommonService } from '../common.service';
import { ChangeDetectionStrategy } from '@angular/core'
import { CreateCommentComponent } from '../create-comment/create-comment.component';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdatePostComponent implements OnInit {

  private postList: any = [];
  public cmtentered: Object;
  public showCommentflag: boolean;
  public replyFlag: boolean;


  @ViewChild(CreateCommentComponent)
  private commentModalComponent: CreateCommentComponent;
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
    this.replyFlag = false;
    form.reset();
  }

  onStatusReply(event) {
    this.showCommentflag = true;
    this.replyFlag = true;
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


}
