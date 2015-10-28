export default (type, api, payload) => {
    return {
        type,
        meta: {
            api: () => api()
        },
        payload
    };
};
