import { Box, ClickAwayListener, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useRef } from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import BrushIcon from '@mui/icons-material/Brush';
import ImageIcon from '@mui/icons-material/Image';
import IconButton from '@mui/material/IconButton';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';

//Icons
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import PinIcon from '@mui/icons-material/PushPinOutlined';
import RemindMeIcon from '@mui/icons-material/AddAlertOutlined';
import CollaboratorIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorChangeIcon from '@mui/icons-material/PaletteOutlined';
//import ImageIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveIcon from '@mui/icons-material/ArchiveOutlined';
import MoreIcon from '@mui/icons-material/MoreVertOutlined';
import UndoIcon from '@mui/icons-material/UTurnLeftOutlined';
import RedoIcon from '@mui/icons-material/UTurnRightOutlined';
import Button from '@mui/material/Button';
import { NoteMake } from '../../../Services/UserNoteServices';
//import { DataContext } from '../../../Context/DataProvider';



const Container = styled(Box)`
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 600px;
   box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
   padding: 10px 15px;
   border-radius: 8px;
   border-color:#e0e0e0;
   margin:auto;
   margin-bottom:30px
   box-shadow:grey;`



const Form = ({setNotesInput, retrieveAllNotes}) => {

    const [showTextField, setShowTextField] = useState(false);
    const [showCheckBoxIcon, setShowCheckBoxIcon] = useState(true);
    const [showBrushIcon, setShowBrushIcon] = useState(true);
    const [showPhotoIcon, setShowPhotoIcon] = useState(true);
    

    const containerRef = useRef();

    const onNoteClick = () => {
        setShowTextField(true);
        containerRef.current.style.minHeight = '70px';
        setShowCheckBoxIcon(false); 
        setShowBrushIcon(false); 
        setShowPhotoIcon(false); 
    }

    const handleClickAway = () => {
        setShowTextField(false);
        containerRef.current.style.minHeight = '30px';
        setShowCheckBoxIcon(true); 
        setShowBrushIcon(true); 
        setShowPhotoIcon(true); 
    }

    //const [notesInput, setNotesInput] = useState(true);

    
    const handleClick = async () => {
        setNotesInput((prev) => !prev)
        console.log(makeNote);
        if(makeNote != null && makeNote.Title!= ""){
            let response = await NoteMake(makeNote);
            console.log(response);
            retrieveAllNotes();
        }
        
    }

    const [makeNote, setMakeNote] = useState({
        Title: "", TakeNote: ""
    });

    let name, value;
    const handleNotes = (e) => {
        //console.log(e);
        name = e.target.name;
        value = e.target.value;

        setMakeNote({ ...makeNote, [name]: value });
    }
    // const handleClick = () => {
    //     setShowTextField(false);
    // }

    return (

        <ClickAwayListener onClickAway={handleClickAway}>
            <Container ref={containerRef}>
                {showTextField &&
                    <TextField
                        placeholder="Title"
                        variant="standard"
                        name="Title"
                        value={makeNote.Title}
                        onChange={handleNotes}
                        InputProps={{
                            endAdornment: (
                                <IconButton>
                                    <PinIcon />
                                    {/* style={{ marginTop: '1ch'}} /> */}

                                </IconButton>
                            ),
                            disableUnderline: true
                        }}
                        
                    // style={{ marginBottom: 10 }}
                    />
                    
                }

                <div>
                    <TextField
                        placeholder="Take a note..."
                        variant="standard"
                        multiline
                        maxRows={Infinity}
                        name="TakeNote"
                        InputProps={{

                            disableUnderline: true

                        }}
                        value={makeNote.TakeNote}
                        onChange={handleNotes}
                        onClick={onNoteClick}

                    />
                    <span style={{ marginLeft: '35ch' }}>
                        <IconButton>
                            {showCheckBoxIcon && <CheckBoxOutlinedIcon />}
                        </IconButton>

                        <IconButton>
                            {showBrushIcon && <BrushOutlinedIcon />}
                        </IconButton>

                        <IconButton>
                            {showPhotoIcon && <InsertPhotoOutlinedIcon />}

                        </IconButton>
                    </span>

                    
                    {showTextField ? (

                        <IconButton onClick={onNoteClick}>
                            <RemindMeIcon style={{ width: 17, marginLeft: '1ch', marginRight: '1ch', marginTop: '2ch' }} />

                            <CollaboratorIcon style={{ width: 17, marginLeft: '1ch', marginTop: '2ch' }} />

                            <ColorChangeIcon style={{ width: 17, marginLeft: '2ch', marginTop: '2ch' }} />

                            <ImageIcon style={{ width: 17, marginLeft: '2ch', marginTop: '2ch' }} />
                            <ArchiveIcon style={{ width: 17, marginLeft: '2ch', marginTop: '2ch' }} />

                            <MoreIcon style={{ width: 17, marginLeft: '2ch', marginTop: '2ch' }} />

                            <UndoIcon style={{ width: 17, marginLeft: '3ch', marginRight: '2ch', marginTop: '2ch', rotate: '90deg' }} />

                            <RedoIcon style={{ width: 17, marginRight: '14ch', marginTop: '2ch', rotate: '-90deg' }} />
                            <Button variant="text" onClick={handleClick} style={{ color: 'black', marginLeft: '0ch', marginRight: '40ch', marginBottom: '0ch', marginTop: '2ch' }}>Close</Button>
                        </IconButton>

                    ) : (
                        ""
                    )}
                </div>

            </Container>
        </ClickAwayListener>
    )
}
export default Form;