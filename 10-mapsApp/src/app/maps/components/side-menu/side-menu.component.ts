import { Component } from '@angular/core';
import { FullScreenPageComponent } from '../../pages/full-screen-page/full-screen-page.component';

interface MenuItem {
  route: string;
  name: string;
}

@Component({
  selector: 'maps-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    { route: '/maps/fullscreen', name: 'FullScreen',      },
    { route: '/maps/zoom-range', name: 'ZoomRange',      },
    { route: '/maps/markers', name: 'Markers',      },
    { route: '/maps/properties', name: 'Houses',      },
  ];

}
