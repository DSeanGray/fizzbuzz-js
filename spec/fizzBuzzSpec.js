describe('Javabuzz', function() {

  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });


  describe('knows when a number is', function() {

    it('divisible by fifteen', function() {
      expect(javabuzz.isDivisibleByThree(6)).toBe(true);
    });

  });

  describe('knows when a number is', function() {

    it('divisible by five', function() {
      expect(javabuzz.isDivisibleByFive(10)).toBe(true);
    });

  });

  describe('knows when a number is', function() {

    it('divisible by fifteen', function() {
      expect(javabuzz.isDivisibleByFifteen(30)).toBe(true);
    });

  });

  describe('when playing says', function() {

    it('"Java" when a number is divisible by 3', function() {
      expect(javabuzz.says(3)).toEqual("Java");
    });

  });

});
