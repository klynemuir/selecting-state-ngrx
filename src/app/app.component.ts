import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  status$: Observable<any>
  constructor(private _store: Store<any>) {
    this.status$ = this._store.select('authentication')
  }
  loign() {
    this._store.dispatch({type: 'Login'})
  }
  logout() {
    this._store.dispatch({type: 'Logout'})
  }
}
