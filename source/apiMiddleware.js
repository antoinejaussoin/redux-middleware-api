export default store => next => action => {
    if (!action.meta || !action.meta.api) {
        return next(action);
    }
    const { dispatch } = store;
    const { type, meta: { api }, payload = {} } = action;

    const PENDING = type + '_PENDING';
    const SUCCESS = type + '_SUCCESS';
    const FAILURE = type + '_FAILURE';

    dispatch({ type: PENDING, meta: {
        originalPayload: payload
    }});

    return api().then(res => dispatch({
        type: SUCCESS,
        payload: res,
        meta: {
            originalPayload: payload
        }
    }), error => dispatch({
        type: FAILURE,
        error: true,
        payload: error instanceof Error ? error : new Error(error),
        meta: {
            originalPayload: payload
        }
    })).catch(error => dispatch({
        type: FAILURE,
        error: true,
        payload: error instanceof Error ? error : new Error(error),
        meta: {
            originalPayload: payload
        }
    }));
};
