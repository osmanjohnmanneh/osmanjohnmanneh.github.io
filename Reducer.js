import { ADD_TODO, visibilityFilters,TOGGLE_TODO,SET_VISIBILITY_FILTER} from './Action'
import {combineReducers} from 'redux'
import {createStore} from 'react-redux'

console.log(store.getState());

const {SHOW_ALL} = visibilityFilters

 function visibilityFilter(state = SHOW_ALL,action){
   switch(action.type){
     case SET_VISIBILITY_FILTER:
     return action.filter 
     default:
     return state
   }
 }

 function todo(state = [], action){
   switch(action.type){
     case ADD_TODO:
     return [
       ...state,
       {
         text: action.text,
         complete:false
       }
     ]
     case TOGGLE_TODO:
     return state.map((todo,index)=>{
      if(index === action.index){
        return Object.assign({},todo,{
          complete: !todo.complete
        })
      }
      return todo
    })
    default:
    return state
   }
 }

 const todoApp = combineReducers({
   todo,
   visibilityFilter
 })

const store = createStore(todoApp)

export default store 