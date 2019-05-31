export function generateAsyncQueryAction({
                                             query,
                                             queryConstants,
                                             responseProcessingCallback,
                                             payloadForwarding = false,
                                             exception = false,
                                         }) {
    return (queryParams, payload = queryParams) => (dispatch, getState) => {
        // выход из функции если удовлеворяется какое-то условие
        if (exception && exception({dispatch, getState, queryParams, payload})) return;

        dispatch({type: queryConstants.REQUEST});
        return query.call(null, queryParams)
            .then(({data}) => {
                if (data) {
                    let processedData = responseProcessingCallback ? responseProcessingCallback(data, {queryParams, payload}, {dispatch, getState} ) : data;
                    dispatch({
                        type: queryConstants.SUCCESS,
                        payload: payloadForwarding ? payload : processedData
                    });
                } else {
                    dispatch({
                        type: queryConstants.ERROR
                    });
                }
            })
            .catch(error => {
                console.error(error);
                dispatch({
                    type: queryConstants.ERROR
                });
            })
    };
}