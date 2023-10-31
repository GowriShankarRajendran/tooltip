import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProfileDetailComponent } from '../profile/profile-detail/profile-detail.component';
import { TooltipService } from '../service/tooltip.service';
import { IuserList } from '../service/tooltip.interface';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ProfileDetailComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{
  userList: IuserList[] = [];
  constructor(private tooltipService: TooltipService){}

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList(){
    let url: string = 'https://jsonplaceholder.typicode.com/users';
    this.tooltipService.getData(url).subscribe({
      next: (response) => {
        this.userList = response;
        //console.log(response);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
