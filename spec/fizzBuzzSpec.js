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

  describe('when playing says', function() {

    it('"Java" when a number is divisible by 5', function() {
      expect(javabuzz.says(5)).toEqual("Buzz");
    });

  });

  describe('when playing says', function() {

    it('"Java" when a number is divisible by 15', function() {
      expect(javabuzz.says(15)).toEqual("JavaBuzz");
    });

  });

  describe('when playing returns', function() {

    it('number if not divisible by 15, 5 or 3', function() {
      expect(javabuzz.says(11)).toEqual(11);
    });

  });

});
