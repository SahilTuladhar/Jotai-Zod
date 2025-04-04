            
import {z} from 'zod'

const Literal = () => {

    const NumSchemaLiteral = z.literal(2)

 try{
    console.log(NumSchemaLiteral.parse(2));  

 }catch(err){
  if(err instanceof z.ZodError)
    return(<div>{err.errors[0].message}</div>)
 }
 
    return (
        <div>This is the Literals page : {NumSchemaLiteral.parse(2)} and the value expected is {NumSchemaLiteral.value}</div>
    )
}

export default Literal