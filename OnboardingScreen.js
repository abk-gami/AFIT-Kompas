import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
    // DoneButtonComponent={Done}
    onSkip={() => navigation.replace('Maps')}
    onDone={() => navigation.replace('Maps')}
  pages={[
    {
      backgroundColor: '#ef340f',
      image: <Image source={require('./assets/1.png')} style={styles.image} />,
      title: 'A map that enables ease of movement around AFIT',
      subtitle: '....',
    },
    {
      backgroundColor: 'orange',
      image: <Image source={require('./assets/2.png')} style={styles.image} />,
      title: 'Scroll through your favorite landmarks',
      subtitle: '....',
    },
    {
      backgroundColor: 'yellow',
      image: <Image source={require('./assets/3.png')} style={styles.image} />,
      title: 'Search through a list of places in AFIT',
      subtitle: '....',
    },
    {
      backgroundColor: 'green',
      image: <Image source={require('./assets/4.png')} style={styles.image} />,
      title: 'See your current location',
      subtitle: '....',
    },
    {
      backgroundColor: '#001b7c',
      image: <Image source={require('./assets/5.png')} style={styles.image} />,
      title: 'Get directions from where you are to where you are going ',
      subtitle: '....',
    },
    {
      backgroundColor: 'indigo',
      image: <Image source={require('./assets/6.png')} style={styles.image} />,
      title: 'Get news about upcoming events in AFIT',
      subtitle: '....',
    },
    {
      backgroundColor: 'violet',
      image: <Image source={require('./assets/mark.jpg')} style={styles.image} />,
      title: 'Made for AFIT students',
      subtitle: 'By an AFIT student!',
    },
    
  ]}
/>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: '90%', 
        resizeMode: 'contain',
        marginBottom: '-50%'
    }
})