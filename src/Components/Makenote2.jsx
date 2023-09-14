// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import { TextareaAutosize } from '@mui/base/TextareaAutosize';
// import Button from '@mui/material/Button';
// import { TextField } from '@mui/material';
// //Icons
// import PinIcon from '@mui/icons-material/PushPinOutlined';
// import RemindMeIcon from '@mui/icons-material/AddAlertOutlined';
// import CollaboratorIcon from '@mui/icons-material/PersonAddAlt1Outlined';
// import ColorChangeIcon from '@mui/icons-material/PaletteOutlined';
// import ImageIcon from '@mui/icons-material/InsertPhotoOutlined';
// import ArchiveIcon from '@mui/icons-material/ArchiveOutlined';
// import MoreIcon from '@mui/icons-material/MoreVertOutlined';
// import UndoIcon from '@mui/icons-material/UTurnLeftOutlined';
// import RedoIcon from '@mui/icons-material/UTurnRightOutlined';


// export default function SimplePaper({ setNotesInput }) {
//     const handleClick = (event) => {
//         setNotesInput((prev) => !prev)
//     }
//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 flexWrap: 'wrap',
//                 '& > :not(style)': {
//                     m: 1,
//                     width: 600,
//                 },
//             }}
//         >
//             <Paper elevation={3}>
//                 <Box>
//                     <TextField id="standard-basic" placeholder='Title' multiline maxRows={Infinity} variant="standard" InputProps={{ disableUnderline: true }} style={{ margin: '1ch', width: 550 }} />

//                     <PinIcon style={{ marginTop: '1ch' }} />

//                     <TextField id="standard-basic" placeholder='Take a note...' multiline maxRows={Infinity} variant="standard" InputProps={{ disableUnderline: true }} style={{ margin: '1ch', width: 580 }} />

//                     <RemindMeIcon style={{ width: 17, marginLeft: '2ch', marginTop: '2ch' }} />

//                     <CollaboratorIcon style={{ width: 17, marginLeft: '2ch', marginTop: '2ch' }} />

//                     <ColorChangeIcon style={{ width: 17, marginLeft: '2ch', marginTop: '2ch' }} />

//                     <ImageIcon style={{ width: 17, marginLeft: '2ch', marginTop: '2ch' }} />
//                     <ArchiveIcon style={{ width: 17, marginLeft: '2ch', marginTop: '2ch' }} />

//                     <MoreIcon style={{ width: 17, marginLeft: '2ch', marginTop: '2ch' }} />

//                     <UndoIcon style={{ width: 17, marginLeft: '2ch', marginTop: '2ch', rotate: '90deg' }} />

//                     <RedoIcon style={{ width: 17, marginLeft: '2ch', marginTop: '2ch', rotate: '-90deg' }} />

//                     <Button variant="text" onClick={handleClick} style={{ color: 'black', marginLeft: '20ch', marginBottom: '2ch' }}>Close</Button>

//                 </Box>
//             </Paper>
//         </Box>
//     );
// } 