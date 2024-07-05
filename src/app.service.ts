import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTeste() {
    const teste = {
      nome: 'Teste',
      idade: 30,
      sexo: 'M',
    };

    return teste;
  }
}
