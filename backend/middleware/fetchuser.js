import jwt from "jsonwebtoken";

const fetchuser = (req, res, next) => {
  // Get the user from the JWT token and add id to req object
  const token = req.header("auth-token");
  if (!token) {
    return res
      .status(401)
      .send({ error: "Please authenticate using a valid token" });
  }

  try {
    // const data = jwt.verify(token, process.env.JWT_SECRET);
        const data = jwt.verify(token, "AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz");


    req.userID = data.userID;

    next();

  } catch (error) {
    console.error("Token verification error:", error.message);
    res.status(401).send({ error: "token token is not matching" });
  }
};

export default fetchuser;
