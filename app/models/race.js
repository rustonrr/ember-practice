import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    date: DS.attr(),
    cost: DS.attr(),
    distance: DS.attr()
});
