
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Employee } from "./entities/employee.entity";
import {
  CreateEmployeeDto,
  UpdateEmployeeDto,
} from "./dto/employee.dto";

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  //GET all employees
  async getEmployees() {
    try {
      const employees = await this.employeeRepository.find();
      return employees;
    } catch (error) {
      throw error;
    }
  }

  //GET employee by ID
  async getEmployeeById(id: string) {
    try {
      const employee = await this.employeeRepository.findOne({
        where: { id: id },
      });

      if (!employee) {
        throw new NotFoundException("Employee with ID not found");
      }

      return employee;
    } catch (error) {
      throw error;
    }
  }

  //POST create employee
  async createEmployee(dto: CreateEmployeeDto) {
    try {
      const employee = this.employeeRepository.create(dto);
      return await this.employeeRepository.save(employee);
    } catch (error) {
      throw error;
    }
  }

  //PATCH update employee
  async updateEmployee(id: string, dto: UpdateEmployeeDto) {
    try {
      const employee = await this.employeeRepository.findOne({
        where: { id: id },
      });

      if (!employee) {
        throw new NotFoundException("Employee with ID not found");
      }

      Object.assign(employee, dto);
      return await this.employeeRepository.save(employee);
    } catch (error) {
      throw error;
    }
  }

  //DELETE employee
  async deleteEmployee(id: string) {
    try {
      const employee = await this.employeeRepository.findOne({
        where: { id: id },
      });

      if (!employee) {
        throw new NotFoundException("Employee with ID not found");
      }

      return await this.employeeRepository.delete({ id: id });
    } catch (error) {
      throw error;
    }
  }
}
