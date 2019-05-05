import { Component, OnInit, Input, ViewChild } from '@angular/core';
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
  replyFlag: Boolean = false;
  flag: boolean;
  isPostStatus: boolean;
  countVote: any = 0;
  @Input() showReplyMain: boolean;
  @Input() iddx: any


  constructor(private commonService: CommonService) { }


  closeResult: string;
  display = 'none';

  ngOnInit() {
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
    this.onCloseHandled();
  }

  onReply(form: NgForm) {
    this.replyFlag = false;
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

  // open(content) {
  //   this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }
}





