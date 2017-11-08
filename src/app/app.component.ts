import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    const config = {
      apiKey: "AIzaSyCDN8byL46mRg3W3dkpl7vHVSIcddRHjWE",
      authDomain: "stiusso-f1833.firebaseapp.com",
      databaseURL: "https://stiusso-f1833.firebaseio.com",
      projectId: "stiusso-f1833",
      storageBucket: "stiusso-f1833.appspot.com",
      messagingSenderId: "290064398849"
    };
    firebase.initializeApp(config);
  }

}
