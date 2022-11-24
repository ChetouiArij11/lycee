import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EleveService } from '../service/eleve.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isAuth = false;
  constructor(private EleveService : EleveService, private route: Router) { }
  ngOnInit(): void {
    this.isAuth = this.EleveService.isAuth;
  }

  onLogin() {
    setTimeout(() => {
      this.EleveService.isAuth = !this.EleveService.isAuth;
      this.isAuth = !this.isAuth;

      if (this.isAuth) {
        this.route.navigateByUrl('eleve');
      }
    }, 3000);

  }


}
