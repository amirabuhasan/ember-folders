import DS from 'ember-data';
const { belongsTo, Model, attr } = DS;

export default Model.extend({
    name: attr('string'),
    folder: belongsTo('folder')
});
