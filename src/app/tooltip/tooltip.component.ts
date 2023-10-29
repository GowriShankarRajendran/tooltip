import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipService } from '../service/tooltip.service';
import { UserColorDirective } from '../directives/user-color.directive';
import { IuserList } from '../service/tooltip.interface';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CommonModule, UserColorDirective],
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
