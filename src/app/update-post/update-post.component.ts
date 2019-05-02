import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  ngOnInit() {

  }

  constructor(
    private elementRef: ElementRef
  ) { }

  onSubmit(form: NgForm) {
    let formData = {
      userName: form.value.username,
      cmtentered: form.value.statusBox,
    }

    this.postList.push(formData);
    console.log(this.postList);
    form.reset();
  }

  onStatusReply(event, form: NgForm, ) {
    this.showCommentflag = true;
    this.replyFlag = true;
  }

  showChildMsg() {
    return true;
  }

  countPlusOne(idx) {

    this.countVote = Number(document.getElementById("countId_" + idx).innerText) + 1;
    //this.countVote = this.countVote + 1;
  }

  countMinusOne(idx) {
    this.countVote = Number(document.getElementById("countId_" + idx).innerText) - 1
  }

}
