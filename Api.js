const BASE_URL = 'http://localhost:5079/api/Task'

export const getRequest = async() => {
    try {
        // executa o comando
        const response = await fetch (BASE_URL, {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        if (!response.ok){
            throw new Error(`GET Request failed with status: ${response.status}`);
        }

        const textData= await response.text();
        const data = JSON.parse(textData);

        return data;

    } catch (error) {
        
        // tratativa - em caso de erro
        console.error(error);
        throw error;
    }
}

export const postRequest = async (title, desc) => {
    try {
        let myBody = {
            id : 0,
            title: title,
            description: desc
        };

        const response = await fetch(BASE_URL,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(myBody),
        });

        if(!response.ok){
            throw new Error("Post request failed!!!")
        }

        const textData = await response.text();
        return JSON.parse(textData);
    } catch (error){
        console.error(error);
        throw error;
}

};

export const deleteRequest = async (id) =>{
    try{
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
        headers:{
            "Content-Type": "text/plain",
        },
    });

    if(!response.ok){
        throw new Error("Post request failed!!!")
    }
} catch (error){
    console.error(error);
    throw error;
}
}