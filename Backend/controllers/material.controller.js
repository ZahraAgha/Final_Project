import Material from "../models/material.model.js";

// Get all Materials
export const getMaterials = async (request, response) => {
    const materials = await Material.find();
    if (!materials) {
        return response.status(400).send("Something went wrong");
    }
    response.status(200).send(materials);
}

// Add a single Material
export const addMaterial = async (request, response) => {
    const { name } = request.body;
    // Check empty value
    if (!name) {
        return response.status(400).send("Please provide a name");
    }
    // Existing material name
    const existingMaterialName = await Material.findOne({ name });
    if (existingMaterialName) {
        return response.status(400).send("Material name already exists");
    }

    const newMaterial = await Material.create({ name });
    response.status(201).send(newMaterial);
}
