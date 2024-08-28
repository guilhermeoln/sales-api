import Employee from "../models/Employee";

class EmployeeController {
  async employees(_, res) {
    try {
      const allEmployees = await Employee.find();

      res.json(allEmployees);
    } catch (error) {
      const { message } = error;
      res.status(500).json({ message });
    }
  }

  async createEmployee(req, res) {
    try {
      const { name, email } = req.body;

      const params = {
        name,
        email,
      };

      const employee = await Employee.create(params);

      res.json(employee);
    } catch (error) {
      const { message } = error;
      res.status(500).json(message);
    }
  }

  async deleteEmployee(req, res) {
    try {
      const { id } = req.body;

      await Employee.findByIdAndDelete({ _id: id });

      res.send();
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async employeeById(req, res) {
    try {
      const { id } = req.params;

      const { employee } = await Employee.findById(id);

      if (!employee) {
        return res.status(500).json({ message: "Funcionário não encontrado" });
      }

      res.json(employee);
    } catch (error) {
      const { message } = error;
      res.status(500).json(message);
    }
  }
}

export default new EmployeeController();
