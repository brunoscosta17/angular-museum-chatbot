import { Component } from '@angular/core';
import { ArrowRightComponent } from '../../components/icons/arrow-right/arrow-right.component';
import { SparkleComponent } from '../../components/icons/sparkle/sparkle.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ArrowRightComponent,
    SparkleComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router) { }

  navigateChat(): void {
    this.router.navigate(['/chat']);
  }

}
