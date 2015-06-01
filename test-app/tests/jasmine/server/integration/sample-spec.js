describe('Server Integration', function () {
  it('should work', function () {
    expect(true).toBe(true)
  });

  // This test must not be in the first executed describe block.
  // For this reason the test exists two times to ensure this condition.
  it('runs in the Meteor fiber', function () {
    var callMeteorMethod = function () {
      expect(Meteor.call('test', 1)).toBe(true)
    }
    expect(callMeteorMethod).not.toThrow()
  });

  describe('mock', function () {
    it('should be available', function () {
      expect(mock).toBeDefined()
    });
  });

  describe('should support testing asynchronous operations', function() {
    it('should call done when finished', function(done) {
      setTimeout(done, 6000);
    })
  })

});
