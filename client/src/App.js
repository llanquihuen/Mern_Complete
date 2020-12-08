import React, {useState, useEffect} from 'react'
import {Container, AppBar, Typography,Grow,Grid} from "@material-ui/core"
import {useDispatch} from 'react-redux';

import {getPosts} from './actions/posts'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles'
import memories from './images/memories.png'

const App = () => {
    const [currentId, setCurrentId] = useState(null)
    const classes =useStyles(); //Los estilos del archivo style.js
    const dispatch = useDispatch();
    // console.log(setCurrentId)

    useEffect(() => {
        dispatch(getPosts())  ////////2* action->UseEffect ->reducer 
    }, [currentId, dispatch])
    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h3" align="center">Recuerdos</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} md={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>

                </Container>
            </Grow>
        </Container>
    )
}

export default App
