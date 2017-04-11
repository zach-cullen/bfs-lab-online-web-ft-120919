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

function bfs(startingNode, vertices, adjacencyList){
  let discovered = [startingNode]
  while(discovered.length != 0){
    let currentNode = discovered.shift()
    let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
    markDistanceAndPredecessor(currentNode, adjacentNodes)
    discovered.concat(adjacentNodes)
  }
}

// need to write a test for non-discovered nodes
function findAdjacent(nodeName,  vertices, edges){
  return edges.filter(function(edge){
    return edge.includes(nodeName)
  }).map(function(edge){
    return edge.filter(function(node){
      return (node != nodeName)
    })[0]
  }).map(function(name){
    return findNode(name, vertices)
  })
}

function markDistanceAndPredecessor(predecessor, adjacentNodes){
  adjacentNodes.map(function(node){
    node.distance = predecessor.distance + 1;
    node.predecessor = predecessor;
  })
}



function findNode(nodeName, vertices){
  return vertices.find(function(vertex){
    return vertex.name == nodeName
  })
}
