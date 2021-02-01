const { Component } = require("react");

function filterByTerm(inputArr, searchTerm) {
    return inputArr.filter(function (arrayElement) {
        return arrayElement.url.match(searchTerm);
    });
}

describe("Startup test", () => {
    test("test jest", () => {
        expect(1 + 1).toEqual(2);
    });
});
