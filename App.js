import React,{Component} from 'react';
import { StyleSheet, Text, View,ActivityIndicator} from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import DashboardScreen from './screens/DashboardScreen';
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import * as firebase from 'firebase';
import {firebaseConfig} from './config';
import { createStackNavigator } from 'react-navigation-stack';


firebase.initializeApp(firebaseConfig);



const AppNavigator=createStackNavigator({
  
  MainScreen: {screen:MainScreen},
  LoginScreen: {screen:LoginScreen},
  DashboardScreen: {screen:DashboardScreen},
  SignupScreen:{screen:SignupScreen}
});

export default createAppContainer(AppNavigator);


