import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './users.repository';
import { User } from './entities/users.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { DeleteResult } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private readonly _userRepository: UserRepository
    ) { }

    async findOne(id: number): Promise<User> {
        const user: User = await this._userRepository
            .findOne(id);

        if (!user) throw new NotFoundException({ hola: 'mundo' });

        return user;
    }

    async findAll(): Promise<User[]> {
        const users: User[] = await this._userRepository
            .find({ where: { is_active: true }, order: { id: 'DESC' } });

        if (!users) throw new NotFoundException();

        return users;
    }

    async create(data: CreateUserDto): Promise<User> {
        let user: User = await this._userRepository.create(data);
        user = await this._userRepository.save(user);

        return user;
    }

    async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
        let user: User = await this._userRepository.findOne(id);
        this._userRepository.merge(user, updateUserDto);
        user = await this._userRepository.save(user);

        // await this._userRepository.update(id, user);
        return user;
    }

    async remove(id: number): Promise<boolean> {
        const result: DeleteResult = await this._userRepository.delete(id);
        if (!result.affected) throw new BadRequestException();

        return true;
    }
}