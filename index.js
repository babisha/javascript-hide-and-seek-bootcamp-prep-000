function getFirstSelector(selector) {
   return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("div#nested")
}

function increaseRankBy(n) {
<<<<<<< HEAD
  const rankedLists = document.querySelectorAll('.ranked-list')
  
  for (let i = 0; i < rankedLists.length; i++) {
      let children = rankedLists[i].children
      
      for (let a = 0; a < children.length; a++) {
    children[a].innerHTML = parseInt(children[a].innerHTML)+ n 
  }
=======
  const rankedLists = document.getElementById('app').querySelector('ul.ranked-list li')
  
  for (let i = 0; i < rankedLists.length; i++) {
    ranked.lists[i].innerHTML = (i + 1).toString()
>>>>>>> 964bd90c157f95d792a6f9740d0c12796d1d30ad
  }
   
}

function deepestChild() {
<<<<<<< HEAD
  let node = document.querySelector("#grand-node")
  let nextNode = node.children[0]
  
  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
  return node
}
=======
  document.querySelector("#grand-node")
}
>>>>>>> 964bd90c157f95d792a6f9740d0c12796d1d30ad
