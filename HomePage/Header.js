import React from "react";
import { StyleSheet, View, Image, TouchableOpacity} from "react-native";
import sidebar from  
import { useNavigation } from "@react-navigation/native";

export default function Header(){
    const navigation = useNavigation();

    return(
    <View style={styles.container}>
        <View>
            <Image style={styles.headermenu } source={require('../assets/Menu.png')}></Image>
        </View>
        <View>

        </View>
        <View>
            <Image style={styles.headerlogo} source={require('../assets/Logo.png')}></Image>
        </View>

        <View style={styles.icons}>
            <Image style={styles.searchIcon} source={require('../assets/Search-2.png')}></Image>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cart')}>
            <Image style={styles.shoppingBag} source={require('../assets/shoppingBag.png')}></Image>
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 10,
        flexDirection: 'row',
        borderColor: 'black',
        width: '100%',
    },

    headermenu: {
        width: 30,
        height:33
    },

    headerlogo:{
        width: 99,
        height: 40,
        left: 21
    },
    
    icons: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    searchIcon:{
        width: 30,
        height: 30, 
        marginRight: 20
    },

    shoppingBag: {
        width: 30,
        height: 30
    },
    
    button: {
        position: 'relative',
    }
})



