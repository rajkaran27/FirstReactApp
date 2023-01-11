// Pranjal Prathap Bavikai
// 2228396
// DIT/FT/1B/02
import React from 'react';
import { StyleSheet, ScrollView, View, Text, Switch } from 'react-native';
export const SubscriptionSummary = (props) => {
    return (
        <View style={{ backgroundColor: "#579BB1", display: 'flex', flexDirection: 'row', height: 80, width: 350, alignItems: "center", borderRadius: 20, marginTop: 20 }}>
            <View style={{ paddingLeft: 20 }}>
                {props.icon}
            </View>
            <View style={{ paddingLeft: 40 }}>
                <Text style={{ color: "#EAE3D7", fontSize: 16 }}>{props.title}</Text>
            </View>
            <View style={{ textAlign: 'right' }}>
                {props.description}
            </View>
        </View>
    );
}