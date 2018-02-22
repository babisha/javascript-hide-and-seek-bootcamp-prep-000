function getFirstSelector(selector) {
   return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("div#nested")
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  
  for (let i = 0; i < rankedLists.length; i++) {
      let children = rankedLists[i].children
      
      for (let a = 0; a < children.length; a++) {
    children[a].innerHTML = parseInt(children[a].innerHTML)+ n 
  }
  }
   
}

function deepestChild() {
  let node = document.querySelector("#grand-node")
  let nextNode = node.children[0]
  
  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
  return node
}
