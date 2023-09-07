const ACTION_TYPE={INCREASE:'INCREASE','DECREASE':'DECREASE'}
export const counterReducer=(state,action)=>{
    console.log('dispatch(action) 호출할때마다 리쥬서가 호출된다');
    console.log('현재 state:%s,액션:%O',state,action);
    switch(action.type){
        case ACTION_TYPE.INCREASE:
            return state+1;
        case ACTION_TYPE.DECREASE:
            return state-1;
        default:
            return new Error('액션이 다르다');
    }

};