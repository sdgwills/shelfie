module.exports = {

  getInventory(req, res) {
    const database = req.app.get('database');
      database.all_products().then(inventory => {
        res.status(200).send(inventory);
      })
    }
    
}