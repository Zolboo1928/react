import { ProductCard } from "./components/productCard";


export default async function Home() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const { products } = data;

  const categoryRes = await fetch("https://dummyjson.com/products/categories");
  const categoryData = await categoryRes.json();

  return (
    <main>
      <section>
        <div className="container">
          <select name="" id="">
            <option value="">Select category...</option>
            {categoryData.map((item) => (
              <option value={item.slug}  >{item.name}</option>
            ))}
          </select>
          <div className="row">
            {products.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
