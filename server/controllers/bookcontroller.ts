import prisma from '../prisma/index';

// create a new post

export const createBook = async (req:any, res:any, next:any) => {
    try {
       const {title, description,author,price,stock }  = req.body
       console.log('i am in')
       //validation on you
       const result = await prisma.book.create({
        data: {
            title,
            description,
            author      ,
            price,
            stock
        }
       });
       res.json(result)
    } catch (error:any) {
        throw new Error(error)
    }
}

//update an existing book

export const updateBook = async (req:any, res:any, next:any) => {
    const {id} = req.params;
    const {title, description,author,price,stock} = req.body
    // title       String
    // description String
    // author      String
    // price       Float
    // stock

    try {
        const result = await prisma.book.update({
            where: {id: parseInt(id)},
            data: {
                title,
                description,
                author,
                price,
                stock
            }
        });
        res.json(result)
    } catch (error) {
        res.json({error: `Post with ${id} does not exists`})
    }
}

//delete a book

export const deleteBook = async (req:any, res:any, next:any) => {
    const { id } = req.params
    // console.log('id: ' , id)

    try {
        
        const result = await prisma.book.delete({
            where: {id: parseInt(id)}
        });
        res.json(result)

    } catch (error:any) {
        console.log('error: ' , error)
        res.json({error: `Book with ${id} does not exists`})
        
    }
}

//get all post

export const getBooks = async (req:any, res:any, next:any) => {
    try {
        const result  = await prisma.book.findMany()
        res.json(result)
    } catch (error) {
        res.json({error: `NO post was found`})
    }
}