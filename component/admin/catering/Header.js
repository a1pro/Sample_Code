import React, { } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import ActiveIcon from '../../../../image/active.png'
import NonActiveIcon from '../../../../image/non_Active.png';
import ffgh from '../../Common/Styless';
import Styless from '../../Common/Styless';
import SysIcon from '../../../../image/sync.png';
import ModalDropdown from 'react-native-modal-dropdown';
import { Theme } from '../../../config';

const Header = (props) => {
  return (
    <View>
      <View style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <Image style={{ width: 10, height: 10, resizeMode: 'contain', marginRight: 5 }} source={props.Active == true ? ActiveIcon : NonActiveIcon} />
          <Image style={{ width: 10, height: 10, resizeMode: 'contain', marginLeft: 2 }} source={props.Completed == true ? ActiveIcon : NonActiveIcon} />
          <Image style={{ width: 10, height: 10, resizeMode: 'contain', marginLeft: 5 }} source={props.Summary == true ? ActiveIcon : NonActiveIcon} />
        </View>
        {props.Summary == true ?
          <View style={{ position: 'absolute', right: 0 }}>
            <View style={{ width: 120, height: 40, borderWidth: 1, justifyContent: 'center', alignItems: 'center', marginRight: 5, backgroundColor: Theme.PRIMARY_COLOR, borderRadius: 5 }}>
              <ModalDropdown
                disabled={false}
                style={{ width: 120, height: 30 }}
                options={['Month To Date','Last Month','Last Year','Year To Date']}
                defaultValue={props.SalesFilterValue}
                textStyle={{ color: 'black', alignSelf: 'center', fontStyle: 'normal', marginTop: 5, fontSize: 15 }}

                onSelect={(idx, value) => props.functionListFilter(idx, value)}
                renderButtonText={(row) => <Text>
                  {row}
                </Text>}
                renderRow={(row) => <View style={{ width: 120, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                  <Text allowFontScaling={false} style={{ fontSize: 17 }}>
                    {row}
                  </Text>
                </View>}
              />
            </View>
          </View> : <View />}



      </View>

      <View style={Styless.Line} />
    </View>
  )
}

export default Header;