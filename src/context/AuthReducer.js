export default(state, action) => {
    switch (action.type) {
        case 'SET_IS_AUTHENTICATED':
            return setIsAuthenticated(action.payload, state)
        case 'SET_AUTH_TOKEN':
            return setAuthToken(action.payload, state)
        default:
            return state
    }
}


function setIsAuthenticated(data, state) {
    return {
        ...state,
        isAuthenticated: data
    }
}

function setAuthToken(data, state) {
    return {
        ...state,
        authToken: data
    }
}