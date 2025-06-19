// θα κάνουμε εδώ κλήσεις για τα products
const API_URL: string = import.meta.env.VITE_API_URL;
const TENANT_ID: string = import.meta.env.VITE_TENANT_ID;

export type Product = {
  id: number,
  category_id?: number,
  name: string,
  slug: string,
  description?: string,
  image?: string,
  price: number,
  is_active: boolean,
  is_favorite: boolean,
  sort: number,  // Το 0 είναι το πρώτο που φαίνεται στη λίστα

}

// GET function που επιστρέφει Products τύπου product, σε Array
export async function getProducts():Promise<Product[]> {
  const res = await fetch(`${API_URL}/tenants/${TENANT_ID}/products/`);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();
  console.log(data)
  return data
}

export async function deleteProduct(id: number):Promise<void> {
  const res = await fetch(`${API_URL}/tenants/${TENANT_ID}/products/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error("Failed to delete product");
}