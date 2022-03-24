const { SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAILED } = require("../actionstypes/authtypes");

const initialState = {
    loading:false,
    user:[],
    msg:"",
    errors:[]

}

const authReducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case SIGN_UP:
            return {...state,loading:true}
        case SIGN_UP_SUCCESS:
            return {...state,loading:false,msg:payload}    
        case SIGN_UP_FAILED:
            return {...state,loading:false,errors:payload}    
        
        default:
                return state
    }
}
export default authReducer;
