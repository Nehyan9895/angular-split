import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { AngularSplitModule } from 'angular-split';

interface Pane {
  id: string;
  name: string;
  size: number;
  minimized?: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AngularSplitModule, CommonModule, DragDropModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  sections = [
    { id: 'section1', name: 'Section 1', content: 'Content for Section 1' },
    { id: 'section2', name: 'Section 2', content: 'Content for Section 2' },
    { id: 'section3', name: 'Section 3', content: 'Content for Section 3' },
    { id: 'section4', name: 'Section 4', content: 'Content for Section 4' },
  ];

  splitPanes: Pane[] = [];
  activeSection: string = '';
  menuVisible: boolean = true;
  splitDirection: 'horizontal' | 'vertical' = 'horizontal'; // Default direction is vertical

  ngOnInit() {
    this.addPane(this.sections[0]);
  }

  onDrop(event: CdkDragDrop<any>) {
    const draggedSection = this.sections[event.previousIndex];
    this.addPane(draggedSection);
    this.scrollToSection(draggedSection.id);
  }

  addPane(section: any) {
    if (this.splitPanes.length < 3 && !this.splitPanes.find((p) => p.id === section.id)) {
      this.splitPanes.push({
        id: section.id,
        name: section.name,
        size: 1 / (this.splitPanes.length + 1),
      });
      this.splitPanes.forEach((pane) => (pane.size = 1 / this.splitPanes.length));
    }
    this.menuVisible = this.splitPanes.length < 2;
  }

  closePane(pane: Pane) {
    this.splitPanes = this.splitPanes.filter((p) => p.id !== pane.id);
    this.splitPanes.forEach((pane) => (pane.size = 1 / this.splitPanes.length));
    this.menuVisible = this.splitPanes.length < 2;
  }

  minimizePane(pane: Pane) {
    pane.minimized = !pane.minimized;
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  onPaneScroll(event: any, pane: Pane) {
    const paneElement = event.target;
    const sectionElements = paneElement.querySelectorAll('.section');
    sectionElements.forEach((sectionElement: HTMLElement) => {
      const rect = sectionElement.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        this.activeSection = sectionElement.id;
      }
    });
  }

  scrollToSection(sectionId: string) {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onSectionClick(section: any) {
    if (this.splitPanes.length === 1) {
      this.scrollToSection(section.id);
    }
  }

  toggleSplitDirection() {
    this.splitDirection = this.splitDirection === 'vertical' ? 'horizontal' : 'vertical';
  }
}
