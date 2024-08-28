import { Router } from "express";
import EmployeeController from "./controllers/EmployeeController";
import SaleController from "./controllers/SaleController";

const routes = new Router();

// TODO: Editar Funcionário
routes.get("/employees", EmployeeController.employees);
routes.get("/employees/:id", EmployeeController.employeeById);
routes.post("/employees", EmployeeController.createEmployee);
routes.delete("/employees", EmployeeController.deleteEmployee);

// TODO: Editar venda
routes.get("/sales", SaleController.sales);
routes.get("/sales/:id", SaleController.saleById);
routes.post("/sales", SaleController.createSale);
routes.post("/sales", SaleController.deleteSale);

export default routes;
