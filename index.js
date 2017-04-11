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
  }).filter(function(node){
    return node.distance == null;
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
