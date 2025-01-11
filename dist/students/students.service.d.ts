import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
export declare class StudentsService {
    private studentRepository;
    constructor(studentRepository: Repository<Student>);
    createStudent(createStudentDto: CreateStudentDto): Promise<Student>;
    getAllStudents(): Promise<Student[]>;
    getStudentById(id: number): Promise<Student>;
    updateStudent(id: number, updateStudentDto: UpdateStudentDto): Promise<Student>;
    deleteStudent(id: number): Promise<void>;
}
