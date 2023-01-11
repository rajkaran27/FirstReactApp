// Pranjal Prathap Bavikai
// 2228396
// DIT/FT/1B/02
import React from 'react';

import { ScrollView, View, Text, Switch } from 'react-native';

export const ProfileDetail = (props) => {

    return (

        <View style={{ backgroundColor: "#579BB1", display: 'flex', flexDirection: 'row', height: 80, alignItems: "center", marginTop: 5, marginBottom: 5, borderRadius: 20 }}>

            <View style={{ paddingLeft: 20 }}>

                {props.icon}

            </View>

            <View style={{ paddingLeft: 40 }}>

                <Text style={{ color: "#EAE3D7", fontSize: 18,fontWeight:"bold" }}>{props.title}</Text>

                <Text style={{ color: "#EAE3D7", fontSize: 12 }}>{props.description}</Text>

            </View>

            <View style={{ paddingLeft: 30 }}>

                {props.switch}

            </View>

        </View>

    );

}