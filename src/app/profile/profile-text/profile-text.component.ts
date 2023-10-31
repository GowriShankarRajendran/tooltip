import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IuserList } from '../../service/tooltip.interface';

@Component({
  selector: 'app-profile-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-text.component.html',
  styleUrls: ['./profile-text.component.scss']
})
export class ProfileTextComponent implements OnChanges{
  @Input() userID: string = null;
  @Input() userName: string = null;
  @Input() userDetail: IuserList = null;
  profileColor: string = null;

  ngOnChanges(changes: SimpleChanges): void {
    this.userName = this.userName.split(" ").length > 1 ? this.userName.split(" ")[0].slice(0,1).toUpperCase() + this.userName.split(" ")[1].slice(0,1).toUpperCase() : this.userName.slice(0,2).toUpperCase();
    if(this.userName.slice(0,1).toLowerCase() === 'a' || this.userName.slice(0,1).toLowerCase() === 'j' || this.userName.slice(0,1).toLowerCase() === 's'){
      this.profileColor = 'color1';
    }
    else if(this.userName.slice(0,1).toLowerCase() === 'b' || this.userName.slice(0,1).toLowerCase() === 'k' || this.userName.slice(0,1).toLowerCase() === 't'){
      this.profileColor = 'color2';
    }
    else if(this.userName.slice(0,1).toLowerCase() === 'c' || this.userName.slice(0,1).toLowerCase() === 'l' || this.userName.slice(0,1).toLowerCase() === 'u'){
      this.profileColor = 'color3';
    }
    else if(this.userName.slice(0,1).toLowerCase() === 'd' || this.userName.slice(0,1).toLowerCase() === 'm' || this.userName.slice(0,1).toLowerCase() === 'v'){
      this.profileColor = 'color4';
    }
    else if(this.userName.slice(0,1).toLowerCase() === 'e' || this.userName.slice(0,1).toLowerCase() === 'n' || this.userName.slice(0,1).toLowerCase() === 'w'){
      this.profileColor = 'color5';
    }
    else if(this.userName.slice(0,1).toLowerCase() === 'f' || this.userName.slice(0,1).toLowerCase() === 'o' || this.userName.slice(0,1).toLowerCase() === 'x'){
      this.profileColor = 'color6';
    }
    else if(this.userName.slice(0,1).toLowerCase() === 'g' || this.userName.slice(0,1).toLowerCase() === 'p' || this.userName.slice(0,1).toLowerCase() === 'y'){
      this.profileColor = 'color7';
    }
    else if(this.userName.slice(0,1).toLowerCase() === 'h' || this.userName.slice(0,1).toLowerCase() === 'q' || this.userName.slice(0,1).toLowerCase() === 'z'){
      this.profileColor = 'color8';
    }
    else if(this.userName.slice(0,1).toLowerCase() === 'i' || this.userName.slice(0,1).toLowerCase() === 'r'){
      this.profileColor = 'color9';
    }
    else{
      this.profileColor = 'color9';
    }
  }
}
