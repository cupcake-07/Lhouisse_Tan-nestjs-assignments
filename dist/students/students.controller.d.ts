import { HttpStatus } from '@nestjs/common';
import { StudentsService } from '../students/students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Response } from 'express';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    getStudentView(res: Response): Promise<void>;
    newStudentForm(res: Response): void;
    createStudent(createStudentDto: CreateStudentDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("./entities/student.entity").Student;
    }>;
    getAllStudents(): Promise<{
        statusCode: HttpStatus;
        data: import("./entities/student.entity").Student[];
    }>;
    getStudentById(id: number): Promise<{
        statusCode: HttpStatus;
        data: import("./entities/student.entity").Student;
    }>;
    updateStudent(id: number, updateStudentDto: UpdateStudentDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("./entities/student.entity").Student;
    }>;
    deleteStudent(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    editStudentForm(id: number, res: Response): Promise<void>;
}
