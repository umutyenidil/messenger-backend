// nest
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

// third party
import { Repository } from 'typeorm';

// others
import { UserEntity } from './user.entity';


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getUser() {
    return this.userRepository.find();
  }

  async postUser() {
    return this.userRepository.save({
      email: "umutyenidil@gmail.com",
    });
  }
}
