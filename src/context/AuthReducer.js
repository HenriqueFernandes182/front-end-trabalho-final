export default(state, action) => {
    switch (action.type) {
        case 'SET_IS_AUTHENTICATED':
            return setIsAuthenticated(action.payload, state)
        case 'SET_ERROR_MESSAGE':
            return setErrorMessage(action.payload, state)
        case 'SET_SUCCESS_MESSAGE':
            return setSuccessMessage(action.payload, state)
        case 'SET_AUTH_TOKEN':
            return setAuthToken(action.payload, state)
        case 'SET_IS_ERROR_OPEN':
            return setIsErrorOpen(action.payload, state)
        case 'SET_IS_SUCCESS_OPEN':
            return setIsSuccessOpen(action.payload, state)
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
function setIsErrorOpen(data, state) {
    return {
        ...state,
        isErrorOpen: data
    }
}
function setIsSuccessOpen(data, state) {
    return {
        ...state,
        isSuccessOpen: data
    }
}
function setErrorMessage(data, state) {
    return {
        ...state,
        errorMessage: data
    }
}
function setSuccessMessage(data, state) {
    return {
        ...state,
        successMessage: data
    }
}

function setAuthToken(data, state) {
    return {
        ...state,
        authToken: data
    }
}