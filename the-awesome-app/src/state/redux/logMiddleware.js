

export const logMiddleware = (store) => {

    return (next) => {

        return (action) => {

            console.log("[logMiddleware state]", store.getState());
            console.log("[logMiddleware action]", action);
            const result = next(action);
            console.log("[logMiddleware state after action]", store.getState());
            return result;
        }
    }

}