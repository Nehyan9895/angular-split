import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-section-two',
  standalone: true,
  imports: [],
  templateUrl: './section-two.component.html',
  styleUrl: './section-two.component.scss'
})
export class SectionTwoComponent {
loadMoreResults() {
throw new Error('Method not implemented.');
}

@Output() sectionSelected = new EventEmitter<string>(); // Output event

onSectionSelect() {
  // Emit 'lab-reports' as the selected section ID
  this.sectionSelected.emit('lab-reports');
}
}
