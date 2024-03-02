export const reducers = {
    user: {
        logUserName: (state: any, action: any) => {
            console.log("object")
            
            return "User Details Changed"
        },
        logUserId: (state: any, action: any) => {
            return state.filter((todo: any) => todo.id !== action.payload);
        },
    }
}