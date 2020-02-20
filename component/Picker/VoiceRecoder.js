import React from "react";
import { View, Modal, Text, Image, StyleSheet ,Dimensions, TouchableOpacity} from "react-native";
import VoiceRecoderImage from "../../../image/Recoding.gif";


const deviceWidth = Dimensions.get('window').width 
const VoiceRecoder = props => {

   

  return (
    <View>
      <Modal
        transparent={true}
        animationType={"fade"}
        visible={props.Dialog.VoiceDialogVisible}>

<TouchableOpacity
style={{width:'100%', height:'100%' }}
onPress={() => props.functionCloseRecoder('')}
>
<View style={LocalStyle.Main}>
          <View style={LocalStyle.FirstChild}>
            <Image
              source={VoiceRecoderImage}
              style={{ width: 100, height: 100, resizeMode: "contain",  }}
            />
          </View>
        </View>
</TouchableOpacity>
        
      
      </Modal>
    </View>
  );
};

export default VoiceRecoder;

const LocalStyle = StyleSheet.create({
  Main: {
    width: "80%",
    height: "100%",
    marginRight: "10%",
    marginLeft: "10%",
    justifyContent: "center",
    alignItems: "center"
  },
  FirstChild: {
    width: 200,
    height:200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginLeft:'10%',
    marginRight:'10%',
    borderRadius:20,
  }
});
