import * as React from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from "expo-font";

import SVGMenu from '../assets/images/menu.svg';
import SVGSearch from '../assets/images/search.svg';

import colors from '../assets/colors/colors';
import categoriesData from '../assets/data/categoriesData';

export default function Home() {
    const [loaded] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
    });

    if (!loaded) {
        return (
            <View></View>
        );
    }

    const renderItem = ({ item }) => {
        return (
            <View style={styles.categoriesItemWrapper}>
                <Image source={item.image} height={30} resizeMode='stretch'/>
                <Text style={styles.categoriesItemTitle}>{item.title}</Text>
                <View style={styles.categoriesItemDot}>
                    <SVGMenu width={24} height={424} style={{color: colors.textblack}}/>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <SafeAreaView>
                {/* Header */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.subtitle}>Select your</Text>
                        <Text style={styles.title}>Questions</Text>
                    </View>
                    <SVGMenu width={24} height={24} style={{color: colors.textblack}}/>
                </View>

                {/* Search */}
                <View style={styles.searchWrapper}>
                    <SVGSearch width={24} height={24} style={{color: colors.textblack, marginTop: 10}} />
                    <View style={styles.search}>
                        <Text style={styles.searchText}>Search</Text>
                    </View>
                </View>

                {/* Categories */}
                <View style={styles.categoriesWrapper}>
                    <Text style={styles.categoriesTitle}>Categories</Text>
                    <View style={styles.categoriesListWrapper}>
                        <FlatList
                            data={categoriesData}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            horizontal={true}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'top',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    subtitle: {
        color: colors.textblack,
        fontSize: 20,
        fontFamily: 'Montserrat-Regular',
    },
    title: {
        color: colors.textblack,
        fontSize: 36,
        fontFamily: 'Montserrat-Bold',
    },
    searchWrapper: {
        paddingHorizontal: 23,
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    search: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: colors.textblack,
        borderBottomWidth: 1,
    },
    searchText: {
        color: colors.textgrey,
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        marginBottom: 5,
    },
    categoriesWrapper: {
        paddingHorizontal: 20,
        marginTop: 30,
    },
    categoriesTitle: {
        color: colors.textblack,
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
    },
    categoriesListWrapper: {
        paddingTop: 15,
    },
    categoriesItemWrapper: {
        width: 140,
        height: 200,
    },
})