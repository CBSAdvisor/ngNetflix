import { FuseNavigationModelInterface } from '../core/components/navigation/navigation.model';

export class FuseNavigationModel implements FuseNavigationModelInterface {
  public model: any[];

  constructor() {
    this.model = [
      {
        'id': 'applications',
        'title': 'Applications',
        'type': 'group',
        'icon': 'apps',
        'children': [
          {
            'id': 'GemsOfWar',
            'title': 'Gems Of War',
            'type': 'collapse',
            'icon': 'dashboard',
            'children': [
              {
                'id': 'kingdoms',
                'title': 'Kingdoms',
                'type': 'item',
                'url': '/apps/gemsofwar/kingdoms'
              }
            ]
          }
        ]
      },
      {
        'id': 'sandbox',
        'title': 'Sandbox',
        'type': 'group',
        'icon': 'apps',
        'children': [
          {
            'id': 'primeNG',
            'title': 'PrimeNG',
            'type': 'collapse',
            'icon': 'layers',
            'children': [
              {
                'id': 'primeng-calendar',
                'title': 'Calendar',
                'type': 'item',
                'icon': 'today',
                'url': '/sandbox/primeng/calendar'
              }
            ]
          }]
      }
    ];
  }
}

