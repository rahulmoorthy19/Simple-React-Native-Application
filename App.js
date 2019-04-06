import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';

const RootStack = createStackNavigator(
{
  Home:HomeScreen,
  Details:DetailsScreen,
},
{
  initialRouteName:'Home',
  navigationOptions:{
   headerStyle:{
    backgroundColor:'#f4511e',
   },
   headerTintColor:'#fff',
   headerTitleStyle:{
    fontWeight:'bold',
   },
  },
},
);

class App extends React.Component {
  render(){
    return <RootStack/>;
  }
}
export default createAppContainer(RootStack);
