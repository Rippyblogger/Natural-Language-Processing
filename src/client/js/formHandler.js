function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (formText == " " || formText.length == 0){
        alert("Enter a correct string)");
        console.log("Enter a correct string)");
    }else{
    
    Client.formText

    console.log(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/api',
    {
        method: 'POST',
       
        body: JSON.stringify({formText}),
        headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then(function(reply) {
        document.getElementById('Text').innerHTML = `text: ${reply.text} <br>`
        document.getElementById('Polarity').innerHTML = `polarity: ${reply.polarity} <br>`
        document.getElementById('PolarityConfidence').innerHTML = `polarity_confidence: ${reply.polarity_confidence} <br>`
        document.getElementById('Subjectivity').innerHTML = `subjectivity: ${reply.subjectivity} <br>`
        document.getElementById('SubjectivityConfidence').innerHTML = `subjectivity_confidence: ${reply.subjectivity_confidence}<br>`

        

    }).catch(err => console.log(err));
    };
}

export { handleSubmit }
