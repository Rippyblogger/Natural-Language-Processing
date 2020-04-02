function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/api',
    {
        method: 'POST',
       
        body: JSON.stringify({text}),
        headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('Text').innerHTML = `text: ${res.text} <br>`
        document.getElementById('Polarity').innerHTML = `polarity: ${res.polarity} <br>`
        document.getElementById('PolarityConfidence').innerHTML = `polarity_confidence: ${res.polarity_confidence} <br>`
        document.getElementById('Subjectivity').innerHTML = `subjectivity: ${res.subjectivity} <br>`
        document.getElementById('SubjectivityConfidence').innerHTML = `subjectivity_confidence: ${res.subjectivity_confidence}<br>`

        console.log(res);

    }).catch(err => console.log(err));
}

export { handleSubmit }
