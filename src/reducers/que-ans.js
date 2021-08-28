const initialState = {
    answerInfo:[],
    selectedQuestion: 0,
    Users:[],
}

const reducer = (state= initialState, action) =>{
    switch (action.type) {
        case "NEXT_QUESTION":
             return{
                 ...state,
                 selectedQuestion: state.selectedQuestion+1
             }
        case "PREV_QUESTION":
             return{
                 ...state,
                 selectedQuestion: state.selectedQuestion-1
             }
        case "SET_ANSWER":
             return {
                 ...state,
                 answerInfo:[action.payload, ...state.answerInfo],
             }
        case "ADD_USER" :
            return {
                ...state,
                Users:[action.payload, ...state.Users],
            }
        default:
            return state;
    }
}

export default reducer;