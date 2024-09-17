const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");
const { handleDisease } = require("../controller/disease");

const router = express.Router();

router.get("/", (req, res) => {
  const results = [];

  fs.createReadStream("./ngo_data.csv")
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      // Transform the results array
      const transformedResults = results.map((record) => {
        const transformedRecord = { ...record };
        const firstKey = Object.keys(record)[0];
        const firstValue = record[firstKey];
        transformedRecord.Name = firstValue; // Add new key with the value of the first key
        return transformedRecord;
      });

      res.json(transformedResults);
    });
});

router.post("/form",handleDisease);


module.exports = router;