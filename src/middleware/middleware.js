export function middlewareFunction(req, res, next) {
<<<<<<< Updated upstream
  try {
    const auth = req.headers["authorization"];
    const token = auth && auth.split(" ")[1];

    if (token == null) return res.status(401).json({ msg: "unauthorized" });

    jwt.verify(token, SECRET, async (err, user) => {
      try {
        if (err) return res.status(403).json({ msg: "forbidden" });

        const authorized = await user.findOne({
          where: {
            id: user.id,
            // email: user.email,
          },
          paranoid: false,
          attributes: { exclude: ["password"] },
        });
        if (!authorized) return res.status(403).json({ msg: "forbidden" });
        req.user = authorized;
        return next();
      } catch (e) {
        console.error(e);
        return res.status(500).json(e);
      }
    });
  } catch (e) {
    return res.status(500).json(e);
  }
=======
  // try {
  //   const auth = req.headers["authorization"];
  //   const token = auth && auth.split(" ")[1];

  //   if (token == null) return res.status(401).json({ msg: "unauthorized" });

  //   jwt.verify(token, SECRET, async (err, user) => {
  //     try {
  //       if (err) return res.status(403).json({ msg: "forbidden" });

  //       const authorized = await user.findOne({
  //         where: {
  //           id: user.id,
  //           // email: user.email,
  //         },
  //         paranoid: false,
  //         attributes: { exclude: ["password"] },
  //       });
  //       if (!authorized) return res.status(403).json({ msg: "forbidden" });
  //       req.user = authorized;
  //       return next();
  //     } catch (e) {
  //       console.error(e);
  //       return res.status(500).json(e);
  //     }
  //   });
  // } catch (e) {
  //   return res.status(500).json(e);
  // }
  next();
>>>>>>> Stashed changes
}
