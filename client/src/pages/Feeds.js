import React, { useEffect ,useState} from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import {axios} from 'helpers';
import Button from '@material-ui/core/Button';
import { baseColors } from 'styles/baseStyles';
import BlogBox from 'containers/BlogBox'
import CreateBlog from 'containers/CreateBlog';

export default function Feeds(){
	const history = useHistory()
	const [openCreateBlog , setOpenCreateBlog] = useState(false)

	useEffect(()=>{
		// axios.get('/users/isLoggedIn' ).then((res)=>{
		// 	if(res.data.redirect){
		// 		history.push(res.data.redirect)
		// 	}
		// }).catch((err)=>{
		// 	alert("Internal Error , Try Agin Later")
		// })
		fetch(process.env.REACT_APP_BASE_URL + '/api/users/isLoggedIn' , {
			method: 'GET', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'include', // include, *same-origin, omit
			headers: {
			'Content-Type': 'application/json'
			// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			redirect: 'follow', // manual, *follow, error
			referrerPolicy: 'no-referrer',
		}).then((res)=>res.json()).then((res)=>{console.log(res)})

	},[history])

	const handleOpenCreateBlogModal = ()=>{
		setOpenCreateBlog(true)
	}

	return (
	<MainWrapper>
		<h1>Global Feeds</h1>
		<BtnContainer>
		<Button variant="contained" color="primary" onClick={()=>{
			handleOpenCreateBlogModal()
		}}>Create Blog</Button>
		</BtnContainer>
		<BlogsContainer>
			<BlogBox />
			<BlogBox />
			<BlogBox />
		</BlogsContainer>
		<CreateBlog open={openCreateBlog} setOpen={setOpenCreateBlog}/>
		<BtnContainerSignOut><Button>Sign Out</Button></BtnContainerSignOut>
	</MainWrapper>
	)
}

//styles 

const MainWrapper = styled.div`
text-align:center;
`
const BtnContainer = styled.div`
position:fixed;
top:20px;
right:40px;
`
const BlogsContainer = styled.div`
width:100%;
`
const BtnContainerSignOut = styled.div`
	position:absolute;
	bottom:25px;
	right:50px;
`
