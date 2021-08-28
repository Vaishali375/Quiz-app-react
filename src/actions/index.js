export const nextQuestion = () =>{
    return {
        type: "NEXT_QUESTION"
    }
}

export const prevQuestion = () =>{
    return{
        type: "PREV_QUESTION"
    }
}

export const setAnswer = (answerInfo) =>{
   return {
    type: "SET_ANSWER",
    payload: answerInfo
   }
}

export const addUser = (Users) =>{
    return {
     type: "ADD_USER",
     payload: Users
    }
 }

 



