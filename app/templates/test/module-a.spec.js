var moduleA = require("../src/module-a");

describe("module-a", function() {
    "use strict";

    it("should do something", function() {
        expect(moduleA.doSomething()).toEqual(1);
    });
});