export class UserNotFound extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class IncorrectLoginCredentials extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class UserAlreadyExists extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class FailedToSave extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class FailedToUpdate extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class FailedToDelete extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class IsNotFound extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class CallError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}