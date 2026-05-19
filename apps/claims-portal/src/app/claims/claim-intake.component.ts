import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

type ClaimIntake = {
  claimantName: string;
  email: string;
  policyNumber: string;
  lossType: string;
  incidentDate: string;
  coveredLoss: number;
  deductible: number;
};

@Component({
  selector: 'app-claim-intake',
  imports: [ReactiveFormsModule],
  templateUrl: './claim-intake.component.html',
  styleUrl: './claim-intake.component.css'
})
export class ClaimIntakeComponent {
  private readonly http = inject(HttpClient);
  private readonly formBuilder = inject(FormBuilder);

  readonly claimForm = this.formBuilder.nonNullable.group({
    claimantName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    policyNumber: ['', Validators.required],
    lossType: ['Auto collision'],
    incidentDate: ['', Validators.required],
    coveredLoss: [0, Validators.min(0.01)],
    deductible: [500, Validators.min(0)]
  });

  readonly submitting = signal(false);
  readonly submittedClaimId = signal<string | null>(null);
  readonly apiError = signal<string | null>(null);

  canSubmit(): boolean {
    return this.claimForm.valid && !this.submitting();
  }

  async submitIntake() {
    this.apiError.set(null);

    if (this.claimForm.invalid) {
      this.claimForm.markAllAsTouched();
      return;
    }

    const { email: _email, ...payload } = this.claimForm.getRawValue() satisfies ClaimIntake;

    this.submitting.set(true);
    try {
      const result = await firstValueFrom(this.http.post<{ id: string }>('/api/claims', payload));
      this.submittedClaimId.set(result.id);
    } catch {
      this.apiError.set('The API is unavailable. Start claims-api or retry later.');
    } finally {
      this.submitting.set(false);
    }
  }
}
