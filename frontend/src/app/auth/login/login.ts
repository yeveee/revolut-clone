import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  successMessage = '';
  errorMessage = '';

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.authService.login(this.form.getRawValue()).subscribe({
      next: () => {
        this.successMessage = 'Logged in.';
        this.errorMessage = '';
      },
      error: (err) => {
        this.errorMessage = err.error?.message ?? 'Something went wrong';
        this.successMessage = '';
      }
    });
  }
}
