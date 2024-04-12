/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

// interface KeyValuePair {
//   key;
//   value;
// }

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}
const pair1: KeyValuePair<string, number> = { key: "age", value: 25 };
const pair2: KeyValuePair<number, boolean> = { key: 1, value: true };
const pair3: KeyValuePair<string, string> = { key: "name", value: "Ola" };
export {};