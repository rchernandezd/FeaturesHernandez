import { StyleSheet, Text, View } from 'react-native';

import color from '../constants/color.js';

const ProductoDetalleComp = ({ item }) => {
    return (
        <View>
            <View style={styles.cuadroInterior}>
                <View style={styles.imagenProducto}>
                    <Text>{item.nombreProducto}</Text>
                </View>
            </View>
            <Text style={styles.descProd}>{item.nombreProducto}</Text>
            <Text style={styles.nuevo}>{item.uso}</Text>
            <Text style={styles.tipoEntrega}>{item.entrega}</Text>
            <Text style={styles.precio}>{item.precio}</Text>
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
        width: 137,
        height: 145,
        backgroundColor: "#FFFFFF",
        margin: 10,
        alignContent: 'center',
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
        margin: 10
    },
});

export default ProductoDetalleComp;