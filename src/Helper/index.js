export const signUp = (User) => {
    return  fetch("https://artiwiztech.in/register",{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(User)

    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
    
}

export const signIn = (Userone) => {
    return  fetch("https://artiwiztech.in/login",{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(Userone)

    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
    
}