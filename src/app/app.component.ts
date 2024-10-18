import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { AngularSplitModule } from 'angular-split';
import { SectionOneComponent } from "./section-one/section-one.component";
import { SectionTwoComponent } from "./section-two/section-two.component";
import { SectionThreeComponent } from "./section-three/section-three.component";
import { SectionFourComponent } from "./section-four/section-four.component";
import { SectionFiveComponent } from "./section-five/section-five.component";
import { SectionSixComponent } from "./section-six/section-six.component";
import { SectionSevenComponent } from "./section-seven/section-seven.component";
import { SectionEightComponent } from "./section-eight/section-eight.component";
import { SectionNineComponent } from "./section-nine/section-nine.component";
import { SectionTenComponent } from "./section-ten/section-ten.component";
import { SectionElevenComponent } from "./section-eleven/section-eleven.component";

interface Pane {
  id: string;
  name: string;
  size: number;
  minimized?: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AngularSplitModule, CommonModule, DragDropModule, SectionOneComponent, SectionTwoComponent, SectionThreeComponent, SectionFourComponent, SectionFiveComponent, SectionSixComponent, SectionSevenComponent, SectionEightComponent, SectionNineComponent, SectionTenComponent, SectionElevenComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) {}


  sections = [
    { id: 'visit-summary', name: 'Visit Summary' },
    { id: 'lab-reports', name: 'Lab Reports' },
    { id: 'Complaints', name: 'Complaints' },
    { id: 'diagnosis', name: 'Diagnosis' },
    { id: 'vitalSign', name: 'Vital Signs' },
    { id: 'allergies', name: 'Allergies' },
    { id: 'treatments', name: 'Admission Requests' },
    { id: 'anaesthesia', name: 'Anaesthesia Record' },
    { id: 'surgery-request', name: 'Surgery Request' },
    { id: 'operation-notes', name: 'Operation Notes' }
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
    setTimeout(() => {
      const paneElement = event.target;
      const sectionElements = paneElement.querySelectorAll('.section');
      
      sectionElements.forEach((sectionElement: HTMLElement) => {
        const rect = sectionElement.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          this.activeSection = sectionElement.id;
        }
      });
    }, 0); // Delay to ensure proper rendering
  }
  

  
  scrollToSection(sectionId: string) {
    this.cdr.detectChanges();  // Manually trigger change detection
    setTimeout(() => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn(`Section with ID ${sectionId} not found`);
      }
    }, 100); // Delay the scroll slightly
  }
  
  
  
  

  onSectionClick(section: any) {
    console.log('Scrolling to section:', section.id);  // Add this to debug
    this.scrollToSection(section.id);
  }
  

  toggleSplitDirection() {
    this.splitDirection = this.splitDirection === 'vertical' ? 'horizontal' : 'vertical';
  }
}
