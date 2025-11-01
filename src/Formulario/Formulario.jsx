import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Formulario = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const categoryData = Object.values(
    filteredProducts.reduce((acc, product) => {
      acc[product.category] = acc[product.category] || { category: product.category, count: 0 };
      acc[product.category].count++;
      return acc;
    }, {})
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">Lista de Productos</h1>
      <input
        type="text"
        placeholder="Buscar producto..."
        className="border p-2 mb-4 w-full rounded-md shadow-sm focus:ring focus:ring-blue-300"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="w-full border-collapse border text-left bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Precio</th>
            <th className="border p-2">Categoría</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id} className="border hover:bg-gray-100 transition duration-200">
              <td className="border p-2">{product.title}</td>
              <td className="border p-2 text-green-600 font-semibold">${product.price.toFixed(2)}</td>
              <td className="border p-2">{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="text-xl font-bold mt-6 text-center text-indigo-600">Cantidad de Productos por Categoría</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={categoryData}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#4F46E5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Formulario;
