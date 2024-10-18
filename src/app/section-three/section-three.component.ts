import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule


@Component({
  selector: 'app-section-three',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './section-three.component.html',
  styleUrl: './section-three.component.scss'
})
export class SectionThreeComponent {
  @Input() chiefComplaints: string = '';
  @Input() physicalExamination: string = '';
  @Input() specialComments: string = '';
  @Input() treatmentAndPlan: string = '';

  @Output() chiefComplaintsChange = new EventEmitter<string>();
  @Output() physicalExaminationChange = new EventEmitter<string>();
  @Output() specialCommentsChange = new EventEmitter<string>();
  @Output() treatmentAndPlanChange = new EventEmitter<string>();

  onChiefComplaintsChange(value: string) {
    this.chiefComplaints = value;
    this.chiefComplaintsChange.emit(value);
  }

  onPhysicalExaminationChange(value: string) {
    this.physicalExamination = value;
    this.physicalExaminationChange.emit(value);
  }

  onSpecialCommentsChange(value: string) {
    this.specialComments = value;
    this.specialCommentsChange.emit(value);
  }

  onTreatmentAndPlanChange(value: string) {
    this.treatmentAndPlan = value;
    this.treatmentAndPlanChange.emit(value);
  }
}
