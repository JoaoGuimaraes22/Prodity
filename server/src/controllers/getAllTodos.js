const query = require("../db/query");

const getAll = async (req, res) => {
  console.log("Getting users...");
  const findAllQuery = "SELECT * FROM todos where owner_id = $1";
  try {
    const { rows, rowCount } = await query(findAllQuery, [req.user.id]);
    return res.status(200).send({ rows, rowCount });
    //return res.status(200).send({ data: "data" });
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = getAll;
