import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '../../../../../core/animations';

@Component({
  selector   : 'gow-kingdoms',
  templateUrl: './kingdoms.component.html',
  styleUrls  : ['./kingdoms.component.scss'],
  animations : fuseAnimations
})
export class GowKingdomsComponent implements OnInit
{
  constructor()
  {
  }

  ngOnInit() {
  }
}
