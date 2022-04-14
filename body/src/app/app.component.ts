import { Component } from '@angular/core';

import * as singleSpa from 'single-spa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'body';

  teste() {
    singleSpa.navigateToUrl('/teste');
  }
}
