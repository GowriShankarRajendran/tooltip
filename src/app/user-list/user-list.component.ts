import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProfileDetailComponent } from '../profile/profile-detail/profile-detail.component';
import { TooltipService } from '../service/tooltip.service';
import { IuserList } from '../service/tooltip.interface';
import { io } from "socket.io-client";
import { OnlineUserService } from '../service/online-user/online-user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ProfileDetailComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{
  userList: IuserList[] = [];
  socket = io('http://localhost:6204');
  onlineUser: IuserList[] = [];
  selectedUser: number = 0;
  constructor(private tooltipService: TooltipService, private onlineUserService: OnlineUserService){}

  ngOnInit(): void {
    this.getUserList();
    this.socket.on("connect", () => {
      console.log(this.socket.id);
    });
  }

  getUserList(){
    let url: string = 'https://jsonplaceholder.typicode.com/users';
    this.tooltipService.getData(url).subscribe({
      next: (response) => {
        this.userList = response;
        this.showOnlineUser();
        //console.log(response);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getSelectedUser(event: any){
    this.selectedUser = +event.target.value;
    let userRegister = {socketId: this.socket.id, userID: event.target.value};
    this.socket.emit("userRegister", JSON.stringify(userRegister));
    this.showOnlineUser();
  }

  showOnlineUser(){
    if(this.userList && this.userList.length > 0){
      this.socket.on("onlineUser", (data) => {
        let getOnlineUser = JSON.parse(data);
        this.onlineUser = [];
        getOnlineUser.map((val: any) => {
          let findUser = this.userList.find(value => value.id == val.userID);
          findUser ? this.onlineUser.push(findUser) : null;
        });
        this.onlineUserService.changeMessage(getOnlineUser);
      });
    }
  }
}
