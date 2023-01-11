
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

function SpoilerText(props) {
  const [showText, setShowText] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setShowText(!showText)}>
        <Text style={{textAlign:"center",fontSize:15}}>Tap to reveal expense</Text>
        
      </TouchableOpacity>
      {showText && <Text style={{ fontSize: 40, fontWeight: "bold",textAlign:"center" }}>{props.text}</Text>}
    </View>
  );
}

export default SpoilerText;