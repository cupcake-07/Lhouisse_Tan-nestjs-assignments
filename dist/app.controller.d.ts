import { HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHomePage(): Promise<string>;
    newStudentForm(): {};
    getStudentView(): Promise<{
        students: import("./entities/student.entity").Student[];
        title: string;
    }>;
    createStudent(createStudentDto: CreateStudentDto): Promise<{
        status: HttpStatus;
        message: string;
        data: import("./entities/student.entity").Student;
    }>;
    getAllStudents(): Promise<{
        status: HttpStatus;
        data: import("./entities/student.entity").Student[];
    }>;
    getStudentById(id: number): Promise<{
        status: HttpStatus;
        data: import("./entities/student.entity").Student;
    }>;
    updateStudent(id: number, updateStudentDto: UpdateStudentDto): Promise<{
        status: HttpStatus;
        message: string;
        data: import("./entities/student.entity").Student;
    }>;
    deleteStudent(id: number): Promise<{
        status: HttpStatus;
        message: string;
    }>;
}
