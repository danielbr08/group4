import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent{

  constructor() { }

  email: string;
  confirmEmail: string;

}
