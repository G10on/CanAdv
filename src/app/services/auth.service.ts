import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }
  async signup(email: string, password: string) {
      return await this.auth.createUserWithEmailAndPassword(email, password);
  }

  async login(email: string, password: string) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }

  async getUserId() {
    const currentUser = await this.auth.currentUser;
    if (currentUser) {
      return currentUser.uid;
    } else {
      return null;
    }
  }
}
