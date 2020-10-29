import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core' ;
@Component({
  selector: 'app-resume-profile',
  templateUrl: './resume-profile.component.html',
  styleUrls: ['./resume-profile.component.css']
})
export class ResumeProfileComponent implements OnInit {

@Input() profile ;
  constructor() { }

  ngOnInit() {
  }

}