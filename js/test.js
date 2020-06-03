QUnit.test( "Valid length", function( assert ) {
  const isValid = isDateValid('03.02.2020');
  assert.equal(isValid, true);
});

QUnit.test("Det er ikke punktum i begge de rette posisjonene", function (assert) {
  const isValid = isDateValid('0310212020');
  assert.equal(isValid, false);
});

QUnit.test("Feil måned", function (assert) {
  const isValid = isDateValid('01.13.2020');
  assert.equal(isValid, false);
});

QUnit.test("Feil dag", function (assert) {
  const isValid = isDateValid('29.01.2020');
  assert.equal(isValid, false);
});

QUnit.test("skuddår", function (assert) {
  const isValid = isDateValid('29.02.2020');
  assert.equal(isValid, false);
});