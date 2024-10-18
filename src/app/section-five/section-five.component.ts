import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-section-five',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './section-five.component.html',
  styleUrl: './section-five.component.scss'
})
export class SectionFiveComponent {
  @Input() vitalEntries: any[] = [];
  @Output() vitalEntryChanged = new EventEmitter<any>();

  addVitalEntry() {
    this.vitalEntries.push({
      dateAndTime: 'Now',
      temp: null,
      pulse: null,
      resp: null,
      bp: null,
      weight: null,
      height: null,
      bmi: null,
      bsa: null,
      hr: null,
      headC: null,
      bw3yrs: null,
      wc: null,
      hipC: null,
      midArmC: null,
      headNC: null,
      spO2: null,
      crt: null,
      bgLevel: null,
      painScore: null,
      ews: null
    });
  }

  onVitalInputChange(index: number, field: keyof any, event: Event) {
    const target = event.target as HTMLInputElement;
  
    if (field === 'bp' || field === 'wc') {
      this.vitalEntries[index][field] = target.value.trim() === '' ? null : target.value; // Assign null for empty strings
    } else {
      const value = parseFloat(target.value);
      this.vitalEntries[index][field] = isNaN(value) ? null : value;
    }
  
    this.vitalEntryChanged.emit(this.vitalEntries[index]);
  }
  
  
}

