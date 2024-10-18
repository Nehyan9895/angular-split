import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Diagnosis {
  sl: number;
  diagnosisName: string;
  icd: string;
  level: string;
  type: string;
  isEditable: boolean;
}

@Component({
  selector: 'app-section-four',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-four.component.html',
  styleUrl: './section-four.component.scss'
})
export class SectionFourComponent {
  diagnoses: Diagnosis[] = [
    {
      sl: 1,
      diagnosisName: '(Idiopathic) normal pressure hydrocephalus',
      icd: 'G91.2',
      level: 'Principal',
      type: 'Provisional',
      isEditable: true
    },
    {
      sl: 2,
      diagnosisName: '(Induced) termination of pregnancy with other complications',
      icd: 'O04.89',
      level: 'Secondary',
      type: 'Provisional',
      isEditable: true
    },
    // Add more diagnoses here...
  ];
  @Output() addDiagnosis = new EventEmitter<void>();
  @Output() deleteDiagnosis = new EventEmitter<number>();
  @Output() editDiagnosis = new EventEmitter<Diagnosis>();

  add() {
    this.addDiagnosis.emit();
  }

  delete(sl: number) {
    this.deleteDiagnosis.emit(sl);
  }

  edit(diagnosis: Diagnosis) {
    this.editDiagnosis.emit(diagnosis);
  }
}
