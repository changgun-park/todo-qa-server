import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
})
export class Todo extends Document {
  id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ default: false })
  completed: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
