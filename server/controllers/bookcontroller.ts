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

//update an existing post

// export const updatePost = async (req:any, res:any, next:any) => {
//     const {id} = req.params;
//     const {title, body} = req.body

//     try {
//         const result = await prisma.post.update({
//             where: {id: id},
//             data: {
//                 title: title,
//                 body: body
//             }
//         });
//         res.json(result)
//     } catch (error) {
//         res.json({error: `Post with ${id} does not exists`})
//     }
// }

//delete a post

// export const deletePost = async (req:any, res:any, next:any) => {
//     const {id} = req.params

//     try {
        
//         const result = await prisma.post.delete({
//             where: {id: id}
//         });
//         res.json(result)

//     } catch (error) {
//         res.json({error: `Post with ${id} does not exists`})
        
//     }
// }

//get all post

export const getBooks = async (req:any, res:any, next:any) => {
    try {
        const result  = await prisma.book.findMany()
        res.json(result)
    } catch (error) {
        res.json({error: `NO post was found`})
    }
}