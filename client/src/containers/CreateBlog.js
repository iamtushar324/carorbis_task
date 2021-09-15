import React , {useState} from 'react'
import styled from 'styled-components'
import { baseColors } from 'styles/baseStyles'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default function CreateBlog(props){

	const [data , setData] = useState({})

	const handleClose = () => {
	props.setOpen(false);
	};
	return (<MainWrapper>
			<Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Create Blog</DialogTitle>
				<DialogContent>
				<TextField
				autoFocus
				margin="dense"
				id="title"
				label="Enter Blog Title"
				type="text"
				fullWidth
				/>
				<Descriptions>Blog Description</Descriptions>
				<TextareaAutosize aria-label="Blog Description" minRows={3} placeholder="Enter Description" style={{width:'100%',marginBottom:20}} onBlur={(e)=>{
					setData((prev)=>{ return {...prev , mainContent:e.target.value}})
				}} />


				</DialogContent>
				<DialogContentText style={{marginLeft:20}}>
					Note :- After Submission This Blog will be reviewed by Sub-Admins and Then Admin , Then It Will be Published to the public.
				</DialogContentText>
				<DialogActions>
				<Button onClick={handleClose} color="primary">
				Cancel
				</Button>
				<Button onClick={handleClose} color="primary">
				Submit For Review
				</Button>
				</DialogActions>
			</Dialog>
	</MainWrapper>)
}

const Descriptions = styled.h3`
font-weight:normal
`

const MainWrapper = styled.div``