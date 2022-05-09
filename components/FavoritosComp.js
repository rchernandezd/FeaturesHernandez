import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import color from '../constants/color.js';
import react from 'react';

const FavoritosComp = ({ item, onSelected }) => {
    return (
    <View style={[styles.cuadroExterior, { backgroundColor: "#FFFFFF" }]}> 
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start'}}>
                <View style={styles.imagenProducto}>
                    <Text>{item.nombreProducto}</Text>
                </View>
                <View>
                    <Text style={styles.descProd}>{item.nombreProducto}</Text>
                    <Text style={styles.nuevo}>{item.uso}</Text>
                    <Text style={styles.tipoEntrega}>{item.entrega}</Text>
                    <Text style={styles.precio}>{item.precio}</Text>
                </View>
            </View>
    </View>
    )
};

const styles = StyleSheet.create({
    cuadroExterior: {
        flex: 1,
        //height: 300,
        //borderWidth: 1,
        //borderColor: '#283693',
        //backgroundColor: 'red',
    },
    CuadroDetalle: {
        backgroundColor: 'blue',
        marginLeft: 80,
        borderWidth: 1,
        borderColor: 'blue',
    },
    imagenProducto: {
        width: 110,
        height: 115,
        backgroundColor: color.GrisClaro,
        margin: 10,
        alignContent: 'center',
    },
    descProd: {
        color: color.TextoNaranjo,
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 10,
        marginTop: 10,
    },
    nuevo: {
        color: color.TextoAzul,
        fontSize: 12,
        marginLeft: 10,
        paddingTop: 10,
    },
    tipoEntrega: {
        color: color.TextoAzul,
        fontSize: 12,
        marginLeft: 10,
    },
    precio: {
        color: color.TextoNaranjo,
        fontWeight: 'bold',
        fontSize: 16,
        //alignSelf: 'center',
        paddingLeft: 55,
        paddingBottom: 10,
    },
    cuadroInterior: {
        width: 160,
        height: 170,
        backgroundColor: '#EEF3F4',
        margin: 10
    },
});

export default FavoritosComp;