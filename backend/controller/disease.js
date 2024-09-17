async function handleDisease(req, res) {
    try {
      // Destructure disease from the request body
      const { disease } = req.body;
        console.log(disease);

      if (!disease) {
        return res.status(400).json({
          msg: 'Disease is required',
          status: 'F',
          data: null
        });
      }

      res.status(200).json({
        msg: 'Disease received successfully',
        status: 'T',
        data: disease,
        
      });
    } catch (error) {
      // Catch and handle any unexpected errors
      res.status(500).json({ 
        msg: 'Server error',
        status: 'F',
        data: error.message
      });
    }
  }

  module.exports = {
    handleDisease,
    
  }
  