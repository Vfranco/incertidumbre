import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-readbook',
  templateUrl: './readbook.page.html',
  styleUrls: ['./readbook.page.scss'],
})
export class ReadbookPage implements OnInit {

  bookParam: string = '';
  darkMode: boolean = false;

  constructor(private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.bookParam = this.getParam();
  }

  getParam(): string {
    return this.activeRoute.snapshot.paramMap.get('cover');
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }

  goToChapters(): void {
    this.router.navigate(['/home/landing']);
  }

  setDarkMode(): void {
    this.darkMode = !this.darkMode;
  }
}
