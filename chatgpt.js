const token ='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'

const gptEl =document.getElementById('result_of_gpt')

fetch('https://api.openai.com/v1/chat/completions'{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer' + token,
    },
    data: JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user","content": "Hello!"}]
    }).then(response => {
        const result = response.json();
     gptEl.innerText = result.choices[0].messages.content;
    })

   

   })
      AIzaSyARoxiLD_7XkjEPcIOz7LhLYnj0vcqL3VQ