import { Component } from '@angular/core';
import { ArrowRightComponent } from '../../components/arrow-right/arrow-right.component';
import { SparkleComponent } from '../../components/sparkle/sparkle.component';

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

}
