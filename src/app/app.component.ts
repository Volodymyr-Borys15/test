import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  yo = 5;
  title = 'top';
  @ViewChild('canvas') public canvas: ViewChild | undefined;

  ngAfterViewInit(): void {
    console.log(this.canvas);
  }

  public stq(): void {
    const equality = new Observable();
    equality.subscribe((data) => console.log(data));
  }
}
