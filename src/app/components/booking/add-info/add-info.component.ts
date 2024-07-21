import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-info',
  templateUrl: './add-info.component.html',
  styleUrls: ['./add-info.component.css']
})
export class AddInfoComponent {
  @Input() hotel: any;
  @Output() infoAdded = new EventEmitter<any>();

  newDescription: string = '';
  newServices: string = '';
  newImages: string = '';
  newWhyVisit: string = '';

  addInfo() {
    const newInfo = {
      description: this.newDescription,
      services: this.newServices.split(','),
      images: this.uniqueImages(this.newImages.split(',')),
      whyVisit: this.newWhyVisit
    };
    this.infoAdded.emit(newInfo);
    this.clearForm();
  }

  clearForm() {
    this.newDescription = '';
    this.newServices = '';
    this.newImages = '';
    this.newWhyVisit = '';
  }

  uniqueImages(images: string[]): string[] {
    return Array.from(new Set(images));
  }
}
