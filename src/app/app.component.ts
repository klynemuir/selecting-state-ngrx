import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  status$: Observable<any>
  constructor(private _store: Store<any>) {}
  loign() {
    this._store.dispatch({type: 'Login'})
  }
  logout() {
    this._store.dispatch({type: 'Logout'})
  }
  ngOnInit() {
    this.status$ = this._store.select(state => state.authentication)
  }
}
