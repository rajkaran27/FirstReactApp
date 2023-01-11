// M.Rajkaran
// 2109039
// DIT/FT/1B/02
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export const ManageBox = (props) => {

  const IconPack = props.iconPack;

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal:5,marginVertical:15}}>
      <View style={{ width: '10%', alignItems: "center", justifyContent: "center" }}>
        <IconPack name={props.iconName} color={props.iconColor} style={[styles.iconShadow,{ fontSize: 35 }]}></IconPack>
      </View>
      <View style={{ width: '60%' }}>
        <Text style={{ color:"#EAE3D7", fontSize: 20 ,fontWeight:"500"}}>{props.title}</Text>
        <Text style={{  color:"#EAE3D7",  fontSize: 15 }}>{props.price}</Text>
      </View>
      <TouchableOpacity style={{ width: 40, borderRadius: 50, alignItems: "center", justifyContent: "center" }} onPress={props.onPress}>
        <MaterialIcons name='arrow-forward-ios' style={{ color: "#EAE3D7", fontSize: 30 }}></MaterialIcons>
      </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({

  
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