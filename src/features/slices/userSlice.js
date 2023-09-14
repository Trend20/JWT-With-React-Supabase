import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    token:'',
    user:{}
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        logout: (state) =>{
            state.isLoggedIn = '';
            state.token = '';
        },
        setToken: (state, action) =>{
            state.token = action.payload;
        }
    }
})




