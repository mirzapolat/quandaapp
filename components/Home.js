import * as React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, StatusBar, TextInput, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from "expo-font";
import { useState } from 'react';

import SVGMenu from '../assets/images/menu.svg';
import SVGSearch from '../assets/images/search.svg';
import SVGRightArrow from '../assets/images/right-arrow.svg';

import colors from '../assets/colors/colors';
import categoriesData from '../assets/data/categoriesData';
import importedData from '../assets/data/importedData';

export default function HomeScreen({ navigation }) {

    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = (query) => {
        setSearchQuery(query);
        console.log(query);
    }

    {/* Cards --- from Categories */}
    const categoryItem = ({ item }) => {
        return (
            <TouchableOpacity style={[styles.categoriesItemWrapper, {backgroundColor: item.backColor}]} onPress={() => navigation.navigate('Cards', { deckItem: item})}>
                <Image source={item.image} style={styles.categoryImage}/>
                <Text style={[styles.categoriesItemTitle, {color: item.frontColor}]}>{item.title}</Text>
                <View style={styles.categoriesItemDot}>
                    <SVGRightArrow width={18} height={18} style={{color: colors.textblack}}/>
                </View>
            </TouchableOpacity>
        )
    }

    {/* Cards --- from Imported & Custom Decks */}
    const importedItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.importedItemWrapper}>
                <View>
                    <Text style={styles.importedItemTitle}>{item.title}</Text>
                    <Text style={styles.importedItemSubtitle}>{item.subtitle}</Text>
                </View>
                <SVGRightArrow width={15} height={15} style={{color: colors.textblack}}/>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.background} barStyle='dark-content' />
            <ScrollView>
            <SafeAreaView>
                {/* Header */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.subtitle}>Select your</Text>
                        <Text style={styles.title}>Quanda</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                        <SVGMenu width={24} height={24} style={{color: colors.textblack, marginTop: 10}}/>
                    </TouchableOpacity>
                </View>

                {/* Search */}
                <View style={styles.searchWrapper}>
                    <SVGSearch width={24} height={24} style={{color: colors.textblack, marginTop: 10}} />
                    <View style={styles.search}>
                        <TextInput clearButtonMode='always' onChangeText={(query) => handleSearch(query)} placeholder='Search' style={styles.searchText}></TextInput>
                    </View>
                </View>

                {/* Categories */}
                <Text style={styles.sectionTitle}>Categories</Text>
                <FlatList
                    data={categoriesData}
                    renderItem={categoryItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{width: 20}}/>}
                    ListFooterComponent={() => <View style={{width: 20}}/>}
                    ListHeaderComponent={() => <View style={{width: 20}}/>}
                />

                {/* Imported & Custom Decks */}
                <Text style={styles.sectionTitle}>Imported</Text>
                <View style={styles.importedListWrapper}>
                    <FlatList
                        data={importedData}
                        renderItem={importedItem}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        ListFooterComponent={() => <View style={{height: 20}}/>}
                        ListHeaderComponent={() => <View style={{height: 20}}/>}
                    />
                </View>
            </SafeAreaView>
            </ScrollView>
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
        fontSize: 30,
        fontFamily: 'Montserrat-Regular',
    },
    title: {
        color: colors.textblack,
        fontSize: 50,
        fontFamily: 'Montserrat-Bold',
        marginTop: -10,
    },
    searchWrapper: {
        paddingHorizontal: 23,
        marginVertical: 30,
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
        color: colors.textblack,
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        marginBottom: 5,
    },

    sectionTitle: {
        color: colors.textblack,
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
        marginLeft: 20,
    },

    categoriesItemWrapper: {
        width: 130,
        height: 180,
        marginTop: 30,
        marginBottom: 50,
        borderRadius: 15,

        elevation: 15,
        shadowColor: '#050505',
    },
    categoriesItemTitle: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Montserrat-Bold',
        marginTop: 15,
        marginLeft: 15,

        elevation: 20,
        shadowColor: 'black',
    },
    categoriesItemDot: {
        position: 'absolute',
        bottom: 10,
        right: 10,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: 30,
        height: 30,
        borderRadius: 20,
        elevation: 5,
        shadowColor: '#52006A',
    },
    categoryImage: {
        width: 130,
        height: 80,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        opacity: 0.8,
    },

    importedListWrapper: {
        marginTop: 10,
        marginBottom: 50,
    },
    importedItemWrapper: {
        backgroundColor: 'white',
        height: 80,
        marginBottom: 15,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginHorizontal: 20,

        elevation: 10,
        shadowColor: '#050505',
        shadowOffset: { width: 0, height: -20 },

        borderColor: '#c5c5c5',
        borderWidth: 1,
    },
    importedItemTitle: {
        fontFamily: 'Montserrat-Regular',
    },
    importedItemSubtitle: {
        fontFamily: 'Montserrat-Light',
        color: colors.textgrey,
    },
})