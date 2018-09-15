import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['I want to code all day', 'Join a food eating competition', 'Fly around the world']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
  }
}
