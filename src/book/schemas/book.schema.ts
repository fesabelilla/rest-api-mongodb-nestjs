import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true,
})
export class Book  {

    @Prop()
    user_id: string;

    @Prop()
    title: string;
}

export const BookSchema = SchemaFactory.createForClass(Book)