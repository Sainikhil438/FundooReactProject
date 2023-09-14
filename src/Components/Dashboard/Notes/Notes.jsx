import {Box, Drawer} from '@mui/material'
import {styled} from '@mui/material/styles'
import Form from './Form'

const DrawerHeader = styled('div')(({ theme }) =>({
  ...theme.mixins.toolbar,
}));

const Notes = ({setNotesInput, retrieveAllNotes}) =>{
  return(
    <Box sx={{ display : 'flex', width: '100%'}}>
      <Box sx={{ p: 3, width : '100%'}}>
        <DrawerHeader/>
        <Form 
        setNotesInput={setNotesInput}
        retrieveAllNotes={retrieveAllNotes}
        />
      </Box>
    </Box>
  )
}

export default Notes;