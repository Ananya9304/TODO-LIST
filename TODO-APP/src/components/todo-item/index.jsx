import {Card,CardContent,Typography,CardActions,Button} from "@mui/material";


function Todoitem({todo ,fetchDetailsofCurrentTodo}){
    console.log(todo);
    return <Card sx={{
        maxWidth : 350,
        display: 'flex',
        flexDirection: "column",
        justifyContent: "space-between",
    }}>
        <CardContent>
            <Typography variant = "h5" color ={"text.secondary"}>
                {todo?.todo}
            </Typography>
        </CardContent>
        <CardActions>
            <Button
            onClick={()=>fetchDetailsofCurrentTodo(todo?.id)}
             sx={{
                backgroundColor: "purple",
                  color:"white",
                  opacity: "0.75",
                  "&:hover" : {
                    backgroundColor: "purple",
                    color:"white",
                    opacity: "1",
                  }
            }}>Show Details</Button>
        </CardActions>
    </Card>
}

export default Todoitem;