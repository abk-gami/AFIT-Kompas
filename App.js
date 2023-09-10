
  import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native'
import Test from './test';
import MapScreen from './MapScreen';
import Hehe from './hehe';
import BottomSheet from './TBS';
import Ape from './bot';

const App = () => {
  return (
    // <View style={styles.main}>
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#001b7c" barStyle="light-content"/>
      <MapScreen/>
      {/* <Test/> */}
      {/* <Hehe /> */}
      {/* <BottomSheet/> */}
      {/* <Ape/> */}

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




