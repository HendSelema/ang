import { Component } from '@angular/core';
import { TitleService } from '../title.service';
TitleService
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(_TitleService:TitleService){
    // _TitleService.welcome()
  } 



}
