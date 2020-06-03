QUnit.test( "Valid length", function( assert ) {
  const isValid = isDateValid('03.02.2020');
  assert.equal(isValid, true);
});

QUnit.test("Det er ikke punktum i begge de rette posisjonene", function (assert) {
  const isValid = isDateValid('0310212020');
  assert.equal(isValid, false);
});