// M.Rajkaran
// 2109039
// DIT/FT/1B/02

import { View, Text } from 'react-native';

export const Item = (props) => {

  const IconPack = props.iconPack; 

    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5 }}>
        <IconPack style={{fontSize:45, color: "#1F1F1F"}} name={props.iconName}></IconPack>
        <View style={{ width: '40%' }}>
          <Text style={{color:"#EAE3D7",fontWeight:"500",fontSize:20}}>{props.title}</Text>
          <Text style={{color:"#EAE3D7",fontSize:15}}>{props.date}</Text>
        </View>
        <Text style={{ width: '20%',color:"#EAE3D7",fontWeight:"500",fontSize:20 }}>{props.price}</Text>
      </View>
    );
  }