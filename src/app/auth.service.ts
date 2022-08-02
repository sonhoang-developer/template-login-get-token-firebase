import { Injectable } from '@angular/core';
import { AuthCredential, GoogleAuthProvider, Auth, signInWithPopup, UserCredential, getAuth, AuthInstances } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: Auth) { }
  GoogleAuth(): any {
    return this.AuthLogin(new GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider: GoogleAuthProvider): any {
    const auth = getAuth();
    return signInWithPopup(auth, provider)
      .then((result: UserCredential) => {
        console.log(result);

        //const credential = provider.credentialFromResult(auth,result);
        console.log('You have been successfully logged in!')
      }).catch((error: any) => {
        console.log(error)
      })
  }
}

