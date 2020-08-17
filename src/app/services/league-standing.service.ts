import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeagueStanding } from '../common/league-standing'

@Injectable({
  providedIn: 'root'
})
export class LeagueStandingService {

  private baseUrl='http://localhost:8081/football/standing'
  constructor(private httpClient:HttpClient) { }

  getLeagueStanding():Observable<LeagueStanding>{
    
  }
}
