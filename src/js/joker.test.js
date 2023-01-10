import { dadJoke } from './joker.js';

export async function testDadJoke() {
  const joke = await dadJoke();
  const testPasses = Boolean(joke);
  console.log(joke);
  console.log('Dad Joke Test:', testPasses ? 'PASSED' : 'FAILED');
  return testPasses;
}

testDadJoke();

export function dadJoke() {
  return new Promise(function (resolve, reject) {
    try {
      joker.getRandomDadJoke(function (joke) {
        resolve(joke);
      });
    } catch (error) {
      reject(error);
    }
  });
}
