let volunteer = PathFile1()

var g = new Graph();
let vertice= []
for(var i=0;i<volunteer.length; i++){

    // creat node for new volunteer
    let position = vertice.indexOf(volunteer[i].volunteerName)
    if(position<0){
        vertice.push(volunteer[i].volunteerName)
        g.addVertex(volunteer[i].volunteerName);
        
    }
    // connect the volunteer in graph if they meet same day same shift
    for(var j=i-1;j>=0; j--){
            if(volunteer[j].shift == volunteer[i].shift && volunteer[j].date == volunteer[i].date){
                g.addEdge( volunteer[j].volunteerName, volunteer[i].volunteerName);
            }
        }  
    
    
}
//show visual node connection 
g.printGraph();

//out put csv file write if click on download link of html page
function downlaodCSVFIle(){
    var csvContent= "data:text/csv;charset=utf-8,"+"node1, node2, weight"+"\r\n";
    for (var i of vertice) {
        csvContent+=g.makeFileContentLine(i)
    }

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "Output_volunteer_attendance_data.csv");
    document.body.appendChild(link);
    link.click();
}

