import React, { } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Theme } from '../../../config';

const mHegiht = Dimensions.get('window').height;
var mLabelSize = 0;
if (mHegiht > 800) {
    mLabelSize = 17
}
else {
    mLabelSize = 15

}

const SummaryTable = (props) => {

    const mData = props.List.map((data) => {
        return (
            <View>

                <View style={{ width: '100%', height: 30, flexDirection: 'row' }}>
                    <View
                        style={LocalStyle.BlankBox}
                    >
                        <View style={{ width: 20, height: 20, borderRadius: 20 / 2, backgroundColor: data.CASH_COLOR }} />
                    </View>

                    <View
                        style={LocalStyle.PmtBox}
                    >
                        <Text allowFontScaling={false} style={{ marginLeft: 5, marginTop: 2 }}>

                            Cash
            </Text>
                    </View>
                    <View
                        style={LocalStyle.AmountContainer}
                    >
                        <Text allowFontScaling={false} style={{ marginLeft: 5, marginTop: 2 }}>
                            ${data.Cash}
                        </Text>
                    </View>
                    <View
                        style={LocalStyle.PercentBox}
                    >
                        <Text allowFontScaling={false} style={{ marginLeft: 5, marginTop: 2 }}>
                            {props.functionPercatage(data.CateringSales, data.Cash)}
                        </Text>
                    </View>
                </View>


                <View style={{ width: '100%', height: 30, flexDirection: 'row' }}>
                    <View
                        style={LocalStyle.BlankBox}
                    >
                        <View style={{ width: 20, height: 20, borderRadius: 20 / 2, backgroundColor: data.CREDIT_COLOR }} />
                    </View>
                    <View
                        style={LocalStyle.PmtBox}
                    >
                        <Text allowFontScaling={false} style={{ marginLeft: 5, marginTop: 2 }}>

                            Credit
            </Text>
                    </View>
                    <View
                        style={LocalStyle.AmountContainer}
                    >
                        <Text allowFontScaling={false} style={{ marginLeft: 5, marginTop: 2 }}>
                            ${data.Credit}
                        </Text>
                    </View>
                    <View
                        style={LocalStyle.PercentBox}
                    >
                        <Text allowFontScaling={false} style={{ marginLeft: 5, marginTop: 2 }}>
                            {props.functionPercatage(data.CateringSales, data.Credit)}
                        </Text>
                    </View>
                </View>

                <View style={{ width: '100%', height: 30, flexDirection: 'row' }}>
                    <View
                        style={LocalStyle.BlankBox}
                    >
                        <View style={{ width: 20, height: 20, borderRadius: 20 / 2, backgroundColor: data.CHECK_COLOR }} />
                    </View>
                    <View
                        style={LocalStyle.PmtBox}
                    >
                        <Text allowFontScaling={false} style={{ marginLeft: 5, marginTop: 2 }}>

                            Check
            </Text>
                    </View>
                    <View
                        style={LocalStyle.AmountContainer}
                    >
                        <Text allowFontScaling={false} style={{ marginLeft: 5, marginTop: 2 }}>
                            ${data.Check}
                        </Text>
                    </View>
                    <View
                        style={LocalStyle.PercentBox}
                    >
                        <Text allowFontScaling={false} style={{ marginLeft: 5, marginTop: 2 }}>
                            {props.functionPercatage(data.CateringSales, data.Check)}
                        </Text>
                    </View>
                </View>

                <View style={{ width: '100%', height: 30, flexDirection: 'row' }}>
                    <View
                        style={LocalStyle.BlankBox}
                    >
                        <View style={{ width: 20, height: 20, borderRadius: 20 / 2, backgroundColor: data.UNPAID_COLOR }} />
                    </View>
                    <View
                        style={LocalStyle.PmtBox}
                    >
                        <Text allowFontScaling={false} style={{ marginLeft: 5, marginTop: 2 }}>

                            Unpaid
            </Text>
                    </View>
                    <View
                        style={LocalStyle.AmountContainer}
                    >
                        <Text allowFontScaling={false} style={{ marginLeft: 5, marginTop: 2 }}>
                            ${data.Unpaid}
                        </Text>
                    </View>
                    <View
                        style={LocalStyle.PercentBox}
                    >
                        <Text allowFontScaling={false} style={{ marginLeft: 5, marginTop: 2 }}>
                            {props.functionPercatage(data.CateringSales, data.Unpaid)}
                        </Text>
                    </View>
                </View>






            </View>
        )
    })
    return (
        <View

        >
            {mData}


        </View>

    )
}

const LocalStyle = StyleSheet.create({
    circle: {
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        backgroundColor: 'red'
    },
    TitleLabel: {
        fontSize: mLabelSize, alignSelf: 'center', marginTop: 5, fontWeight: 'bold'
    },
    Container: {
        width: '90%', height: '100%', marginLeft: '5%', marginRight: '5%'
    },
    MainBox: {
        width: '25%', height: '100%',
        borderWidth: 0.5,
        borderColor: Theme.PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center'
    },
    BlankBox: {
        width: '20%',
        height: '100%',
        borderWidth: 0.5,
        borderColor: Theme.PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center'
    },
    PmtBox: {
        width: '35%',
        height: '100%',
        borderWidth: 0.5,
        borderColor: Theme.PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center'
    },
    PercentBox: {
        width: '20%', height: '100%',
        borderWidth: 0.5,
        borderColor: Theme.PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center'
    },
    AmountContainer: {
        width: '24%', height: '100%',
        borderWidth: 0.5,
        borderColor: Theme.PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center'
    }

})


export default SummaryTable;