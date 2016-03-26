/**
 * Created by pooja on 22/3/16.
 */

'use strict';

angular.module('women-WC16-Widget')

    .factory('teamResult', function ($resource) {
        return $resource('http://worldcup.sfg.io/teams/results',
            {},
            {
                getData: {
                    method: 'GET',
                    isArray: true
                }
            })
    })
    .factory('allMatches', function ($resource) {
        return $resource('http://worldcup.sfg.io/matches',
            {},
            {
                getData: {
                    method: 'GET',
                    isArray: true
                }
            })
    })
    .factory('resultByCode', function ($resource) {
        return $resource('http://worldcup.sfg.io/matches/country?fifa_code=USA',
            {},
            {
                getData: {
                    method: 'GET',
                    isArray: true
                }
            })
    })
    .factory('groupResults', function ($resource) {
        return $resource('http://worldcup.sfg.io/teams/group_results',
            {},
            {
                getData: {
                    method: 'GET',
                    isArray: true
                }
            })
    })
    .factory('teams', function ($resource) {
        return $resource('http://worldcup.sfg.io/teams/',
            {},
            {
                getData: {
                    method: 'GET',
                    isArray: true
                }
            })
    });




