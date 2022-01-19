import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  formGroup = new FormGroup( {
    a: new FormControl(1),
    b: new FormControl()
  });
}
