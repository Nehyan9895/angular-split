import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-six',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-six.component.html',
  styleUrl: './section-six.component.scss'
})
export class SectionSixComponent {
  @Input() noKnownAllergies = false;
  @Input() drugAllergies = [
    { genericName: 'GABAPENTIN', brandName: 'NEW TEST ENTRY TD', remarks: 'allergy', checked: false },
    { genericName: 'A HEPARINOIDEQ', brandName: '', remarks: '', checked: true },
  ];
  @Input() otherAllergies = [
    { allergyDetails: 'Food Allergies', allergyItem: 'test', remarks: 'test', checked: true },
  ];

  toggleAllergy(index: number) {
    this.drugAllergies[index].checked = !this.drugAllergies[index].checked;
    this.otherAllergies[index].checked = !this.otherAllergies[index].checked;
  }
}
