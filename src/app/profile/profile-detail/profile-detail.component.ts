import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileTextComponent } from '../profile-text/profile-text.component';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { TooltipService } from '../../service/tooltip.service';
import { IuserList } from '../../service/tooltip.interface';

@Component({
  selector: 'app-profile-detail',
  standalone: true,
  imports: [CommonModule, ProfileTextComponent, TooltipComponent],
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit, OnChanges{
  @Input() uniqueID: number = null;
  @Input() userID: string | number = null;
  @Input() userName: string = null;
  @Input() profileInfo: boolean = false;
  userDetail: IuserList = null;
  constructor(private tooltipService: TooltipService){}

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['userID']){
      this.getUserList();
    }
  }

  getUserList(){
    let url: string = `https://jsonplaceholder.typicode.com/users/${this.userID}`;
    this.tooltipService.getData(url).subscribe({
      next: (response) => {
        this.userDetail = response;
        //console.log(response);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
