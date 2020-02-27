import { Schema, model, Document } from 'mongoose';

interface ProductInterface extends Document {
  title?: string;
}

const ProductSchema = new Schema(
  {
    title: String,
  },
  {
    timestamps: true,
  }
);

export default model<ProductInterface>('Product', ProductSchema);
