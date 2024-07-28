const state = {
  values: {},
  update: function (key, value) {
    this.values[key] = value;
  }
};

const w = 'exampleKey';
const data = ['value1', 'value2', 'value3'];
const i = 1;

state.update(w, data[i]);

console.log(state.values); // { exampleKey: 'value2' }
