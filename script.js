(function(){
    const form = document.querySelector("#messageForm");


    form.addEventListener('submit',function(e){
        e.preventDefault()
        const message = document.querySelector('#message');
        const errMsg = document.querySelector('.errMsg')
        const msgContentStart = document.querySelector('.msgContentStart')

        if(message.value===''){
            errMsg.classList.add('show')
            setTimeout(function(){
                errMsg.classList.remove('show')
            },4000)
        }else{
            msgContentStart.textContent=message.value
            message.value=''
        }
    })
})()