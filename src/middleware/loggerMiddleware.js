export const loggerMiddleware = (store) =>{
    return function(next){
        return function(action){
            console.log('action is happening of ', action.type,' with payload', action.payload);
            // logic action.payload.isAuthenticated = true
            // store.dispatch({type:"data/entry_started"});
            // make an api call
            //await then
            // dispatch({type:"data/entry_completed"});
            // next(action)
            next(action);
            console.log('Next State',store.getState());
        }
    }
}

