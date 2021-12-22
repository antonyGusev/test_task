import {expect} from 'chai';

const assertCode = (data: {actual: any, expected: any}) => {
  expect(data.actual).to.equal(data.expected,
    `Status should be equal ${data.expected} but it's ${data.actual}`)
};

const assertRequiredKeys = (data: {actual: any, expected: string[]}) => {
  expect(data.actual).to.include.keys(...data.expected)
};

const assertDeepArrayEquality = (data: {actual: any[], expected: any[]}) => {
  expect(data.actual).to.eql(data.expected)
};

const assertValue = (data: {actual: any, expected: any}) => {
  expect(data.actual).to.equal(data.expected,
    `Value should be equal to "${data.expected}" but it's "${data.actual}"`)
};

const assertObjectEquality = (data: {actual: {[k: string]: any}, expected: {[k: string]: any}}) => {
  expect(data.actual).to.eql(data.expected)
};

const assertActualValueBiggerThenExpected = (data: {actual: number, expected: number}) => {
  expect(data.actual).is.above(data.expected,
    `Actual value should be bigger then "${data.expected}", but it's not. "${data.actual}"`)
}

export const assertions = {
  assertCode, assertRequiredKeys, assertDeepArrayEquality, assertValue,
  assertObjectEquality, assertActualValueBiggerThenExpected
};
