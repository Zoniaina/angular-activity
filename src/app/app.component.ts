import {Component, OnInit} from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'blog-activity Openclassrooms';

  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyC0EAbOff1UL5Db8524QBYkwZaWmUIVqfk",
      authDomain: "oc-blog-87dd2.firebaseapp.com",
      databaseURL: "https://oc-blog-87dd2.firebaseio.com",
      projectId: "oc-blog-87dd2",
      storageBucket: "oc-blog-87dd2.appspot.com",
      messagingSenderId: "661871881578",
      appId: "1:661871881578:web:119c5e95cee4cd38"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  ngOnInit(): void {
  }

}
