import * as AsyncStorageMock from '@react-native-async-storage/async-storage/jest/async-storage-mock';

AsyncStorageMock.multiGet = jest.fn(async (keys, callback) => {
  const results = Promise.all(
    keys.map(async key => {
      const value = await AsyncStorageMock.get(key);
      return [key, value];
    }),
  );
  if (callback) {
    callback(results);
  }
  return results;
});

export default AsyncStorageMock;
