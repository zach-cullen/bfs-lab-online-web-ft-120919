function findAdjacent(rootNode, vertices, edges) {
  let adjacentVertices = []
  const findVertex = name => vertices.find(vertex => vertex.name === name)
  const collectUndiscovered = vertex => {
    if (vertex.distance === null) {
      adjacentVertices.push(vertex)
    }
  }
  edges.forEach(edge => {
    if (edge[0] === rootNode) {
      collectUndiscovered(findVertex(edge[1]))
    } else if (edge[1] === rootNode) {
      collectUndiscovered(findVertex(edge[0]))
    }
  })
  return adjacentVertices
}

function markDistanceAndPredecessor(rootNode, adjacentNodes) {
  adjacentNodes.forEach(node => {
    node.predecessor = rootNode
    node.distance += 1
  })
}


function bfs(rootNode, vertices, edges){
  rootNode.distance = 0
  
  let queue = [rootNode]
  let visited = [rootNode]
  
  while (queue.length > 0) {
    let currentNode = queue.shift()
    let adjacents = findAdjacent(currentNode, vertices, edges)
    visited = visited.concat(adjacents)
    markDistanceAndPredecessor(currentNode, adjacents)
    queue = queue.concat(adjacents)
  }
  return visited
}
