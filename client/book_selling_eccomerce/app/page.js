/* eslint-disable @next/next/no-img-element */
'use client';
import Link from "next/link";
import Navbar from "./components/Navbar";
import { useGetBooksQuery } from "./services/bookApi";

export default function Home() {

  const { data:products, error, isLoading , isSuccess} = useGetBooksQuery();
  if (isLoading) {
    return <div>loding---</div>
  }
  if (isSuccess) {
    
    console.log('data', products);
  }

  return (
    <>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        {/* {data?.map((data,i)=> <div key={i}>{data.title}</div>)} */}

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} href={`product/${product.id}`} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.image}
                  alt={product.image}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
    
    </>
  )
}
