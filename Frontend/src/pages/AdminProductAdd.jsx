import React, {useEffect, useRef, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useFetch} from "../features/data";
import Select from "../components/Select";

const AdminProductAdd = () => {
  const {id} = useParams();

  const formRef = useRef(null);

  const [loading, setLoading] = useState(Boolean(id));

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState(null);
  const [price, setPrice] = useState(0);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [productPic, setProductPic] = useState('');
  const [sku, setSKU] = useState('');
  const [slug, setSlug] = useState('');
  const [colorId, setColorId] = useState('');

  const {data: sizes} = useFetch("/api/admin/sizes");
  const {data: categories} = useFetch("/api/admin/categories");
  const {data: colors} = useFetch("/api/admin/colors");

  const fetchProduct = async () => {
    if (!id) return;

    const res = await fetch(`/api/admin/products/${id}`);
    if (!res.ok) return;

    const data = await res.json();

    setTitle(data.title);
    setDescription(data.description);
    setCategoryId(data.category?._id);
    setPrice(data.price);
    setSelectedSizes(data.stock.map((s) => s.size));
    setQuantity(data.quantity);
    setProductPic(data.productPic);
    setSKU(data.sku);
    setSlug(data.slug);
    setColorId(data.color?._id);

    setLoading(false);
  };

  const navigate = useNavigate();

  const submit = async () => {
    if (!formRef.current.reportValidity())
      return;

    const data = {
      title,
      description,
      categoryId,
      price,
      colorId,
      stock: selectedSizes.map((s) => ({sizeId: s})),
      quantity,
      productPic,
      sku,
      slug,
    }

    const method = id ? "PUT" : "POST";
    const url = id ? `/api/admin/products/${id}` : `/api/admin/products`;

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      alert('Unable to update product');
      return;
    }

    navigate('/admin/products');
  }

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-5 text-center">
          {id ? 'Edit Product' : 'Add Product'}
        </h1>

        <p className="text-center">Loading...</p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      className="p-10 flex flex-col items-center "
      style={{backgroundColor: "#E7D7C9"}}
    >
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-5 text-center">
          {id ? 'Edit Product' : 'Add Product'}
        </h1>

        <div className="flex flex-wrap -mx-2">
          <div className="w-1/2 px-2 mb-4">
            <input
              required
              type="text"
              placeholder="Title"
              className="input w-full bg-gray-100 p-2 rounded border border-gray-300"
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
            />
          </div>
          <div className="w-1/2 px-2 mb-4">
            <input
              required
              type="text"
              placeholder="Description"
              className="input w-full bg-gray-100 p-2 rounded border border-gray-300"
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
            />
          </div>
          <div className="w-1/2 px-2 mb-4">
            <input
              required
              min={0}
              step={0.01}
              type="number"
              placeholder="Price"
              className="input w-full bg-gray-100 p-2 rounded border border-gray-300"
              value={price}
              onChange={(ev) => setPrice(ev.target.valueAsNumber)}
            />
          </div>
          <div className="w-1/2 px-2 mb-4">
            <input
              required
              min={0}
              type="number"
              placeholder="Available quantity"
              className="input w-full bg-gray-100 p-2 rounded border border-gray-300"
              value={quantity}
              onChange={(ev) => setQuantity(ev.target.valueAsNumber)}
            />
          </div>
          <div className="w-1/2 px-2 mb-4">
            <Select
              required
              placeholder="Category"
              className="input w-full bg-gray-100 p-2 rounded border border-gray-300"
              options={categories?.map((item) => ({
                label: item.name,
                value: item._id,
              }))}
              value={categoryId}
              onChange={setCategoryId}
            />
          </div>
          <div className="w-1/2 px-2 mb-4">
            <Select
              required
              placeholder="Material"
              className="input w-full bg-gray-100 p-2 rounded border border-gray-300"
              options={colors?.map((item) => ({
                label: item.name,
                value: item._id,
              }))}
              value={colorId}
              onChange={setColorId}
            />
          </div>
          <div className="w-1/2 px-2 mb-4">
            <input
              required
              type="text"
              placeholder="Slug"
              className="input w-full  bg-gray-100 p-2 rounded border border-gray-300"
              value={slug}
              onChange={(ev) => setSlug(ev.target.value)}
            />
          </div>
          <div className="w-1/2 px-2 mb-4 flex">
            <input
              required
              type="text"
              placeholder="SKU"
              className="input w-full bg-gray-100 p-2 rounded border border-gray-300 mr-2"
              value={sku}
              onChange={(ev) => setSKU(ev.target.value)}
            />
          </div>
          <div className="w-full px-2 mb-4">
            <input
              required
              type="text"
              placeholder="Image"
              multiple
              className="input w-full bg-gray-100 p-2 rounded border border-gray-300"
              value={productPic}
              onChange={(ev) => setProductPic(ev.target.value)}
            />

            <img className="mt-2 max-w-52 max-h-52" src={`http://localhost:5555/${productPic}`} alt="" />
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

        <button type="button" onClick={submit} className="bg-red-700 text-white py-2 px-4 rounded mt-5 w-full">
          Save Product
        </button>
      </div>
    </form>
  );
};

export default AdminProductAdd;
