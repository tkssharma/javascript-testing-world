const {sum, sub, removeDuplicates, asyncAdd } = require('./index');

test('testing sum function :: happy path', async () => {
    const result = await asyncAdd(1,2);
    const expected = 3;
    expect(result).toEqual(expected);
})

test('testing sum function :: unhappy path', async () => {
  const result = await asyncAdd(1,2);
  const expected = 3;
  expect(result).toNotEqual(expected);
})

async function test(title, callback) {
  try {
   await callback()
   console.log(`✓ ${title}`)
  } catch(err) {
    console.error(`✕ ${title}`)
    //console.error(err)
  }
}

function expect(actual) {
    return {
      toEqual(expected) {
        if(actual !== expected) {
          throw new Error(`actual is not same as expected`);
        }
      },
      toNotEqual(expected) {
        if(actual === expected) {
          throw new Error(`actual is not same as expected`);
        }
      }
    }
}