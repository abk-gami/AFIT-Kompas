import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
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
      image: <Image source={require('./assets/logo.png')} style={styles.image} />,
      title: 'Please TURN ON LOCATION for better Experience',
      subtitle: 'Made for AFIT students...And AFIT Explorers!',
    },
    {
      backgroundColor: 'orange',
      image: <Image source={require('./assets/1.png')} style={styles.image} />,
      title: 'An app that enables ease of movement around AFIT',
      subtitle: 'With a map that aides navigation',
    },
    {
      backgroundColor: 'yellow',
      image: <Image source={require('./assets/2.png')} style={styles.image} />,
      title: 'Scroll through your favorite landmarks',
      subtitle: 'You get to view the whole AFIT Environment!',
    },
    {
      backgroundColor: 'green',
      image: <Image source={require('./assets/4.png')} style={styles.image} />,
      title: 'Get directional guides on happening events',
      subtitle: 'Where is it happening? and how can I get there?',
    },
    {
      backgroundColor: '#001b7c',
      image: <Image source={require('./assets/3.png')} style={styles.image} />,
      title: 'Search through a list of places in AFIT',
      subtitle: 'And tap the location to get directions to where you are going',
    },
    {
      backgroundColor: 'indigo',
      image: <Image source={require('./assets/5.png')} style={styles.image} />,
      title: 'Get directions from where you are to where you are going ',
      subtitle: 'Are you Lost? Find Your Way',
    },
    {
      backgroundColor: 'violet',
      image: <Image source={require('./assets/6.png')} style={styles.image} />,
      title: 'Get news about happening events in AFIT',
      subtitle: 'To always keep you updated with verified news',
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