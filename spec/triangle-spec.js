import { Triangle } from './../src/triangle.js';

describe('Triangle', function() {

  it('should correctly determine if a triangle is equilateral', function() {
    var triangle = new Triangle(3,3,3)
    expect(triangle.checkType()).toEqual("an equilateral triangle");
  });

  it('should correctly determine whether three lengths can be made into a triangle', function() {
    var notTriangle = new Triangle(3,9,22);
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });

  it('should correctly determine whether three lengths can be made into a triangle', function() {
    var isocTriangle = new Triangle(5,5,7)
    expect(isocTriangle.checkType()).toEqual("an isosceles triangle");
  });

  it('should correctly determine whether three lengths can be made into a triangle', function() {
    var scalTriangle = new Triangle(4,5,7)
    expect(scalTriangle.checkType()).toEqual("a scalene triangle");
  });

});
