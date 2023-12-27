import * as React from 'react';
import { StyleSheet, View, Text, FlatList, Image, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from "expo-font";
import { useState } from 'react';

import colors from '../assets/colors/colors';

import SVGRightArrow from '../assets/images/right-arrow.svg';

export default function MenuScreen({ navigation }) {
    const [loaded] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
    });

    let [sliderValue, setSliderValue] = useState(1);

    const MenuSliderItem = () => {

        if(sliderValue == 0)
        return (
            <TouchableOpacity style={{
                height: 25,
                width: 50,
                borderRadius: 50,
                backgroundColor: colors.textgrey,
                elevation: 5,
                shadowColor: 'black',
                justifyContent: 'center',
                padding: 2,

            }}>
                <View style={{
                    width: '50%',
                    height: '100%',
                    backgroundColor: '#c5c5c5',
                    borderRadius: 50,

                    elevation: 5,
                    shadowColor: 'black',
                }}/>
            </TouchableOpacity>
        );

        else
        return (
            <TouchableOpacity style={{
                height: 25,
                width: 50,
                borderRadius: 50,
                backgroundColor: '#c5c5c5',
                elevation: 5,
                shadowColor: 'black',
                justifyContent: 'center',
                padding: 2,
                paddingLeft: 25,

            }}>
                <View style={{
                    width: 23,
                    height: '100%',
                    backgroundColor: '#168FB5',
                    borderRadius: 50,

                    elevation: 5,
                    shadowColor: 'black',
                }}/>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.background} barStyle='dark-content' />
            <SafeAreaView>
                {/* Header */}
                <View style={styles.header}>
                    <View/>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <SVGRightArrow width={24} height={24} style={{color: 'black', marginTop: 10}}/>
                    </TouchableOpacity>
                </View>

                {/* Menu */}
                <View style={styles.menu}>
                    <View style={styles.menuElement}>
                        <Text style={styles.menuTitle}>Always show new cards</Text>
                        <MenuSliderItem/>
                    </View>
                    <View style={styles.menuElement}>
                        <Text style={styles.menuTitle}>Show default decks</Text>
                        <MenuSliderItem/>
                    </View>
                    <View style={styles.menuElement}>
                        <Text style={styles.menuTitle}>Show imported decks</Text>
                        <MenuSliderItem/>
                    </View>
                    <View style={styles.menuElement}>
                        <Text style={styles.menuTitle}>Show search bar</Text>
                        <MenuSliderItem/>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'top',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    menu: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    menuTitle: {
        fontFamily: 'Montserrat-Light',
        fontSize: 20,
        color: colors.textblack,
        width: '70%',
    },
    menuElement: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomColor: colors.textgrey,
        borderBottomWidth: 1,
    },
});