console.log("graph init")

d3.select("#graph")
  .graphviz()
    .renderDot('digraph {\
                    1->2->3\
                    1->3\
                    3->2\
                    5->6->7->8\
                    1->5->8\
                }')
    .width(1280)
    .height(720)
    .fit(true)
    .fade(true)
    // .scale(0.5)

// récupérer chaque node
// Faire la même chose que pour la carte interactive
// preview du dialog en fonciton du title du node