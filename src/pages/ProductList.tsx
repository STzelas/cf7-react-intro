import {useEffect, useState} from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {deleteProduct, getProducts, type Product} from "@/api/products.ts";
import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router";
import {Pencil, Trash} from "lucide-react";

const ProductList = () => {

  const [products, setProducts] = useState<Product[]>([])
  // Ένδειξη Loading / true επειδή φορτώνει η λίστα απο την αρχή
  const [loading, setLoading] = useState<boolean>(true)

  // State που φτιάχνουμε για το delete που θα βάλουμε μέσα το id για το rollback
  const [deleting, setDeleting] = useState<number | null>(null)
  // Για το edit onClick
  const navigate = useNavigate();

  useEffect(() => {
    getProducts()
      .then((data:Product[]) => setProducts(data))
      // πριν γίνει fetch φέρνουμε το loading (Loading…),
      // άρα στο τέλος αφού φορτώσει
      // πρέπει να το εξαφανίσουμε αυτο
      .finally(() => setLoading(false))

  }, [])

  const handleDelete = async (id: number) => {
    // Dialog επιβεβαίωσης για διαγραφή (window.confirm της JS)
    if (!window.confirm("Are you sure you want to delete this product?")) {
      setDeleting(id)
    }
    try {
      await deleteProduct(id)
      // Φτιάχνεις ένα state που φιλτράρεις και αφαιρείς ενα id
      setProducts((prevState) => prevState.filter(p => p.id !== id))
      console.log(products)
    } catch (err) {
      console.log(err)
    } finally {
      setDeleting(null)
    }
  }

  if (loading) return <div className="text-center p-8">Loading...</div>

  return (
    <>
      <div className="p-8">
      <Table>
        <TableCaption>List of all products</TableCaption>
        <TableHeader className={"bg-gray-50"}>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product: Product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.price} €</TableCell>
              <TableCell className="text-right space-x-2">
                <Button
                  variant="outline"
                  onClick={() => navigate(`/products/${product.id}`)}

                >
                  <Pencil/>
                </Button>
                <Button
                  variant="destructive"
                  disabled={deleting === product.id} // για double click safety
                  onClick={() => handleDelete(product.id)}
                >
                  <Trash/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
    </>
  )
}

export default ProductList;