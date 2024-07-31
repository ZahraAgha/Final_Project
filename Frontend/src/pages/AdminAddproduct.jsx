import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../features/data";
import Select from "../components/Select";

const AdminAddproduct = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState(null);
  const [price, setPrice] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState([]);
  // const [quantity, setQuantity]

  const { data: sizes } = useFetch("/api/admin/sizes");
  const { data: categories } = useFetch("/api/admin/categories");

  const fetchProduct = async () => {
    if (!id) return;

    const res = await fetch(`/api/admin/products/${id}`);
    if (!res.ok) return;

    const data = await res.json();

    setTitle(data.title);
    setDescription(data.description);
    setCategoryId(data.category._id);
    setPrice(data.price);
    setSelectedSizes(data.stock.map((s) => s.size));
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <div
      className="p-10 flex flex-col items-center "
      style={{ backgroundColor: "#E7D7C9" }}
    >
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-5 text-center">Add Product</h1>

        <div className="flex flex-wrap -mx-2">
          <div className="w-1/2 px-2 mb-4">
            <input
              type="text"
              placeholder="Title"
              className="input w-full bg-gray-100 p-2 rounded border border-gray-300"
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
            />
          </div>
          <div className="w-1/2 px-2 mb-4">
            <input
              type="text"
              placeholder="Description"
              className="input w-full bg-gray-100 p-2 rounded border border-gray-300"
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
            />
          </div>
          <div className="w-1/2 px-2 mb-4">
            <input
              type="number"
              placeholder="Price"
              className="input w-full bg-gray-100 p-2 rounded border border-gray-300"
              value={price}
              onChange={(ev) => setPrice(ev.target.valueAsNumber)}
            />
          </div>
          <div className="w-1/2 px-2 mb-4">
            <input
              type="number"
              placeholder="Available quantity"
              className="input w-full bg-gray-100 p-2 rounded border border-gray-300"
            />
          </div>
          <div className="w-1/2 px-2 mb-4">
            <Select
              placeholder="Category"
              className="input w-full bg-gray-100 p-2 rounded border border-gray-300"
              options={categories?.map((category) => ({
                label: category.name,
                value: category._id,
              }))}
              value={categoryId}
              onChange={setCategoryId}
            />
          </div>
          <div className="w-1/2 px-2 mb-4">
            <input
              type="text"
              placeholder="Slug"
              className="input w-full  bg-gray-100 p-2 rounded border border-gray-300"
            />
          </div>
          <div className="w-full px-2 mb-4 flex">
            <input
              type="text"
              placeholder="SKU"
              className="input w-full bg-gray-100 p-2 rounded border border-gray-300 mr-2"
            />
            <input
              type="file"
              className="input bg-gray-100 p-2 rounded border border-gray-300"
            />
          </div>
          <div className="w-full px-2 mb-4">
            <input
              type="text"
              placeholder="images"
              multiple
              className="input w-full bg-gray-100 p-2 rounded border border-gray-300"
            />
          </div>
          <div className="w-full px-2 mb-4">
            <textarea
              placeholder="Description"
              rows="2"
              className="input w-full bg-gray-100 p-2 rounded border border-gray-300"
            />
          </div>

          <div className="w-full px-2 mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sizes
            </label>
            <div className="flex gap-2">
              {sizes?.map((size) => (
                <label key={size._id} className="flex items-center">
                  <input
                    name="sizes"
                    type="checkbox"
                    value={size._id}
                    className="mr-2"
                    checked={selectedSizes?.includes(size._id)}
                    onChange={(ev) => {
                      if (ev.target.checked) {
                        setSelectedSizes((old) => [...old, size._id]);
                      } else {
                        setSelectedSizes((old) =>
                          old.filter((x) => x !== size._id)
                        );
                      }
                    }}
                  />
                  {size.name}
                </label>
              ))}
            </div>
          </div>
        </div>

        <button className="bg-red-700 text-white py-2 px-4 rounded mt-5 w-full">
          Save Product
        </button>
      </div>
    </div>
  );
};

export default AdminAddproduct;
