import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import LocationSelectorComp from './LocationSelectorComp.js';
import color from '../constants/color.js';

const EmprendedorDetalleComp = ({ item }) => {
    // const [ location, setLocation ] = useState('');
    // const handlerLocation = loc => setLocation(loc);

    return (
        <View>
            {/* <View style={styles.cuadroInterior}> */}
                <View style={styles.imagenProducto}>
                    <Image
                        source={item.imagenCategoria}
                        style={{ width: 120, height: 120, alignSelf: 'center' }}/>
                    {/* <Text>{item.nombreEmprendedor}</Text> */}
                </View>
            {/* </View> */}
            <Text>Emprendedor: {item.nombreEmprendedor}</Text>
           {/* <Text style={styles.nuevo}>{item.uso}</Text>
            <Text style={styles.tipoEntrega}>{item.entrega}</Text>
            <Text style={styles.precio}>{item.precio}</Text> */}
            <View style={styles.cuadroMapa}>
                <LocationSelectorComp DatosEmprendedor={item}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cuadroExterior: {
        flex: 1,
        //height: 300,
        //borderWidth: 1,
        //borderColor: '#283693',
    },
    imagenProducto: {
        // width: 90,
        // height: 90,
        backgroundColor: "#FFFFFF",
        margin: 10,
        alignContent: 'center',
        alignSelf: 'center',
    },
    descProd: {
        color: color.TextoNaranjo,
        fontWeight: 'bold',
        fontSize: 16,
        paddingLeft: 10
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
        margin: 10,
        alignSelf: 'center',
    },
    cuadroMapa: {
        marginTop: 40,
    }
});

export default EmprendedorDetalleComp;