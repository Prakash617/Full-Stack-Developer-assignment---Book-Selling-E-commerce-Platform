import prisma from "../prisma";

// create a new order

export const createOrder = async (req:any, res:any, next:any) => {
    try {
        const { userId,orderQuantities } = req.body;
        // console.log('i am in',userId)

        // Check for missing fields
        if (!userId || !orderQuantities || orderQuantities.length === 0 ) {
            throw new Error('Please provide all fields');
        }
        let total:number = 0
        const formattedOrderQuantities = orderQuantities.map((quantity:any) => {
            const { bookId, quantity: quantityValue, subtotal } = quantity;
            total += subtotal
            return {
              bookId,
              quantity: quantityValue,
              subtotal,
            };
          });
          console.log('total price:',total);
         // Ensure userId is a number
    // const userIdNumber = parseInt(userId);
       //validation on you
       const order = await prisma.order.create({
        data: {
          userId: parseInt(userId),
          total: total,
          quantities: {
            create: formattedOrderQuantities,
          },
        },
        include: {
          quantities: {
            include: {
              book: true,
            },
          },
          user: true,
        },
      });
  
    // res.json(result)
    res.status(201).json({ order });
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

export const getOrder = async (req:any, res:any, next:any) => {
    try {
      const result = await prisma.order.findMany({
        include: {
          quantities: true,
        },
      });
        res.json(result)
    } catch (error) {
        res.json({error: `NO post was found`})
    }
}