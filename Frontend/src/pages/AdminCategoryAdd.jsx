import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const AdminCategoryAdd = () => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");

  const navigate = useNavigate();

  const saveChanges = async () => {
    if (!name || !slug) return;

    await fetch("/api/admin/categories", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        slug,
      }),
    });

    navigate("/admin/categories");
  };

  return (
    <div
      className="p-10 flex flex-col items-center "
      style={{backgroundColor: "#E7D7C9"}}
    >
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-5 text-center">Add Category</h1>

        <div className="flex flex-wrap -mx-2">
          <div className="w-1/2 px-2 mb-4">
            <input
              type="text"
              placeholder="Name"
              className="input w-full bg-gray-100 p-2 rounded border border-gray-300"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
          </div>

          <div className="w-1/2 px-2 mb-4">
            <input
              type="text"
              placeholder="Slug"
              className="input w-full bg-gray-100 p-2 rounded border border-gray-300"
              value={slug}
              onChange={(ev) => setSlug(ev.target.value)}
            />
          </div>
        </div>

        <button
          className="bg-red-700 text-white py-2 px-4 rounded mt-5 w-full"
          onClick={saveChanges}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AdminCategoryAdd;
