const Manager= require('../lib/Manager')

describe("get Role", () => {
    it("getRole() should return \"Manager\"", () => {
        const test = new Manager();
        expect(test.getRole()).toEqual("Manager");
    });
});

describe("get OfficeNumber", () => {
    it("should return manager's office number", () => {
        const test = new Manager("", "", "", 23);
        expect(test.getOfficeNumber()).toEqual(23);
  });
});

describe("Can set OfficeNumber via constructor", () => {
    it("should set OfficeNumber via constructor", () => {
        const test = new Manager("", "", "", 23);
        expect(test.OfficeNumber).toEqual(23);
  });
});