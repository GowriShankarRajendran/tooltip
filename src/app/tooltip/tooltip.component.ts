import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileTextComponent } from '../profile-text/profile-text.component';
import { TooltipService } from '../service/tooltip.service';
import { IuserList } from '../service/tooltip.interface';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CommonModule, ProfileTextComponent],
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit{
  @Input() userID: number = 0;
  userDetail: IuserList = null;
  constructor(private tooltipService: TooltipService){}

  ngOnInit(): void {
    this.getUserList();
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
