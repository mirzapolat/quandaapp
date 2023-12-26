import * as React from 'react';
import { StyleSheet, View, Text, FlatList, Image, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from "expo-font";

import colors from '../assets/colors/colors';

export default function MenuScreen({ navigation }) {
    const [loaded] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
    });

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.background} barStyle='dark-content' />
            <SafeAreaView>
                <Text>Menu</Text>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
});