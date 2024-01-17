
import ProductsCard from "../ProductsCard/ProductsCard";

const ItemList = ( {productos} ) => {
  return (
    <section className="container m-auto mt-8">
      <h2 className="text-4xl font-bold ">Productos</h2>
      <hr  className=" m-3"/>

      <div className="flex flex-wrap justify-center gap-10 items-center">
        {productos.map((product) => (

          <ProductsCard key={product.id} productData={product} buttonText="Ver mas" />
        ))}
      </div>

    </section>
  );
};

export default ItemList;
