import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './RetrieveAllNotes.css';
import { useState } from 'react';
//Icons
import { IconButton, Typography } from '@mui/material';
import PinIcon from '@mui/icons-material/PushPinOutlined';
import RemindMeIcon from '@mui/icons-material/AddAlertOutlined';
import CollaboratorIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorChangeIcon from '@mui/icons-material/PaletteOutlined';
import ImageIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveIcon from '@mui/icons-material/ArchiveOutlined';
import MoreIcon from '@mui/icons-material/MoreVertOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { MoveToTrash } from '../Services/UserNoteServices';
import { ArchiveNote } from '../Services/UserNoteServices';
import { PinNote } from '../Services/UserNoteServices';

export default function GetNotes({ userNotes, retrieveAllNotes }) {
    const [archiveing, setArchieving] = useState(false);
    const [trashing, setTrashing] = useState(false);

    const handleMoveToTrash = async () => {
        let Id = userNotes.noteID;
        let response = await MoveToTrash(Id);
        console.log(response);
        setTrashing(response);
        retrieveAllNotes();
    }

    const handleMoveToArchive = async () => {
        let Id = userNotes.noteID;
        let response = await ArchiveNote(Id);
        console.log(response);
        setArchieving(response);
        retrieveAllNotes();
    }

    const handleMoveToPin = async () => {
        let Id = userNotes.noteID;
        let response = await PinNote(Id);
        console.log(response);
    }
    return (

        <div>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 4,
                    width: 'auto',
                    height: 'auto'
                },
            }}
        >
            <Paper elevation={2}>
                <div className='Icons' >
                    <div style={{ display: 'flex' }}>
                        {userNotes.title}
                        <IconButton onClick={handleMoveToPin}>
                            <PinIcon sx={{ marginLeft: 20 }} />
                        </IconButton>
                    </div>
                </div>
                <div>
                    {userNotes.takeNote}
                </div>
                <div className='Icons'>
                    <div>
                        <IconButton>
                            <RemindMeIcon />
                        </IconButton>
                    </div>

                    <div>
                        <IconButton>
                            <CollaboratorIcon />
                        </IconButton>
                    </div>

                    <div>
                        <IconButton>
                            <ColorChangeIcon />
                        </IconButton>
                    </div>

                    <div>
                        <IconButton>
                            <ImageIcon />
                        </IconButton>
                    </div>

                    <div>
                        <IconButton onClick={handleMoveToArchive}>
                            <ArchiveIcon />
                        </IconButton>
                    </div>
                    <div>
                        <IconButton onClick={handleMoveToTrash}>
                            <DeleteOutlineOutlinedIcon/>
                        </IconButton>
                    </div>
                    <div>
                        <IconButton>
                            <MoreIcon />
                        </IconButton>
                    </div>
                </div>
            </Paper>
        </Box>
        
        </div>
    );
}