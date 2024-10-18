import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-seven',
  standalone: true,
  imports: [],
  templateUrl: './section-seven.component.html',
  styleUrl: './section-seven.component.scss'
})
export class SectionSevenComponent {
  @Input() noKnownAllergies = false;
  @Input() drugAllergies = [
    { genericName: 'GABAPENTIN', brandName: 'NEW TEST ENTRY TD', remarks: 'allergy', checked: false },
    { genericName: 'A HEPARINOIDEQ', brandName: '', remarks: '', checked: true },
    { genericName: 'Amoxicillin', brandName: 'Amoxil', remarks: 'Rash', checked: false },
    { genericName: 'Ibuprofen', brandName: 'Advil', remarks: 'Stomach upset', checked: true },
  ];
  @Input() otherAllergies = [
    { allergyDetails: 'Food Allergies', allergyItem: 'Peanuts', remarks: 'Anaphylactic reaction', checked: true },
    { allergyDetails: 'Environmental Allergies', allergyItem: 'Pollen', remarks: 'Seasonal allergies', checked: false },
    { allergyDetails: 'Latex Allergies', allergyItem: '', remarks: '', checked: true },
  ];

  toggleAllergy(index: number) {
    this.drugAllergies[index].checked = !this.drugAllergies[index].checked;
    this.otherAllergies[index].checked = !this.otherAllergies[index].checked;
  }
}
