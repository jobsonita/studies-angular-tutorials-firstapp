import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';


@Component({
  selector: 'app-details',
  template: `<p>details works! {{ housingLocationId }}</p>`,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId?: number;
  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
  }
}
