const Employee = require('../lib/Employee');


describe("Employee", () => {
    it("should instantiate thru Employee", () => {
        const test = new Employee();
        expect(typeof(test)).toEqual("object");
    });

    it("should set Name via constructor", () => {
            const test = new Employee("Ian");
            expect(test.name).toEqual("Ian");
    });
    
    it("should set ID via constructor", () => {
            const test = new Employee("Ian", 88);
            expect(test.id).toEqual(88);
    });
   
    it("should set Email via constructor", () => {
            const test = new Employee("Ian", 88, "test@gmail.com");
            expect(test.email).toEqual("test@gmail.com");
    });
  

    describe("get Name", () => {
        it("should return employee's name", () => {
            const test = new Employee("Ian");
            expect(test.getName()).toEqual("Ian");
        });
    });
        
    describe("get Id", () => {
        it("should return employee's id", () => {
            const test = new Employee("Ian", 88);
            expect(test.getId()).toEqual(88);
        });
    });
        
    describe("get Email", () => {
        it("should return employee's email", () => {
            const test = new Employee("Ian", 88, "test@gmail.com");
            expect(test.getEmail()).toEqual("test@gmail.com");
        });
    });
        
    describe("get Role", () => {
        it("getRole() should return \"Employee\"", () => {
            const test = new Employee();
            expect(test.getRole()).toEqual("Employee");
        });
    });

});