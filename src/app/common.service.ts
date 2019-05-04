import { Injectable } from '@angular/core';
import { Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private poscolor: any = 'green';
  private negColor: any = 'red';
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  incrementLike(idx, id) {
    let val = Number(document.getElementById(id + idx).innerText) + 1;
    this.changeColor(idx, val, id);
    document.getElementById(id + idx).innerText = String(val);
  }


  changeColor(idx, val, id) {
    if (val < 0) {
      this.renderer.addClass(document.getElementById(id + idx), this.negColor);
    } else if (val > 4) {
      this.renderer.addClass(document.getElementById(id + idx), this.poscolor);
    } else if (val > 1 && val < 5) {
      this.renderer.removeClass(document.getElementById(id + idx), this.poscolor);
    } else if (val == 0) {
      this.renderer.removeClass(document.getElementById(id + idx), this.negColor);
    }
  }

  dislike(idx, id) {
    let val = Number(document.getElementById(id + idx).innerText);
    val = val - 1;
    this.changeColor(idx, val, id);
    document.getElementById(id + idx).innerText = String(val);
  }



}
