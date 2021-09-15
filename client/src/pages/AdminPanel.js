import React , {useEffect, useState} from 'react'
import styled from 'styled-components'
import BlogBoxForPanel from 'containers/BlogBoxForPanel'
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default function AdminPanel(){
	const [blogs,setBlogs] = useState([])
	useEffect(()=>{
		// axios.get('/api/blogs/' ).then((res)=>{
		// 	if(res.data.success){
		// 		let blogsData = res.data.data.blogs;
		// 		setBlogs(blogsData)

		// 	}
		// })
	},[])
	return (
	<MainWrapper>
		<h1>Admin Panel</h1>
		<BlogsContainer>
			<BlogBoxForPanel />
			<BlogBoxForPanel />
			<BlogBoxForPanel />
			{/* {blogs?.map((blog)=>{
				return <BlogBoxForPanel content={blog.mainContent} title={blog.title} />
			})} */}
		</BlogsContainer>
		<BtnContainer><Button>Sign Out</Button></BtnContainer>
	</MainWrapper>
	)
}

//styles 

const MainWrapper = styled.div`
text-align: center;
`

const BlogsContainer = styled.div`
width:100%;
`
const BtnContainer = styled.div`
	position:fixed;
	top:25px;
	right:50px;
`