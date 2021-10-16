"use strict";

const filterManager = require("./filter-manager");

exports.loadFilters = () => {
    [
        'cheer-bits-amount',
        'donation-amount',
        'donation-from',
        'gift-count',
        'gift-duration',
        'host-type',
        'host-viewer-count',
        'is-anonymous',
        'message',
        'new-view-time',
        'previous-view-time',
        'reward-name',
        'reward',
        'stream-category',
        'sub-kind',
        'sub-type',
        'username',
        'viewer-roles'
    ].forEach(filename => {
        let definition = require(`./builtin/${filename}.js`);
        filterManager.registerFilter(definition);
    });
};