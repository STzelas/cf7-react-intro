import {useNavigate, useParams} from "react-router";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {createProduct, getProductById, productFormSchema, updateProduct} from "@/api/products.ts";
import { type ProductType} from "@/api/products.ts"
import { Label } from "@radix-ui/react-label";
import { Textarea } from "@/components/ui/textarea.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Switch} from "@/components/ui/switch.tsx";
import { Button } from "@/components/ui/button";
import {useEffect} from "react";
import { toast } from "sonner";

type ProductModeProps = {
  mode?: "edit" | "create";
}


const ProductEdit = ({ mode }: ProductModeProps) => {
  // Για να διαβάσουμε το id απο το list
  const { productId } = useParams<{productId: string}>();
  const navigate = useNavigate();
  const isEdit = mode === "edit" || (!!productId && mode === "create");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {errors, isSubmitting},
    reset,
  } = useForm<Omit<ProductType, "id">>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      name: "",
      slug: "",
      description: "",
      image: "",
      price: 0,
      sort: 0,
      is_active: false,
      is_favorite: false,
      category_id: 1, // default to 1
    }
  })

  useEffect(() => {
    if (isEdit && productId) {
      getProductById(Number(productId))  // typecast
        .then((data) => {
          // setValue("name", data.name ?? "");

          const values = {
            name: data.name ?? "",
            slug: data.slug ?? "",
            description: data.description ?? "",
            image: data.image ?? "",
            price: data.price ?? 0,
            sort: data.sort ?? 0,
            is_active: false,
            is_favorite: false,
            category_id: 1,
          }

          reset(values)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [productId, reset]);

  const onSubmit = async (data: Omit<ProductType, "id">) => {

    try {
      if (isEdit && productId){
        await updateProduct(Number(productId), data)
        toast.success("Product updated successfully.")
      } else {
        await createProduct(data)
        toast.success("Product created successfully.")
      }
      navigate("/products")
    } catch (err) {
      console.log(err);
      toast.error(
        err instanceof Error ? err.message : "Something went wrong"
      )
    }

  }



  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto mt-12 mb-4 p-8 border border-gray-300 rounded-lg space-y-6"
      >
        <h1 className="text-xl font-bold">
          {isEdit ? "Edit Product" : "Create New Product"}
        </h1>
        <div>
          <Label className="mb-1" htmlFor="name">Name
          </Label>
          <Input
            id="name" {...register("name")}
          />
          {errors.name && (
            <div className="text-cf-dark-red">{errors.name.message}</div>
          )}
        </div>

        <div>
          <Label className="mb-1" htmlFor="slug">Slug
          </Label>
          <Input
            id="slug" {...register("slug")}
          />
          {errors.slug && (
            <div className="text-cf-dark-red">{errors.slug.message}</div>
          )}
        </div>
        <div>
          <Label className="mb-1" htmlFor="description">Description
          </Label>
          <Textarea
            id="description" {...register("description")}
          />
          {errors.description && (
            <div className="text-cf-dark-red">{errors.description.message}</div>
          )}
        </div>

        <div>
          <Label className="mb-1" htmlFor="image">Image
          </Label>
          <Input
            id="image" {...register("image")}
          />
          {errors.image && (
            <div className="text-cf-dark-red">{errors.image.message}</div>
          )}
        </div>

        <div>
          <Label className="mb-1" htmlFor="price">Price
          </Label>
          <Input
            id="price" {...register("price")}
          />
          {errors.price && (
            <div className="text-cf-dark-red">{errors.price.message}</div>
          )}
        </div>

        <div>
          <Label className="mb-1" htmlFor="sort">Sort
          </Label>
          <Input
            id="sort" {...register("sort")}
          />
          {errors.sort && (
            <div className="text-cf-dark-red">{errors.sort.message}</div>
          )}
        </div>

        <div>

          <Switch
            className="me-2"
            id="is_active"
            checked={watch("is_active")}
            onCheckedChange={(value:boolean) => setValue("is_active", value)}
          />
          <Label htmlFor="is_active">Active</Label>
        </div>

        <div>

          <Switch
            className="me-2"
            id="is_favorite"
            checked={watch("is_favorite")}
            onCheckedChange={(value:boolean) => setValue("is_favorite", value)}
          />
          <Label htmlFor="is_favorite">Favorite</Label>
        </div>

        <Button variant={"default"} type="submit" className="w-full text-white"
                disabled={isSubmitting}

        >{isSubmitting ? "Saving..." : "Submit"}</Button>
      </form>
    </>
  )
}

export default ProductEdit