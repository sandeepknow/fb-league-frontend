import { Component, OnInit } from '@angular/core';
import { LeagueStandingService } from '../services/league-standing.service';
import { Observable } from 'rxjs';
import { LeagueStanding } from '../common/league-standing';

@Component({
  selector: 'app-league-standing',
  templateUrl: './league-standing.component.html',
  styleUrls: ['./league-standing.component.css']
})
export class LeagueStandingComponent implements OnInit {
  leagueStanding:LeagueStanding;
  countryName='England';
  leagueName='Championship';
  teamName='West Brom';
  constructor(private leagueStandingService:LeagueStandingService) { }

  ngOnInit(): void {
    
  }

  getLeagueStanding(countryName:string, leagueName:string, teamName:string){
    this.leagueStandingService.getLeagueStanding(countryName,leagueName,teamName).subscribe((data) => this.leagueStanding=data as any);
  }
}
