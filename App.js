import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './screens/SearchScreen';
import ResultShowScreen from './screens/ResultsShowScreen';

const RootStack = createNativeStackNavigator({
    initialRouteName: 'Home',
    
    screens: {
      Home: {
        screen: SearchScreen,
        options: {
          title: 'Search',
        }
      },
      ResultsShow: {
        screen: ResultShowScreen,
        options: {
          title: '',
        }
      }
    },
    
    screenOptions:{
      headerTitle:'Restoran Uygulaması',
    }
    

});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
