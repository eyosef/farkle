export default function farkleReducer (state = {}, action) {
    switch (action.type) {
        case 'UPDATE_SCORE':
            return {score: state.score} //fix
        default: 
            return state;
    }
}