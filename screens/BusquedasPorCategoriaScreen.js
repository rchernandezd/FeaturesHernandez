import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import CategoriasComp from '../components/CategoriasComp.js';
import EmprendedoresComp from '../components/EmprendedoresComp.js';
import React from 'react';
import color from '../constants/color.js';
import { selectCategoriaProducto } from "../store/actions/CategoriasProductos.action";
import { selectEmprendedor } from '../store/actions/Emprendedores.action.js';

//import { EMPRENDEDORESDATA } from '../data/EmprendedoresData.js';

//import CategoriasEmprendedorComp from '../components/CategoriasEmprendedorComp';


//import { CATEGORIASEMPRENDEDORDATA } from '../data/CategoriasEmprendedorData';
//import { CATEGORIASPRODUCTODATA } from '../data/CategoriasProductoData';

function BusquedasPorCategoriaScreen({navigation}) {

    const categoriasProducto = useSelector(state => state.categorias.categorias);
    const emprendedores = useSelector(state => state.emprendedores.emprendedores);

    const dispatch = useDispatch();

    const handleSelectedProductos = () => {
        navigation.navigate('Productos', {
            nombre: 'Almacen Vecino',
        });
    }

    const handleSelectedCategoria = (item) => {
        //console.log("CategoriasScreen: " + item.idCategoria)
        dispatch(selectCategoriaProducto(item.idCategoria))
        //navigation.navigate('Productos', {
        //    categoriaID: item.idCategoria,
        //    nombre: item.nombreCategoria,
           // });
        navigation.navigate('Productos', {
            nombre: item.nombreCategoria
        })

    }

    const handleSelectedEmprendedor = (item) => {
        dispatch(selectEmprendedor(item.id))
        navigation.navigate('EmprendedorDetalle', {
            //EmprendedorID: item.id,
            nombre: item.nombreEmprendedor,
        });
    }

    const renderCategoriasItem = ({ item }) => (
        <CategoriasComp item={item} onSelected={handleSelectedCategoria}/>
    );

    const renderEmprendedoresItem = ({ item }) => (
        <EmprendedoresComp item={item} onSelected={handleSelectedEmprendedor}/>
    );

  return (
    <View style={styles.screen}>
        <View style={[styles.container, {flex: 1}]}>
            <Text>SLIDER</Text>
        </View>
        <View style={[styles.container, {flex: 2.5}]}>
            {/* <TextInput style={styles.input} placeholder='Buscar productos....'/> */}
            <Text style={styles.texto}>CATEGORIAS DE PRODUCTOS MAS POPULARES</Text>
            <FlatList
                data={categoriasProducto}
                keyExtractor={item => item.idCategoria}
                renderItem={renderCategoriasItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
        <View style={[styles.container, {flex: 2.5}]}>
            {/* <TextInput style={styles.input} placeholder='Buscar emprendedores....'/> */}
            <Text style={styles.texto}>EMPRENDEDORES</Text>
            <FlatList
                data={emprendedores}
                keyExtractor={item => item.id}
                renderItem={renderEmprendedoresItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
         <View style={[styles.container, {flex: 2}]}>
        {/*    <Button title='Ir a Productos' onPress={handleSelectedProductos}/>*/}
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        },
    container: {
        flex: 1,
        backgroundColor: color.GrisClaro,
        padding: 10,
        margin: 5,
        //flexDirection: "column",
    },
    input: {
        width: 300,
        height: 35,
        backgroundColor: "#EEF3F4",
        padding: 2,
    },
    texto: {
        color: color.TextoNaranjo,
        fontWeight: 'bold',      
        fontSize: 16,
        marginBottom: 5,  
    }
});


export default BusquedasPorCategoriaScreen;