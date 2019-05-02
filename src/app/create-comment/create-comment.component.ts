import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  cmtList: Array<any> = [];
  replyFlag: Boolean = false;
  flag: boolean;
  isPostStatus: boolean;
  countVote: any = 0;
  @Input() showReplyMain: boolean;

  constructor() { }

  ngOnInit() {
    this.replyFlag = false;
  }


  onSubmit(form: NgForm) {
    let formData = {
      userName: form.value.username,
      cmtentered: form.value.commentBox,
      isPostStatus: true
    }

    this.cmtList.push(formData);
    this.replyFlag = true;
    form.reset();
  }


  onReply(form: NgForm) {
    this.replyFlag = false;
  }


  CountPlusOne(idx) {
    this.countVote = Number(document.getElementById("cmtId_" + idx).innerText) + 1;

  }

  CountMinusOne(idx) {
    this.countVote = Number(document.getElementById("cmtId_" + idx).innerText) - 1
  }

}