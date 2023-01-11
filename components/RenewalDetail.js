// Pranjal Prathap Bavikai
// 2228396
// DIT/FT/1B/02
import React from 'react';
import { ScrollView, View, Text, Switch } from 'react-native';
export const RenewalDetail = (props) => {
    return (
        <View style={{ backgroundColor: "#2c698d", display: 'flex', flexDirection: 'row', height: 80, alignItems: "center", marginTop: 5, marginBottom: 5, borderRadius: 20 }}>
            <View style={{ paddingLeft: 20 }}>
                {props.icon}
            </View>
            <View style={{ paddingLeft: 40 }}>
                <Text style={{ color: "#EAE3D7", fontSize: 18 }}>{props.title}</Text>

                <Text style={{ color: "#EAE3D7", fontSize: 11 }}>{props.description}</Text>
            </View>
            <View style={{ justifyContent: 'flex-end', marginLeft: 'auto', paddingRight: 80, }}>
                <View style={{ backgroundColor: "#282323", display: 'flex', height: 40, alignItems: "center", borderRadius: 20, }}>
                    {props.manage}
                </View>
            </View>
        </View >
    );
}