export class BaseSuccessResponseDto {
  code: number;
  data: any;
  message: string;
  constructor(mes: string, data: any) {
    this.code = 200;
    this.data = data;
    this.message = mes;
  }
}

export class BaseRequestNotFoundDto {
  message: string;
  code: number;

  constructor() {
    this.message = "Request Not Found";
    this.code = 400;
  }
}

export class InternalErrorResponseDto {
  message: string;
  code: number

  constructor() {
    this.message = "Internal Error";
    this.code = 500;
  }
}
