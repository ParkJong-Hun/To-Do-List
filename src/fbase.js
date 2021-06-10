// 파이어베이스 앱(파이어베이스 SDK 코어)은 항상 첫번째 줄에 적혀있어야 한다.
import firebase from "firebase/app";
// 만약 v7이나 더 낮은 버전 JS SDK를 사용하고 있다면 import firebase는 namespace import를 해야한다.
// import * as firebase from "firebase/app"

// Analytics를 프로젝트에 사용하고싶으면, 아래의 문장을 추가해야한다.
//import "firebase/analytics";

// 원하는 파이어베이스의 기능들을 추가한다.
//import "firebase/auth";
import "firebase/firestore";

// 아래의 firebaseConfig 값들을 자신의 프로젝트의 값으로 변경해야한다.
// JS SDK v7.20.0 이상을 위해 measurementId가 추가되어 있다.
var firebaseConfig = {
    apiKey: "AIzaSyCDdI6g8FUb1CNPWoK_xX-jl6Kw200UTgs",
    authDomain: "reacttodolist-5534a.firebaseapp.com",
    projectId: "reacttodolist-5534a",
    storageBucket: "reacttodolist-5534a.appspot.com",
    messagingSenderId: "355545934343",
    appId: "1:355545934343:web:1d97ee789ed5ccc06d18a2",
    measurementId: "G-XQFWX9YT54"
  };
  //파이어베이스 생성
  firebase.initializeApp(firebaseConfig);
  export const firebaseInstance = firebase;
  export const dbService = firebase.firestore();