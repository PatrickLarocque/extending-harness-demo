import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { FormField, email, form, min, required, submit } from '@angular/forms/signals';
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
  imports: [FormField],
  templateUrl: './claim-intake.component.html',
  styleUrl: './claim-intake.component.css'
})
export class ClaimIntakeComponent {
  private readonly http = inject(HttpClient);

  readonly intake = signal<ClaimIntake>({
    claimantName: '',
    email: '',
    policyNumber: '',
    lossType: 'Auto collision',
    incidentDate: '',
    coveredLoss: 0,
    deductible: 500
  });

  readonly claimForm = form(this.intake, (path) => {
    required(path.claimantName, { message: 'Claimant name is required.' });
    required(path.email, { message: 'Email is required.' });
    email(path.email, { message: 'Enter a valid email address.' });
    required(path.policyNumber, { message: 'Policy number is required.' });
    required(path.incidentDate, { message: 'Incident date is required.' });
    min(path.coveredLoss, 0.01, { message: 'Covered loss must be greater than zero.' });
    min(path.deductible, 0, { message: 'Deductible cannot be negative.' });
  });

  readonly submitting = signal(false);
  readonly submittedClaimId = signal<string | null>(null);
  readonly apiError = signal<string | null>(null);
  readonly canSubmit = computed(() => !this.claimForm().invalid() && !this.submitting());

  async submitIntake(event: SubmitEvent) {
    event.preventDefault();
    this.apiError.set(null);

    await submit(this.claimForm, async () => {
      this.submitting.set(true);
      try {
        const result = await firstValueFrom(
            this.http.post<{ id: string }>('/api/claims', this.intake()));
        this.submittedClaimId.set(result.id);
      } catch {
        this.apiError.set('The API is unavailable. Start claims-api or retry later.');
      } finally {
        this.submitting.set(false);
      }
    });
  }
}
