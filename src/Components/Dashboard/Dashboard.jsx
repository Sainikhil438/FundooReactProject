import React from "react";
import {useEffect, useState} from 'react';
import Makenote1 from "../Makenote1";
import Makenote2 from "../Makenote2";
import FundooApp from "../FundooApp"
import Notes from "./Notes/Notes"
import SwipeDrawer from "../SwipeDrawer";
import GetNotes from "../RetrieveAllNotes";
import { RetrieveNotes } from "../../Services/UserNoteServices";
import { MoveToTrash } from "../../Services/UserNoteServices";

// import { ArchiveNote } from "../../Services/UserNoteServices";

function Dashboard(){

    const [notesInput, setNotesInput] = useState(true)
    const [userNote,setUserNote]=useState([]);
    const [notesType, setNotesType]=useState("Notes");

    const retrieveAllNotes = async () =>{
        let response= await RetrieveNotes();
        console.log(response.data.data);
        //setUserNote(response.data.data)
        let allData = response.data.data;

        if(notesType === "Notes"){
            let notesData = allData.filter((x) => x.isArchive === false && x.isTrash === false)
            setUserNote(notesData);
        }
        else if(notesType === "Archive"){
            let achieveData = allData.filter((x) => x.isArchive === true && x.isTrash === false)
            setUserNote(achieveData);
        }
        else{
            let trashData = allData.filter((x) => x.isArchive === false && x.isTrash === true)
            setUserNote(trashData);
        }
    }

    useEffect(()=>{
        retrieveAllNotes()
    },[notesType]);

    return(
        <div>
            <SwipeDrawer  setNotesType={setNotesType}/>
            <Notes 
            setNotesInput={setNotesInput}
            retrieveAllNotes={retrieveAllNotes}/>
            <div style={{
                    display:'flex',
                    justifyContent: 'center',
                    flexWrap:'wrap'
                }}>
              {
                userNote.map((userNotes)=>
                <GetNotes
                 userNotes={userNotes}
                 retrieveAllNotes={retrieveAllNotes}
                 />
              )}
              </div>
            
        </div>
    )
}
export default Dashboard;


