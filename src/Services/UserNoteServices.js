import axios from "axios";



let token;
function Authorize()
{
    return token = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
}

export const NoteMake = async (noteObj) => {
    let response = await axios.post(
        "https://fundoowebapplication1.azurewebsites.net/api/Note/Notemaking", noteObj, Authorize());
        //"https://localhost:44329/api/User/Login",noteObj,Authorize());
        console.log(response);
    return response;
};

export const RetrieveNotes = async () => {
    let response = await axios.get(
        "https://fundoowebapplication1.azurewebsites.net/api/Note/ParticularUserId", Authorize());
        //"https://localhost:44329/api/User/Login",Authorize());
    return response;
};


export const MoveToTrash = async (id) => {
    let response = await axios.put(
        `https://fundoowebapplication1.azurewebsites.net/api/Note/Trash?Noteid=${id}`,
        null,
        Authorize()
    );
    return response;
};


export const ArchiveNote = async (id) => {
    const response = await axios.put(
        `https://fundoowebapplication1.azurewebsites.net/api/Note/Archive?Noteid=${id}`,
        null,
        Authorize()
    );
    return response;
};

export const PinNote = async (id) => {
    const response = await axios.put(
        `https://fundoowebapplication1.azurewebsites.net/api/Note/Pin?Noteid=${id}`,
        null,
        Authorize()
    );
    return response;
};