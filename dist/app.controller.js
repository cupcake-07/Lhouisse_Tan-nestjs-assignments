"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const create_student_dto_1 = require("./dto/create-student.dto");
const update_student_dto_1 = require("./dto/update-student.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async getHomePage() {
        return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Student Management System</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
      </head>
      <body>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <div class="container">
                  <a class="navbar-brand" href="/students">Student Management System</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                          <li class="nav-item">
                              <a class="nav-link" href="/students/list">View Students</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="/students/new">Add Student</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>

          <div class="container mt-5">
              <div class="jumbotron">
                  <h1 class="display-4">Student Management System</h1>
                  <p class="lead">Welcome to the Student Management System</p>
                  <hr class="my-4">
                  <p>Manage your students efficiently with our comprehensive management system.</p>
                  <a class="btn btn-primary btn-lg" href="/students/list" role="button">View Students</a>
                  <a class="btn btn-success btn-lg" href="/students/new" role="button">Add New Student</a>
              </div>

              <div class="row mt-5">
                  <div class="col-md-4">
                      <div class="card">
                          <div class="card-body">
                              <h5 class="card-title">Student Management</h5>
                              <p class="card-text">Add, edit, and remove students from the system.</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="card">
                          <div class="card-body">
                              <h5 class="card-title">View Records</h5>
                              <p class="card-text">Access and view student records easily.</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="card">
                          <div class="card-body">
                              <h5 class="card-title">Quick Access</h5>
                              <p class="card-text">Navigate through the system efficiently.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <footer class="bg-dark text-white mt-5">
              <div class="container py-3">
                  <p class="text-center mb-0">© 2024 Student Management System. All rights reserved.</p>
              </div>
          </footer>

          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      </body>
      </html>
    `;
    }
    newStudentForm() {
        return {};
    }
    async getStudentView() {
        const students = await this.appService.getAllStudents();
        return {
            students,
            title: 'Student List'
        };
    }
    async createStudent(createStudentDto) {
        const student = await this.appService.createStudent(createStudentDto);
        return {
            status: common_1.HttpStatus.CREATED,
            message: 'Student created successfully',
            data: student
        };
    }
    async getAllStudents() {
        const students = await this.appService.getAllStudents();
        return {
            status: common_1.HttpStatus.OK,
            data: students
        };
    }
    async getStudentById(id) {
        const student = await this.appService.getStudentById(id);
        return {
            status: common_1.HttpStatus.OK,
            data: student
        };
    }
    async updateStudent(id, updateStudentDto) {
        const student = await this.appService.updateStudent(id, updateStudentDto);
        return {
            status: common_1.HttpStatus.OK,
            message: 'Student updated successfully',
            data: student
        };
    }
    async deleteStudent(id) {
        await this.appService.deleteStudent(id);
        return {
            status: common_1.HttpStatus.OK,
            message: 'Student deleted successfully'
        };
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Header)('Content-Type', 'text/html'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getHomePage", null);
__decorate([
    (0, common_1.Get)('new'),
    (0, common_1.Render)('new-student'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "newStudentForm", null);
__decorate([
    (0, common_1.Get)('list'),
    (0, common_1.Render)('students'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getStudentView", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_student_dto_1.CreateStudentDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createStudent", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getAllStudents", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getStudentById", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_student_dto_1.UpdateStudentDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updateStudent", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteStudent", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)('students'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map