import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  successMessage = '';
  errorMessage = '';

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.authService.register(this.form.getRawValue()).subscribe({
      next: () => {
        this.successMessage = 'Account created.';
        this.errorMessage = '';
        this.form.reset();
      },
      error: (err) => {
        this.errorMessage = err.error?.message ?? 'Something went wrong';
        this.successMessage = '';
      }
    });
  }
}
