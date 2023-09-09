
  import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native'
import Test from './test';
import MapScreen from './MapScreen';
import Hehe from './hehe';
import BottomSheet from './TBS';

const App = () => {
  return (
    // <View style={styles.main}>
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#001b7c" barStyle="light-content"/>
      <MapScreen/>
      {/* <Test/> */}
      {/* <Hehe /> */}
      <BottomSheet/>
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




