import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from '../common.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {


  cmtList: Array<any> = [];
  isPostStatus: boolean;
  @Input() showReplyMain: boolean;
  @Input() prtIndex: any;

  constructor(private commonService: CommonService) { }
  ngOnInit() {
    console.log(this.prtIndex)
  }
  onSubmit(form: NgForm) {
    let formData = {
      userName: form.value.username,
      cmtentered: form.value.commentBox,
      isPostStatus: true
    }

    this.cmtList.push(formData);
    form.reset();
    this.onCloseHandled();
    this.showReplyMain = false;
  }

  countPlusOne(idx, id) {
    this.commonService.incrementLike(idx, id);
  }

  countMinusOne(idx, id) {
    this.commonService.dislike(idx, id);
  }

  onCloseHandled() {
    this.showReplyMain = false;
  }

}