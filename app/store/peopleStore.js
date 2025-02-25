/*
 * File: app/store/peopleStore.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ViewOverviewExtJS.store.peopleStore', {
    extend: 'Ext.data.Store',

    requires: [
        'ViewOverviewExtJS.model.peopleModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'peopleStore',
            model: 'ViewOverviewExtJS.model.peopleModel',
            data: [
                {
                    name: 'Joe',
                    gender: 'male',
                    age: 36
                },
                {
                    name: 'Anna',
                    gender: 'female',
                    age: 29
                },
                {
                    name: 'Frederick',
                    gender: 'male',
                    age: 74
                }
            ]
        }, cfg)]);
    }
});