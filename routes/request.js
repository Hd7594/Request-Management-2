const express = require("express");
const router = express.Router();

const Request = require("../model/Request");

router.post("/requests/create", async (req, res) => {
  try {
    const { name, email, user, account } = req.body;

    const newRequest = new Request({
      name,
      email,
      user,
      account,
    });
    await newRequest.save();
    res.json(newRequest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/requests/inventory", async (req, res) => {
  try {
    const inventory = await Request.find();
    res.json(inventory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/requests/update", async (req, res) => {
  try {
    const updateRequest = await Request.findByIdAndUpdate(req.body.id, {
      name: req.body.name,
    });
    if (req.body.id && req.body.name) {
      res.json({ message: "request successfully updated" });
    } else {
      res.json({ message: "missing parameters" });
    }
    await updateRequest.save();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/requests/delete", async (req, res) => {
  try {
    await Request.findByIdAndDelete(req.body.id);
    if (req.body.id) {
      res.json({ message: "request deleted" });
    } else {
      res.json({ message: "request not deleted due to an error" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
