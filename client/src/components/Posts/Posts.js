import React from 'react'
import {Grid, CircularProgress} from '@material-ui/core'
import {useSelector} from 'react-redux'

import Post from './Post/Post'

import useStyles from './styles'

const Posts = ({setCurrentId}) => {
    
    const posts = useSelector((state) => state.posts) //posts por .reducer/index.js
    const classes = useStyles(); //Los estilos del archivo style.js
    console.log("posts")
    // console.log(posts.length)
    // console.log(setCurrentId)
    return (
        !posts.length ? <CircularProgress /> :(
            <Grid className={classes.containter} container alignItems="stretch" spacing={3}>
                {posts.map((post)=>(
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
           
            </Grid>
        )
    );
};
export default Posts
