import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserProfile } from './profile/user-profile';
import { ProfileService } from './profile/profile.service';
import { Injectable } from '@angular/core';

@Injectable()
export class StoreFacadeService {

  private _profile: BehaviorSubject<UserProfile>;
  private _disableSubmitButton: BehaviorSubject<boolean>;
  private _counter: BehaviorSubject<boolean>;
  private _time: BehaviorSubject<number>;
  private store: {
    profile: UserProfile,
    counter: boolean,
    time: number,
    disableSubmitButton: boolean
  };

  constructor(private profileService: ProfileService) {
    this.store = {profile: new UserProfile(), counter: false, time: 0, disableSubmitButton: false};
    this._profile = new BehaviorSubject<UserProfile>(this.store.profile);
    this._counter = new BehaviorSubject<boolean>(false);
    this._time = new BehaviorSubject<number>(0);
    this._disableSubmitButton = new BehaviorSubject<boolean>(false);
  }

  get disableSubmitButton() {
    return this._disableSubmitButton.asObservable();
  }

  get time() {
    return this._time.asObservable();
  }
  get profile() {
    return this._profile.asObservable();
  }

  get counter() {
    return this._counter.asObservable();
  }

  counterEnded() {
    this.store.disableSubmitButton = true;
    this._disableSubmitButton.next(Object.assign({}, this.store).counter);
  }
  startCounting() {
    this.store.counter = true;
    this.store.time = 10;
    this.store.disableSubmitButton = false;
    this._disableSubmitButton.next(Object.assign({}, this.store).disableSubmitButton);
    this._counter.next(Object.assign({}, this.store).counter);
    this._time.next(Object.assign({}, this.store).time);
  }

  clearTimer() {
    this.store.counter = false;
    this.store.time = 0;
    this._counter.next(Object.assign({}, this.store).counter);
    this._time.next(Object.assign({}, this.store).time);
  }

  postProfile(id: String, profile: UserProfile) {
    this.profileService.postProfile(id, profile)
    .subscribe(data => {
        this.store.profile = data;
        this._profile.next(Object.assign({}, this.store).profile);
    }
      , error => console.log('Could not update user.'));
  }

  getProfile(id: String) {
    this.profileService.getProfile(id)
    .subscribe(data => {
      this.store.profile = data;
      this._profile.next(Object.assign({}, this.store).profile);
    }, error => console.log('Could not load todos.'));
  }
}
