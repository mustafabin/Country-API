import Country from "../models/model.js";

export const getAllCountries = async (req, res) => {
  try {
    const countries = await Country.find();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const findByName = async (req, res) => {
  try {
    let name = req.params.name;
    const found = await Country.find({ name: name });
    if (!found[0]) {
      return res.status(404).json({
        message: "That name is not in the database",
        hint: "Case Sensitive",
      });
    }
    res.json(found);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
export const findByID = async (req, res) => {
  try {
    let found = await Country.findById(req.params.id);
    if (!found) {
      return res.status(404).json({
        message: "That ID is not in the database",
      });
    }
    res.json(found);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
export const deleteCountry = async (req, res) => {
  try {
    let found = await Country.findByIdAndDelete(req.params.id);
    if (!found) {
      return res.status(404).json({
        message: "That ID is not in the database",
      });
    }
    res.json(found);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const createCountry = async (req, res) => {
  try {
    const newCountry = new Country(req.body);
    await newCountry.save();
    res.status(201).json(newCountry);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateCountry = async (req, res) => {
  const updated = await Country.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json(updated);
};
