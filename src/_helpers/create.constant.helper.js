export function createAsyncConstant(entity) {
    return {
        REQUEST: `${entity}_REQUEST`,
        SUCCESS: `${entity}_SUCCESS`,
        ERROR: `${entity}_ERROR`,
    }
}