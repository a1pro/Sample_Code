import React, {} from 'react';
import {View, Text, Image} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import PickupIcon from '../../../image/small_store.png';
import { Theme } from '../../config';
const Header=(props)=>{
    return(
        <View 
        style={{width:'100%', height:50,flexDirection:'row'}}
        >
        <View
          style={{ width: '50%', height: '100%', flexDirection: 'row' }}
        >
          <Image
            style={{ width: 35, height: 35, resizeMode: 'contain', marginTop:5 }}
            source={PickupIcon}
          />
          <Text
            allowFontScaling={false}
            style={{ marginLeft: 0, fontWeight: 'bold', marginTop: 16 }}>Store Pickup</Text>
        </View>

        <View
          style={{ width: '50%', height: '100%', justifyContent: 'center', alignItems: 'flex-end' }}
        >
          <View
            style={{
              width: 100, height: 30, borderWidth: 1, justifyContent: 'center',
              alignItems: 'center', marginRight: 5, backgroundColor: Theme.PRIMARY_COLOR,
              borderRadius: 5,
            }}
          >

            <ModalDropdown
              dropdownStyle={{width: 100, height: 160, }}
              showsVerticalScrollIndicator={false}
              disabled={false}
              style={{ width: 100, height: 30, }}
              onSelect={(Index, value)=>props.functionShort( Index)}

              options={['A to Z', 'Z to A', 'Qty 0 - 99', 'Qty 99 - 0']}
              defaultValue={'A to Z'}
              textStyle={{
                color: 'black', alignSelf: 'center', fontStyle: 'normal', marginTop: 5

              }}
              renderButtonText={(row) => <Text>{row}</Text>}
              renderRow={(row) =>
                <View
                  style={{ width: 100, height: 40, justifyContent: 'center', alignItems: 'center' }}
                >
                  <Text
                    allowFontScaling={false}
                    style={{ fontSize: 17 }}
                  >{row}</Text>
                </View>
              } />

          </View>
        </View>
        </View>
    )
}

export default Header;