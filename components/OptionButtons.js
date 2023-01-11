// M.Rajkaran
// 2109039
// DIT/FT/1B/02
import { View, Text,TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const  OptionButton = (props) => {

    return(
        <View style={{ width: "30%", backgroundColor: "#E76F51", borderRadius: 7,height:35,alignItems:'center',justifyContent:"center",margin:7 }}>
          <TouchableOpacity style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons name={props.iconName} style={{ color:"white",alignSelf:"center",marginRight:5,fontSize:20 }}></MaterialCommunityIcons>
            <Text style={{ color:"white",fontSize:15 }}>
              {props.optionName}
            </Text>
          </TouchableOpacity>
        </View>
        
    )


}