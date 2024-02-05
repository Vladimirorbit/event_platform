import { Schema, model, models, Document } from 'mongoose';

export interface IOrder extends Document {
    createAt: Date
    stripeId: string
    totalAmount: string
    event: {
        _id: string
        title: string
    }
    buyer: {
        id_: string
        firstName: string
        lastName: string
    } 
}

export type IOredrItem ={
    _id: string
    totalAmount: string
    createdAt: Date
    eventTitle: string
    eventId: string
    buyer: string
}

const OrderSchema = new  Schema({
    createAt: {
        type: Date,
        default: Date.now,
    },
    stripeId: {
        type: String,
        required: true,
        unuque: true,
    },
    totakAmount: {
        type: String,
    },
    event: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
    },
    buyer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
})


const Order = models.Order || model('Order', OrderSchema)

export default Order
