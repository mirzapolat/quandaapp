import * as React from 'react';
import { StyleSheet, View, Text, FlatList, Image, StatusBar, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from "expo-font";
import { useState } from 'react';

import colors from '../assets/colors/colors';

import SVGRightArrow from '../assets/images/right-arrow.svg';

export default function MenuScreen({ navigation }) {

    const MenuSliderItem = () => {
        const [isEnabled, setIsEnabled] = useState(false);
        const toggleSwitch = () => setIsEnabled(previousState => !previousState);

        return (
            <Switch
                trackColor={{ false: colors.textgrey, true: '#81b0ff'}}
                thumbColor={isEnabled ? '#31805f' : colors.textblack}
                ios_backgroundColor={colors.textgrey}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
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