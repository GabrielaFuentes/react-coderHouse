
import ProductsCard from "../ProductsCard/ProductsCard";

const ItemList = ({ productos }) => {
  return (
    <section className="container mx-auto mt-8">
      <h2 className="text-4xl font-bold">Productos</h2>
      <hr className="my-3" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {productos.map((product) => (
          <div className="w-full flex" key={product.id}>
            <ProductsCard productData={product} buttonText="Ver más" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ItemList;
