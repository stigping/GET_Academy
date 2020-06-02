QUnit.test( "Valid length", function( assert ) {
    const isValid = isDateValid('17.01.2020');
    assert.equal(isValid, 'true');
  });