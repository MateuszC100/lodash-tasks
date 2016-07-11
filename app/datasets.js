'use strict';

module.exports = {

    add: function ()
    {
        return [-1,-1];
    },

    ceil: function ()
    {
        return [1.844,2];
    },

    divide: function ()
    {
        return [1,0]
    },

    floor: function ()
    {
        return [5.475,2];
    },

    max: function ()
    {
        return [[4,3,5,2,1]];
    },

    maxBy1: function ()
    {
        return [[{'a':1,'b':1},{'a':2,'b':2},{'a':3,'b':3}],function (o) {
            return o.a;
        }];
    },

    maxBy2: function ()
    {
        return [[{ Name: 'Edwin', Gold: 2500 },{ Name: 'Abc', Gold: 2000 },{ Name: 'Cbnm', Gold: 1200 }],('Gold')];
    },

    mean: function ()
    {
        return [[7,2,4,1]];
    },

    meanBy1: function ()
    {
        return [[{'n':54},{'n':20},{'n':7}],function (o) {
            return o.n;
        }];
    },

    meanBy2: function ()
    {
        return [[{'name':'Abcd','Gold':5},{'name':'Mnbop','Gold':4},{'name':'Ui','Gold':2},{'name':'T','Gold':1}],('Gold')];
    },

    min: function ()
    {
        return [[2,-3,1,0,-2,3]];
    },

    minBy1: function ()
    {
        return [[{'name':'Abcd','age':25},{'name':'Justin','age':21},{'name':'Ui','Gold':30}],function (o) {
            return o.age;
        }];
    },

    minBy2: function ()
    {
        return [[{'Name':'Abcd','Gold':400},{'Name':'Bob','Gold':200},{'Name':'Ui','Gold':1000}],('Gold')];
    },

    multiply: function ()
    {
        return [-5,-3];
    },

    round: function ()
    {
        return [8.2462,3];
    },

    subtract: function ()
    {
        return [15,0];
    },

    sum: function ()
    {
        return [[1,2,4,3]];
    },

    sumBy1: function ()
    {
        return [[{'n':2200},{'n':1100},{'n':40.5}],function (o) {
            return o.n;
        }];
    },

    sumBy2: function ()
    {
        return [[{'name':'Abcd','Gold':52},{'name':'Mnbop','Gold':27},{'name':'Ui','Gold':40},{'name':'T','Gold':74}],('Gold')];
    }
};
