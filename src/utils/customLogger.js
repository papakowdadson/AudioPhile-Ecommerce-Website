export const CustomLogger =(tile,body)=>{
    if (process.env.NODE_ENV === "development") {
        console.log("Running in development mode");
        console.log(`===========${tile}========`)
        console.log(body)
    }
}