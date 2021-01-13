class Graph {

	constructor()
	{
		this.AdjList =new Map();
	}


    addVertex(v)
    {        
        this.AdjList.set(v, new Map());
    }

    addEdge(v, w)
    {
        var vertiex = this.AdjList.get(v)
        if(vertiex.has(w)){
            let value = vertiex.get(w)+1 
            vertiex.set(w, value)
            this.AdjList.get(w).set(v, value);
        }
        else{
            this.AdjList.get(v).set(w,1);
            this.AdjList.get(w).set(v, 1);

        }
       
        
    }
    makeFileContentLine(v){
        var edge = this.AdjList.get(v).keys();
        var line=''
        for (var i of edge) {
            var innerline = v+','+i+','+this.AdjList.get(v).get(i)+"\r\n"
            line+=innerline
            
        }
        return line
    }

	
    printGraph()
    {      
        // get all the vertices
        var get_vertex = this.AdjList.keys();
        for (var i of get_vertex) 
    {
            var get_edge = this.AdjList.get(i);
            var conc = "";
         
            for (var j of get_edge){
                conc += j + " ";
          
            }
            // print the vertex and its edges
            console.log(i + " -> " + conc);
        }
    }

}