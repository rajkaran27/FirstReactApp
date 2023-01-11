// M.Rajkaran
// 2109039
// DIT/FT/1B/02

import React from 'react';
import { TouchableOpacity,StyleSheet } from 'react-native';

export const ExpButton = (props) => {
  const IconPack = props.iconPack;

  return (
    <TouchableOpacity style={[styles.shadow,{ borderRadius: 50,  width: 60, height: 60, alignItems: "center", justifyContent: "center",backgroundColor:props.bgColor,marginHorizontal:10 }]} onPress={props.onPress}>
      <IconPack name={props.iconName} style={{fontSize:30,color:"white"}}></IconPack>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
      }
})