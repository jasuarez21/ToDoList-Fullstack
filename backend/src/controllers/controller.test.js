const {
  getAll,
  createOne,
  getById,
  updateById,
  deleteById
} = require('./todosController')();
const TODO = require('../model/todoModel');

jest.mock('.././model/todoModel.js');

describe('When invoked a getAll function', () => {
  test('should response with data', async () => {
    const res = {
      json: jest.fn()
    };
    TODO.find.mockResolvedValue();
    await getAll(null, res);
    expect(res.json).toHaveBeenCalled();
  });
});

describe('When invoked createOne function', () => {
  class MockTask {
    constructor(name) {
      this.name = name;
    }

    // eslint-disable-next-line class-methods-use-this
    save() {}
  }
  test('should call a json function', async () => {
    const req = {
      body: null
    };
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };
    const testing = new MockTask('Pepe');
    TODO.mockReturnValueOnce(testing);
    await createOne(req, res);
    expect(res.json).toHaveBeenCalledWith({ name: 'Pepe' });
  });
});

describe('When invoked getById func', () => {
  test('should call a json func with ', async () => {
    const req = {
      params: { todoById: 2 }
    };
    const res = {
      json: jest.fn()
    };
    TODO.findById.mockResolvedValue('Pepe');
    await getById(req, res);
    expect(res.json).toHaveBeenCalledWith('Pepe');
  });
});

describe('When invoked getById func', () => {
  test('should call a send error func ', async () => {
    const req = {
      params: { todoById: 2 }
    };
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };
    TODO.findById.mockRejectedValue('Pepe');
    await getById(req, res);
    expect(res.send).toHaveBeenCalledWith('Pepe');
  });
});

describe('When invoked a updatedById', () => {
  test('Should call a func json with', async () => {
    const req = {
      params: { todoId: 2 },
      body: { task: 'pepe' }
    };
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };
    TODO.findByIdAndUpdate.mockResolvedValueOnce('Testing');
    await updateById(req, res);
    expect(res.json).toHaveBeenCalledWith('Testing');
  });
});

describe('When invoked a updatedById', () => {
  test('Should call a func send with error', async () => {
    const req = {
      params: { todoId: 5 },
      body: { task: 'peppacoe' }
    };
    const res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn()
    };
    TODO.findByIdAndUpdate.mockRejectedValueOnce('PACO');
    await updateById(req, res);
    expect(res.send).toHaveBeenCalledWith('PACO');
  });
});

describe('When invoked a function deleteById', () => {
  test('Should call a json func', async () => {
    const req = {
      params: { todoId: 3 }
    };
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };
    TODO.findByIdAndDelete.mockResolvedValue();
    await deleteById(req, res);
    expect(res.json).toHaveBeenCalled();
  });
});

describe('When invoked a function deleteById', () => {
  test('Should call a send func in error', async () => {
    const req = {
      params: { todoId: 3 }
    };
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };
    TODO.findByIdAndDelete.mockRejectedValue();
    await deleteById(req, res);
    expect(res.send).toHaveBeenCalled();
  });
});
