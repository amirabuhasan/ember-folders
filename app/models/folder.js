import DS from "ember-data";

const { hasMany, Model, attr } = DS;

export default Model.extend({
  name: attr("string"),
  files: hasMany("file"),
  parent: DS.belongsTo("folder", { inverse: "folders" }),
  folders: DS.hasMany("folder", { inverse: "parent" })
});
