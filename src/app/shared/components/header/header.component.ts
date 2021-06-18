import { Component, OnInit } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private route: Router, 
  ) { }

  ngOnInit(): void {
    
  }

  logOut(){
    this.route.navigateByUrl('/signin')
  }

}
