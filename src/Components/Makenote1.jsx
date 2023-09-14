// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import { margin, padding } from '@mui/system';
// import NewListIcon from '@mui/icons-material/CheckBoxOutlined';
// import DrawingIcon from '@mui/icons-material/BrushOutlined';
// import ImageIcon from '@mui/icons-material/PhotoOutlined';
// import { yellow } from '@mui/material/colors';

// function Makenote1({setNotesInput}) {
//   const handleClick = (event) =>{
//     setNotesInput(false)
//   }
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         flexWrap: 'wrap',
//         '& > :not(style)': {
//           m: 1,
//           width: 600,
//           height: 45,
//           ":hover": {
//             cursor: 'text'
//           },
//         },

//       }}
//     >
//       <Paper elevation={3} onClick={handleClick}>
//         <span style={{ marginLeft: 10 }}>Take a note...
//           <NewListIcon style={{ marginLeft: 320 }} />
//           <DrawingIcon style={{ marginLeft: 37 }} />
//           <ImageIcon style={{ marginLeft: 37, marginTop: 10 }} /></span>
//       </Paper>
//     </Box>
//   );
// }
// export default Makenote1;