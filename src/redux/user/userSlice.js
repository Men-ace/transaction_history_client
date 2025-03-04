// slice - used to define and build initial state and functions to update state 

// 1. define initial state 
// 2. Define Reducer Functions | Create a slice 

const initialState ={
    user:{

    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setUser: (state,action) =>{
            const { payload } = action 
            state.user = payload 
        }
    }
})