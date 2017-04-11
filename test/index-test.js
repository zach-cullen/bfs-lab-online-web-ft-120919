var chai = require('chai');
var sinon = require('sinon');

let edges = [
	['14th&6th', '23rd&6th'],
	['23rd&6th', '34th&6th'],
	['34th&6th', '28th&Bwy'],
	['28th&Bwy', '23rd&Bwy'],
	['23rd&Bwy', '14th&Lex'],
	['14th&Lex', '23rd&Lex'],
	['23rd&Lex', '28th&Lex'],
	['28th&Lex', '33rd&Lex']
]

let vertices = [
  {name: '34th&6th', distance: null, predecessor: null},
  {name: '23rd&6th', distance: null, predecessor: null},
  {name: '14th&6th', distance: null, predecessor: null},
  {name: '34th&6th', distance: null, predecessor: null},
  {name: '28th&Bwy', distance: null, predecessor: null},
  {name: '14th&Lex', distance: null, predecessor: null}
]

describe('#findAdjacentNodes', function() {
  it("should return an array of adjacent nodes", function() {
    expect(findAdjacent('34th&6th',  vertices, edges)).toEqual([{name: '23rd&6th', distance: null, predecessor: null},
      {name: '28th&Bwy', distance: null, predecessor: null}
    ])
  });

  it("excludes discovered nodes", function() {
    expect(findAdjacent('28th&Bwy',  vertices, edges)).toEqual()
    // but these nodes are not in the node list?
    // 23rd&Broadway
    // 33rd&Lex
  })
});

describe('#markDistanceAndPredecessor', function() {
  it("should return an array of adjacent nodes", function() {
    let twentyThirdAndSixth = vertices[1]
    let twentyEighthAndBroadway = vertices[4]
    let thirtyFourthAndSixth = vertices[0]
    let adjacentNodes = [twentyThirdAndSixth, twentyEighthAndBroadway]

    markDistanceAndPredecessor(thirtyFourthAndSixth, adjacentNodes)

    expect(twentyThirdAndSixth.distance).toEqual(1)
    expect(twentyEighthAndBroadway.distance).toEqual(1)
    expect(twentyEighthAndBroadway.predecessor).toEqual(thirtyFourthAndSixth)
  });


});
