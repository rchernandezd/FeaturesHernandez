import { combineReducers, createStore } from "redux";

import CategoriasProductosReducer from "./reducers/CategoriasProductos.reducer";
import EmprendedoresReducer from "./reducers/Emprendedores.reducer";
import ProductosReducer from "./reducers/Productos.reducer";

const RootReducer = combineReducers({
    categorias: CategoriasProductosReducer,
    productos: ProductosReducer,
    emprendedores: EmprendedoresReducer
})

export default createStore(RootReducer);