import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { fuseAnimations } from '../../../../../core/animations';

@Component({
  selector     : 'fuse-primeng-calendar',
  templateUrl  : './primeng-calendar.component.html',
  styleUrls    : ['./primeng-calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class PrimeNgCalendarComponent implements OnInit, OnDestroy {

  public datetimeRangeForm: FormGroup;

  constructor(private fb: FormBuilder) {
      this.datetimeRangeForm = this.fb.group({
          datetimeFrom: [new Date(2017, 9, 26, 3, 0)]
      });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
