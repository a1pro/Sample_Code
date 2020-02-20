import React, { } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, TouchableHighlight, Dimensions, Platform , StatusBar} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Styless from '../Common/Styless'
import Toolbar from '../Common/LoginToolbar'
import Search from './Search'
import Tab from './Tab'
import DeleteIcon from '../../../image/delete.png'
import Uncheck from '../../../image/Circle_Uncheck.png';
import CheckIcon from '../../../image/Circle_Check.png';
import SysIcon from '../../../image/sync.png';
import { Theme } from '../../config'
import { SwipeableFlatList } from 'react-native-swipeable-flat-list'
import CreateListPicker from '../../picker/CreateListPicker';
import Loader from '../Common/Loader';


const mTotalHegiht = Dimensions.get('window').height


var mTitleFont = 16
var mNormalFont = 14
if (mTotalHegiht > 890) {
  mTitleFont = 18
  mNormalFont = 17
} else {
  mTitleFont = 16
  mNormalFont = 15
}

const MyList = (props) => {

  if (props.ShowLoader)
    return (
      <SafeAreaView style={Styless.MainContainer}>
        <Toolbar {...props} />
        <View>
        <CreateListPicker {...props} />
          <Loader />

        </View>

      </SafeAreaView>
    )



  return (
    <SafeAreaView style={Styless.MainContainer}
    forceInset={{ bottom: 'never' }}
    >
     
      <Toolbar {...props} />
      <View style={{width: '100%', height: '100%', flex: 1, backgroundColor: 'white'}}>
      <CreateListPicker {...props} />
      <View style={{ width: '100%', height: Platform.OS =='ios' ? '93%' : '95%', backgroundColor: 'white', marginTop: 10 }}>
        <TouchableOpacity
          style={LocalStyle.CreateContainer}
          onPress={() => props.functionShowCreateDialog(true)}
        >
          <Text allowFontScaling={false} style={{ color: 'black', fontSize: Theme.TITLE_SIZE }}>
            CREATE NEW LIST
          </Text>
        </TouchableOpacity>
        <View
          style={{ width: '100%', height: 50, flexDirection: 'row' }}
        >
          <View
            style={{ width: '50%', height: '100%', flexDirection: 'row' }}
          >
            <Image
              style={{ width: 25, height: 25, resizeMode: 'contain', marginLeft: 15 }}
              source={CheckIcon}
            />
            <Text
              allowFontScaling={false}
              style={{ marginTop: 5, marginLeft: 10 }}
            >
              Default List
         </Text>
          </View>
          <View
            style={{ width: '50%', height: '100%', justifyContent:'center', alignItems:'center'}}
          >
            <TouchableOpacity
            style={{  width: 50, height: 50, position: 'absolute', right: 10,}}
            onPress={()=>props.functionRefresh('')}
            >
              <Image
                style={{
                 
                  width: 35, height: 35, resizeMode: 'contain',
                }}
                source={SysIcon}
              />
            </TouchableOpacity>


          </View>
        </View>


        <SwipeableFlatList
          onRefresh={() => props.functionPulltoRefresh()}
          refreshing={props.ShowLoader}
          data={props.List}
          renderItem={({ item }) => (

            <View
              style={{ width: '100%', height: 81, }}>


              <View style={{
                width: '100%', height: 80,
                backgroundColor: 'white', flexDirection: 'row'
              }}>

                <View
                  style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                >
                  <TouchableOpacity
                  style={{width:40, height:40, justifyContent:'center', alignItems :'center'}}
                    onPress={() => props.functionCheckClick(item.Id)}>
                    <Image style={{ width: 25, height: 25, resizeMode: 'contain', }} source={item.LeftLabel == true ? CheckIcon : Uncheck} />
                  </TouchableOpacity>
                </View>
                <View
                  style={{ width: '70%', height: '100%' }}
                >

                  <TouchableOpacity
                    onPress={() => props.functionOpenPage(item)}
                    style={{
                      width: '100%', height: 78, justifyContent: 'center', alignItems: 'flex-start',
                      backgroundColor: 'white', marginTop: 0
                    }}
                  >


                    <Text allowFontScaling={false} style={{ color: 'black', fontWeight: 'bold', fontSize: mTitleFont, paddingLeft: 10 }}>
                      {item.Name}
                    </Text>
                    <Text style={{ paddingLeft: 10, fontSize: mNormalFont }} allowFontScaling={false}>
                     {item.ItemCount <= 1 ?  item.ItemCount+" "+'item' : item.ItemCount+" "+'items'}  
                      </Text>
                    <Text style={{ paddingLeft: 10, fontSize: mNormalFont }} allowFontScaling={false}>
                      Last Modified <Text>{item.Date}</Text> <Text>{item.Time}</Text>
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  onPress={() => props.functionDeleteAlert(item.Id)}
                  style={{ width: '10%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Image 
                    style={{ width: 26, height: 26, resizeMode: 'contain' }}
                    source={DeleteIcon} 
                  />
                </TouchableOpacity>
              </View>
              <View style={{ width: '100%', height: 1, backgroundColor: Theme.PRIMARY_COLOR }} />
            </View>
            )}
          // renderLeft={({ item }) => (
          //   <View
          //     style={{ width: 0, height: 0, justifyContent: 'center', alignItems: 'center' }}
          //   >
          //     <TouchableOpacity
          //       onPress={() => props.functionCheckClick(item.id)}
          //     >
          //       <Image style={{ width: 25, height: 25, resizeMode: 'contain', }} source={item.leftLabel == true ? CheckIcon : Uncheck} />
          //     </TouchableOpacity>


          //   </View>

          // )}
          // renderRight={({ item }) => (
          //   <TouchableOpacity 
          //   onPress={()=>props.functionDeleteAlert(item.Id)}
          //   style={{ width: 100, height: 68, backgroundColor: Theme.PRIMARY_COLOR, marginTop: 1, justifyContent: 'center', alignItems: 'center' }}>
          //     <Text allowFontScaling={false} style={{ color: 'black' }}>
          //       DELETE</Text>
          //   </TouchableOpacity>

          // )}
          // backgroundColor={'white'} 
          />

     </View>
      </View>
    </SafeAreaView>
  )
}

const LocalStyle = StyleSheet.create({
  CreateContainer: {
    marginTop: 10,
    marginBottom: 5,
    width: '80%',
    height: 40,
    marginLeft: '10%',
    marginRight: '10%',
    backgroundColor: Theme.PRIMARY_COLOR,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MyList
