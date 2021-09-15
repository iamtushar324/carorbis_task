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

	},[history])
	const [blogs,setBlogs] = useState([])
	useEffect(()=>{
		// axios.get('/api/blogs/' ).then((res)=>{
		// 	if(res.data.success){
		// 		let blogsData = res.data.data.blogs;
		// 		setBlogs(blogsData)

		// 	}
		// })
	},[])

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
			{/* {blogs?.map((blog)=>{
				return <BlogBox content={blog.mainContent} title={blog.title} />
			})} */}
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
	position:fixed;
	bottom:25px;
	right:50px;
`
