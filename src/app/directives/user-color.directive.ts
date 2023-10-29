import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUserColor]',
  standalone: true
})
export class UserColorDirective implements OnInit{
  constructor(private el: ElementRef){
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.el.nativeElement.innerText = this.el.nativeElement.innerText.split(" ").length > 1 ? this.el.nativeElement.innerText.split(" ")[0].slice(0,1).toUpperCase() + this.el.nativeElement.innerText.split(" ")[1].slice(0,1).toUpperCase() : this.el.nativeElement.innerText.slice(0,2).toUpperCase();
      if(this.el.nativeElement.innerText.slice(0,1).toLowerCase() === 'a' || this.el.nativeElement.innerText.slice(0,1).toLowerCase() === 'j' || this.el.nativeElement.innerText.slice(0,1).toLowerCase() === 's'){
        this.el.nativeElement.classList.add('color1');
      }
      else if(this.el.nativeElement.innerText.slice(0,1).toLowerCase() === 'b' || this.el.nativeElement.innerText.slice(0,1).toLowerCase() === 'k' || this.el.nativeElement.innerText.slice(0,1).toLowerCase() === 't'){
        this.el.nativeElement.classList.add('color2');
      }
      else if(this.el.nativeElement.innerText.slice(0,1).toLowerCase() === 'c' || this.el.nativeElement.innerText.slice(0,1).toLowerCase() === 'l' || this.el.nativeElement.innerText.slice(0,1).toLowerCase() === 'u'){
        this.el.nativeElement.classList.add('color3');
      }
      else if(this.el.nativeElement.innerText.slice(0,1).toLowerCase() === 'd' || this.el.nativeElement.innerText.slice(0,1).toLowerCase() === 'm' || this.el.nativeElement.innerText.slice(0,1).toLowerCase() === 'v'){
        this.el.nativeElement.classList.add('color4');
      }
      else if(this.el.nativeElement.innerText.slice(0,1).toLowerCase() === 'e' || this.el.nativeElement.innerText.slice(0,1).toLowerCase() === 'n' || this.el.nativeElement.innerText.slice(0,1).toLowerCase() === 'w'){
        this.el.nativeElement.classList.add('color5');
      }
      else if(this.el.nativeElement.innerText.slice(0,1).toLowerCase() === 'f' || this.el.nativeElement.innerText.slice(0,1).toLowerCase() === 'o' || this.el.nativeElement.innerText.slice(0,1).toLowerCase() === 'x'){
        this.el.nativeElement.classList.add('color6');
      }
      else if(this.el.nativeElement.innerText.slice(0,1).toLowerCase() === 'g' || this.el.nativeElement.innerText.slice(0,1).toLowerCase() === 'p' || this.el.nativeElement.innerText.slice(0,1).toLowerCase() === 'y'){
        this.el.nativeElement.classList.add('color7');
      }
      else if(this.el.nativeElement.innerText.slice(0,1).toLowerCase() === 'h' || this.el.nativeElement.innerText.slice(0,1).toLowerCase() === 'q' || this.el.nativeElement.innerText.slice(0,1).toLowerCase() === 'z'){
        this.el.nativeElement.classList.add('color8');
      }
      else if(this.el.nativeElement.innerText.slice(0,1).toLowerCase() === 'i' || this.el.nativeElement.innerText.slice(0,1).toLowerCase() === 'r'){
        this.el.nativeElement.classList.add('color9');
      }
      else{
        this.el.nativeElement.classList.add('color9');
      }      
    }, 0);
  }
}