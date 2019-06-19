// using assert passed to the test function that just logs failures
exports['test that logs all failures'] = function(assert) {
//  assert.equal(2 + 2, 5, 'test fail')
  assert.equal(3 + 2, 5, '1+1 pass')
}
 
if (module == require.main) require('test').run(exports)
