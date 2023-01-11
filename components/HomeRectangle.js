// M.Rajkaran
// 2109039
// DIT/FT/1B/02
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export const Transaction = (props) => {

  return (
    <View style={[styles.shadow,styles.box]}>
      <View style={{ width: '30%' }}>
        <MaterialCommunityIcons name={props.iconName} color={props.iconColor} style={[styles.iconShadow,{ fontSize: 50, marginLeft: 8, alignSelf: "center" }]}></MaterialCommunityIcons>
      </View>
      <View style={{ width: '40%', }}>
        <View>
          <Text style={{ color: "#EAE3D7", fontWeight: "500", fontSize: 18 }}>{props.category}</Text>
          <Text style={{ color: "#EAE3D7", fontSize: 12 }}>{props.date}</Text>
        </View>
      </View>
      <View style={{ width: '20%' }}>
        <Text style={{ color: "#EAE3D7", fontWeight: "500", fontSize: 17 }}>{props.amount}</Text>
        
      </View>
    </View>
  );
}


const styles = StyleSheet.create({

  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  box: {
    backgroundColor: "#336170",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70, 
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 20


  },
  iconShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }


})