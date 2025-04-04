import {z} from 'zod'



const PrimitiveType = () => {
    const stringSchema = z.string()
    const ItemSchema = z.object(
        {
            itemName : z.string(),
            count: z.number()

        }
    )

    type ItemType = z.infer<typeof ItemSchema>

    const Item : ItemType = {
        itemName : 'Apple',
        count : 1
        
    }
 
    const result = stringSchema.safeParse("This is a string")
    console.log(result.success);

    const itemResult = ItemSchema.safeParse(Item)
    console.log(itemResult);

    const StringDateSchema = z
    .string()
    .min(4, { message: "Length less than 4" });
    console.log(StringDateSchema.safeParse("il"));
    
    
    

    return(
        <div>
            Primitive Types are being rendered
        </div>
    )
}

export default PrimitiveType