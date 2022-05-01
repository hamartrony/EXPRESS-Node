import database from "../database";

const checkEmail = async (req, res, next) => {
  const { email } = req.body;

  try {
    const checkEmailBase = await database.query("SELECT * FROM users WHERE email = $1", 
    [email]);

    if (checkEmailBase.rows.length) {
      return res.status(401).json({ message: "Email is already in use" });
    }

    next();
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

export default checkEmail;