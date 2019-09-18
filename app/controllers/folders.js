import Controller from "@ember/controller";
import { computed } from "@ember/object";

export default Controller.extend({
  rootFolders: computed.filterBy("model", "parent.content", null)
});
