fetch("http://13.125.2.17:8000/emotions/?date=20221030")
  .then((response) => {
    return response.json();
    })
  .then((data) => {
    console.log(data);
    let emotions = data;
    
    
  });