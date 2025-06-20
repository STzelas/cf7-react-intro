import { z } from "zod";

export const productSchema = z.object({
  // coerce το μετατρέπει σε number πριν το validation
  id: z.coerce.number().int(),
  name: z.string().min(1, "Required"),
  slug: z.string().min(1, "Required")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Slug must use only Latin letters, numbers, - or _",
    ),
  description: z.string(),
  image: z.string().url("Must be valid URL").optional().or(z.literal("")),
  price: z.coerce.number().nonnegative("Must be greater than 0"),
  is_active: z.boolean(),
  is_favorite: z.boolean(),
  sort: z.coerce.number().int().min(0, "Must be greater than 0"),
  category_id: z.coerce.number().int().min(1, "Category is Required"),
})

export const productFormSchema = productSchema.omit({id: true})

export type ProductType = z.infer<typeof productSchema>

// θα κάνουμε εδώ κλήσεις για τα products
const API_URL: string = import.meta.env.VITE_API_URL;
const TENANT_ID: string = import.meta.env.VITE_TENANT_ID;

// export type Product = {
//   id: number,
//   category_id?: number,
//   name: string,
//   slug: string,
//   description?: string,
//   image?: string,
//   price: number,
//   is_active: boolean,
//   is_favorite: boolean,
//   sort: number,  // Το 0 είναι το πρώτο που φαίνεται στη λίστα
// }

// GET function που επιστρέφει Products τύπου product, σε Array
export async function getProducts():Promise<ProductType[]> {
  const res = await fetch(`${API_URL}/tenants/${TENANT_ID}/products/`);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();
  console.log(data)
  return data
}

// GET function που επιστρέφει 1 object Product με το id του
export async function getProductById(id: number):Promise<ProductType> {
  const res = await fetch(`${API_URL}/tenants/${TENANT_ID}/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  const data = await res.json();
  console.log(data)
  return data
}

// PUT function που επιστρέφει ενα product που έχει υποστεί update
export async function updateProduct(
  id:number,
  data: {
    name: string,
    slug: string,
    description?: string | undefined
    image?: string | undefined
    price: number,
    is_active: boolean,
    is_favorite: boolean,
    sort: number,
  }): Promise<ProductType> {
  const res = await fetch(`${API_URL}/tenants/${TENANT_ID}/products/${id}`,{
    method: "PUT",
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    throw new Error("Failed to update product");
  }
  return res.json();
}

// DELETE function που διαγράφει ένα product
export async function deleteProduct(id: number):Promise<void> {
  const res = await fetch(`${API_URL}/tenants/${TENANT_ID}/products/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error("Failed to delete product");
}