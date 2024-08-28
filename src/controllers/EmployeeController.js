import Employee from "../models/Employee";

class EmployeeController {
  async employees(_, res) {
    const allEmployees = await Employee.find();

    res.json(allEmployees);
  }

  async createEmployee(req, res) {
    const { name, email } = req.body;

    const params = {
      name,
      email,
    };

    const employee = await Employee.create(params);

    res.json(employee);
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
    const { id } = req.params;

    const { employee } = await Employee.findById(id);

    if (!employee) {
      return res.status(500).json({ message: "Funcionário não encontrado" });
    }

    res.json(employee);
  }
}

export default new EmployeeController();
