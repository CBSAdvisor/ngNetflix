export class NavigationModel {
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
      }
    ];
  }
}

