import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileTextComponent } from '../profile-text/profile-text.component';
import { IuserList } from '../../service/tooltip.interface';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CommonModule, ProfileTextComponent],
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit{
  @Input() userDetail: IuserList = null;
  constructor(){}

  ngOnInit(): void {
    
  }
}
