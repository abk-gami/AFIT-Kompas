
  import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native'
// import Test from './test';
import MapScreen from './MapScreen';
// import Hehe from './hehe';
// import BottomSheet from './TBS';
// import Bot from './bot';
// import MapScreen from './LastOne'
import Search from './search';
import Locate from './haa';

const App = () => {
  return (
    // <View style={styles.main}>
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#001b7c" barStyle="light-content"/>
      <MapScreen/>
      {/* <Map/> */}
      {/* <Locatio/> */}
      {/* <Test/> */}
      {/* <Hehe /> */}
      {/* <BottomSheet/> */}
      {/* <Search/> */}
      {/* <Bot/> */}
      {/* <Locate/> */}
    </SafeAreaView>
    // </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 37,
    // backgroundColor: '#fff'
  },
})




