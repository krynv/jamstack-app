import characters from "../../../data/characters.json";

export default (req, res) => {
  return res.status(200).json(characters);
};
