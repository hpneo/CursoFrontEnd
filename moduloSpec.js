describe("UserModule", function() {
  var modulo;
  
  beforeEach(function() {
    modulo = window.UserModule;
  });

  it("UserModule es un objeto", function() {
    expect(modulo).not.toBeUndefined();
  });

  it("UserModule tenga un método add", function() {
    expect(modulo.add).toBeDefined();
  });

  it("UserModule tenga un método add que funcione", function() {
    modulo.add(1);

    modulo.add(10);

    modulo.add(31);

    expect(modulo.count()).toEqual(3);
  });
});