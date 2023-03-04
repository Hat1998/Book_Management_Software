import express,{Application} from "express";
const app: Application = express();
import routeUser from './routes/user.route'
import routeBook from './routes/book.route'
app.use(express.json())


app.use('/users', routeUser)
app.use('/books', routeUser)
app.use('/loans', routeUser)






 app.listen(3012, ()=>{
    console.log('server is listening')
})