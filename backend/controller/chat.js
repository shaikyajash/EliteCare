const { createChatSession, submitQuery } = require("../utils/apicalls");

async function handlePrompt(req, res) {
  const { prompt } = req.body; // Assuming createdBy is tied to req.user

  try {
    const id = await createChatSession(
      "gjQtC3H6EJTT09DcQeHZfCl0Mu4HjGin",
      "abc"
    );
    const response = await submitQuery(id, prompt); // Await the API response

    res.status(201).json({
      msg: "Health goal created and API response saved successfully",
      status: "T",
      data: response,
    });
  } catch (error) {
    console.error("Error creating health goal or calling API:", error.message);

    // Handle errors
    res.status(500).json({
      msg: "An error occurred",
      status: "F",
      data: error.message,
    });
  }
}

module.exports = {
  handlePrompt,
};
