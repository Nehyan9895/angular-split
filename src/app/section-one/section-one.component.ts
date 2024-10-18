import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-section-one',
  standalone: true,
  imports: [],
  templateUrl: './section-one.component.html',
  styleUrl: './section-one.component.scss'
})
export class SectionOneComponent {
  @Output() sectionSelected = new EventEmitter<string>(); // Output event

  onSectionSelect() {
    // Emit 'visit-summary' as the selected section ID
    this.sectionSelected.emit('visit-summary');
  }
}
