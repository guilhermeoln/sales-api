import Employee from "../models/Employee";
import Sale from "../models/Sale";

class SaleController {
  async sales(_, res) {
    try {
      const allSales = await Sale.find().populate("employee");

      res.json(allSales);
    } catch (error) {
      const { message } = error;
      res.status(500).json({ message });
    }
  }

  async createSale(req, res) {
    try {
      const { date, price, products, employee } = req.body;
      const selectedEmployee = await Employee.findById(employee);

      const params = {
        date,
        price,
        products,
        employee,
      };

      if (!selectedEmployee) {
        return res.status(400).json({ error: "Funcionário não existe" });
      }

      const sale = await Sale.create(params);

      res.json(sale);
    } catch (error) {
      const { message } = error;
      res.status(500).json({ message });
    }
  }

  async saleById(req, res) {
    try {
      const { id } = req.params;
      const sale = await Sale.findById(id).populate("employee");

      if (!sale) {
        return res.status(400).json({ message: "Venda não encontrada" });
      }

      res.json(sale);
    } catch (error) {
      const { message } = error;
      res.status(500).json({ message });
    }
  }

  async deleteSale(req, res) {
    try {
      const { id } = req.body;

      await Sale.findByIdAndDelete({ _id: id });

      res.send();
    } catch (error) {
      const { message } = error;
      res.status(500).json({ message });
    }
  }
}

export default new SaleController();
