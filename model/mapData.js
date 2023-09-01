import { View, Text } from 'react-native'
import React from 'react'

const Images = [
  { uri: "https://github.com/abk-gami/AFIT-mobile-img/blob/main/hq.jpg?raw=true" },
    { uri: "https://github.com/abk-gami/AFIT-mobile-img/blob/main/afit gate.jpg?raw=true" },
    { uri: "https://github.com/abk-gami/AFIT-mobile-img/blob/main/yisa doko.jpg?raw=true" },
    { uri: "https://github.com/abk-gami/AFIT-mobile-img/blob/main/alpha hall.jpg?raw=true" },
    { uri: "https://github.com/abk-gami/AFIT-mobile-img/blob/main/afit img.jpg?raw=true" },
    { uri: "https://github.com/abk-gami/AFIT-mobile-img/blob/main/girls hostel.jpg?raw=true" },
    { uri: "https://github.com/abk-gami/AFIT-mobile-img/blob/main/boys hostel.jpg?raw=true" },
];




const mapData = () => {
  return (
    <View>
      <Text>mapData</Text>
    </View>
  )
}

 export const markers = [
  {
    coordinate: {
        latitude: 10.607917, 
        longitude:  7.441819,
      },
      title: 'AFIT HeadQuarters',
      description: 'No near here if you no dey wear shoe!!',
      image: Images[0],
    },
    {
      coordinate: { 
        latitude:     10.608142947760621,
        longitude:    7.439118488008261,
      },
      title: 'AFIT Gate',
      description: 'Make sure you hold your I.D card',
      image: Images[1],
    },
    {
      coordinate: {
        latitude:   10.609006,
        longitude:    7.443825,
      },
      title: 'Ibrahim Alfa Auditorium',
      description: 'Alfa Hall',
      image: Images[3],
    },
    {
      coordinate: {
        latitude:    10.609766, 
        longitude:    7.442055,
      },
      title: 'AFIT Library',
      description: 'Shey I go need explain',
      image: Images[4],
    },
    {
      coordinate: {
        latitude:   10.611034764267906, 
        longitude:    7.440293644487028,
      },
      title: 'CICT',
      description: 'AFIT ICT Lab',
      image: Images[4],
    },
    {
      coordinate: {
        latitude:    10.609497054892023, 
        longitude:     7.441556290899769,  
      },
      title: 'AFIT Masjid',
      description: 'Mosque',
      image: Images[4],
    },
    {
      coordinate: {
        latitude:     10.612929900889057, 
        longitude:    7.446031368883489,
      },
      title: 'AFIT Clinic',
      description: 'Sick Bay for ill students',
      image: Images[4],
    },
    {
      coordinate: {
        latitude:     10.613283, 
        longitude:    7.447779, 
      },
      title: 'Girls Hostel',
      description: 'Girls Hostel',
      image: Images[5],
    },
    {
      coordinate: {
        latitude:    10.617582998928897, 
        longitude:    7.443476249157613, 
      },
      title: 'Boys Hostel',
      description: 'Boys Hostel',
      image: Images[6],
    },
  ];


  

  export default mapData