// Sure, here is how you can create a bottom sheet that has three different screens that will open when three different buttons are clicked in React Native:

// 1. Install the `react-native-bottom-sheet` library.

// npm install react-native-bottom-sheet


// 2. Create a new React Native project.


// react-native init my-app


// 3. Import the `BottomSheet` component from the `react-native-bottom-sheet` library.


// import BottomSheet from 'react-native-bottom-sheet';


// 4. Create three screens that will be displayed in the bottom sheet.


const Screen1 = () => {
  return (
    <View>
      <Text>This is Screen 1</Text>
    </View>
  );
};

const Screen2 = () => {
  return (
    <View>
      <Text>This is Screen 2</Text>
    </View>
  );
};

const Screen3 = () => {
  return (
    <View>
      <Text>This is Screen 3</Text>
    </View>
  );
};


// 5. Create a button for each screen.


const App = () => {
  return (
    <View>
      <Button onPress={() => {
        openBottomSheet(Screen1);
      }}>
        Screen 1
      </Button>
      <Button onPress={() => {
        openBottomSheet(Screen2);
      }}>
        Screen 2
      </Button>
      <Button onPress={() => {
        openBottomSheet(Screen3);
      }}>
        Screen 3
      </Button>
    </View>
  );
};


// 6. Create a function to open the bottom sheet.


const openBottomSheet = (screen) => {
  const bottomSheet = new BottomSheet();
  bottomSheet.open({
    screen: screen,
  });
};


// 7. Render the app.


export default App;


// This is just a basic example of how to create a bottom sheet with three different screens in React Native. You can customize the bottom sheet by passing props to the `BottomSheet` component. For more information, please refer to the react-native-bottom-sheet documentation: https://github.com/gorhom/react-native-bottom-sheet.