# Kaan-Pete-Roi-Coding-Challenge

  Approached to solve this problem
    •	Choose AJAX for csv file reading option.
    •	AJAX read the file and returned as string so I converted the string to a JSON object.
    •	For convenience I created a collection of distinct users and each user is a node of my graph.
    •	Then iterating the elements of JSON object, if there is an overlap of date and schedule between two elements then I created an edge with Weight 1 and for every repetition Weight increased by 1.
    •	Then I stored the weighted graph to a adjacency list and created the csv file from the list
       
  Challenges faced
    •	The only problem I faced was with executing the weighted graph. At first. I could not come up with an elegant solution to store the weight. Then the Map data-structure came as a savior.

  Limitations of the solution
    •	The code is dependent on the given csv file table heading structure.
