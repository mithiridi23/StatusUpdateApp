import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { CommonService } from '../common.service'

@Component({
  selector: 'app-commentmodal',
  templateUrl: './commentmodal.component.html',
  styleUrls: ['./commentmodal.component.css']
})
export class CommentmodalComponent implements OnInit {


  cmtList: Array<any> = [];
  isPostStatus: boolean;
  @Input() showReplyMain: boolean;
  closeResult: string;
  display = 'none';
  constructor(private commonService: CommonService) { }


  ngOnInit() {
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
  }

  countPlusOne(idx, id) {
    this.commonService.incrementLike(idx, id);
  }

  countMinusOne(idx, id) {
    this.commonService.dislike(idx, id);
  }

  openModal() {
    this.display = "block";
  }

  onCloseHandled() {
    this.display = 'none';
  }

}





