import DS from 'ember-data';

const { hasMany, Model, attr } = DS;

export default Model.extend({
  name: attr('string'),
  files: hasMany('file')
});
