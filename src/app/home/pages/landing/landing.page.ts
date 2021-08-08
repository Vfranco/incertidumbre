import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mockData } from 'src/app/core/data/mockdata';
import { Books } from 'src/app/core/interfaces/book';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  myBooks: Books = mockData;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToBook(coverBook: string) {
    this.router.navigate(['/home/readbook', coverBook]);
  }
}
