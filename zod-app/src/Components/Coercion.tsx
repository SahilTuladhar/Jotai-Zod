import {z} from 'zod'


const Coercion = () => {

    const CoerseStringSchema = z.coerce.string()

    const CoerseNumSchema = z.coerce.number()

    console.log(CoerseStringSchema.parse(12/3));
     
    try{
        console.log(CoerseNumSchema.parse('string'));
    }catch(err){
        if(err instanceof z.ZodError){
        const errArr = err.errors[0]
          return(
            <h2>{errArr.message}</h2>
          )
          
            
        }else{
            console.log(err);
            
        }
        
    }
    
    
    

    return (
        <div>
            Coercion Concepts : Convert from one data type to another
        </div>
    )

}

export default Coercion