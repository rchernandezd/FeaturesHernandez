import { FlatList, StyleSheet } from 'react-native';

import { FAVORITOSDATA } from '../data/FavoritosData';
import FavoritosComp from '../components/FavoritosComp';
import color from '../constants/color';
import react from "react";

function FavoritosScreen() 
{
    const handleSelectedProducto = (item) => {
        navigation.navigate('DetalleProducto', {
            productoID: item.id,
            nombre: item.nombreProducto,
        });
    }

    const renderFavoritosItem = ({ item }) => (
        <FavoritosComp item={item} onSelected={handleSelectedProducto}/>
    );

    return (
        <FlatList
            data={FAVORITOSDATA}
            keyExtractor={item => item.id}
            renderItem={renderFavoritosItem}
            //numColumns={2}
        />
  );
};

const styles = StyleSheet.create({
});

export default FavoritosScreen;