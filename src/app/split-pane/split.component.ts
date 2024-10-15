import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSplitModule } from 'angular-split';

@Component({
  selector: 'app-split',
  standalone: true,
  imports: [CommonModule, AngularSplitModule],
  templateUrl: './split.component.html',
  styleUrls: ['./split.component.css'],
})
export class SplitComponent {
  @Input() sections: any[] = []; // Sections passed from the main app component
  isHorizontal: boolean = true; // Default direction

  closePane(pane: any) {
    this.sections = this.sections.filter((section) => section.id !== pane.id);
  }

  minimizePane(pane: any) {
    pane.minimized = !pane.minimized;
  }
}
