   function PathFile1(){
    let volunteer = []
    $.ajax({
        type: "GET",
        async: false,
        url: "volunteer_attendance_data.csv",
        dataType: "text",
        success: doing = (data) =>{
            let lines =  data.split("\r\n")
            
            let headers = lines[0].split(',')
            for (let i = 1; i < lines.length; i++) {        
                if (!lines[i])
                    continue
                const obj = {}
                const currentline = lines[i].split(',')
                for (let j = 0; j < headers.length; j++) {
                    obj[headers[j]] = currentline[j]
                }
                // creat volunteer object
                volunteer.push(obj)
            }
           }
     });

return volunteer  
}

