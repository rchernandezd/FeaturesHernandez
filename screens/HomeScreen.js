import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import React from 'react';
import color from '../constants/color';

function HomeScreen({navigation}) {
    
    const handleSelectedIngresar = () => {
        navigation.navigate('BusquedasPorCategoria', {
            nombre: 'Almacen Vecino',
        });
    }

  return (
    <View style={styles.screen}>
        <View style={styles.containerSuperior}>
            <Image
                // source={require("../assets/Logo1SM.jpg")}
                // style={{ width: 380, height: 180 }}/>
                source={require("../assets/LogoAlmacen.png")}
                style={{ width: 220, height: 220 }}/>
        </View>
        <View style={styles.containerInferior}>
            <View>
                <View style={{ flexDirection: 'row', marginEnd: 20, justifyContent: 'space-between', marginTop:10}}>
                    <Text style={styles.textoBienvenido}>Bienvenido</Text>
                    <Image
                        source={require("../assets/Ubicacion.png")}
                        style={{ width: 25, height: 25, left:35, padding: 10 }}/>
                    <Text style={{color: color.TextoNaranjo}}>Almacen Vecino</Text>
                </View>
                <TextInput placeholder="Ingresa tu email...." style={styles.input}></TextInput>
                <TextInput placeholder="Ingresa tu contraseña...." style={styles.input}></TextInput>
                <Text style={styles.dato}>¿Olvidaste tu Contraseña?</Text>
                <TouchableOpacity onPress={handleSelectedIngresar}>
                    <View style={styles.BtnContainer}>
                        <Text style={styles.title}>Ingresar</Text>
                    </View>
                </TouchableOpacity>
                <TextInput placeholder="Buscar almacen..." style={styles.input}></TextInput>
            </View>
            <View>
                <TouchableOpacity onPress={handleSelectedIngresar}>
                    <View style={styles.BtnContainer}>
                        <Text style={styles.title}>Ingresar como invitado</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>    
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 1,
        flexDirection: "column",
    },
    dato: {
        color: color.Celeste,
        fontSize: 13,
        textAlign: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 15,
        color: '#FFFFFF'
    },
    BtnContainer: {
        backgroundColor: color.Celeste,
        height: 40,
        width: 200,
        borderRadius: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
    },
    containerSuperior: {
      flex: 1,
      //backgroundColor: "#9E9E9E",
      backgroundColor: "#FFFFFF",
      alignItems: 'center',
    },
    containerInferior: {
        //top: 200,
        flex: 2,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        backgroundColor: "#FFFFFF",
        marginTop: 15,
    },
    textoBienvenido: {
        alignContent: 'center',
        left: 30,
        padding: 10,
        fontSize: 28,
        fontWeight: 'bold',
        color: color.TextoAzul,    
    },
    textoColegio: {
        color: color.TextoGris,
        fontSize: 22,
        left: 60,
        marginBottom: 15,
    },
    input: {
        width: 280,
        height: 50,
        marginTop: 10,
        borderBottomColor: 'black', 
        borderBottomWidth: 0,
        backgroundColor: color.GrisClaro,
        padding: 3,
        //margin: 20,
        left: 30,
    },
    botonIngresar: {
        width: 240,
        height: 50,
        fontSize: 20,
    }
});


export default HomeScreen;