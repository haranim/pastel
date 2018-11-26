import { Component, OnChanges, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Episode } from '../app-model'
import { AppService } from '../app.service';



@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})


export class EpisodesComponent {

  public dataSource: Episode[];
  columnsToDisplay = ['id', 'title', 'duration', 'rating'];
  expandedElement: Episode;

  constructor(public service: AppService) {
    this.LoadDataAsync();
   
  }

  private LoadDataAsync = async () => {
    this.dataSource = await this.service.getEpisodes();
  };


}


