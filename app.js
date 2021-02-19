

let apiButton = document.querySelector('#api-btn')

apiButton.addEventListener('click', function (){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://arthurfrost.qflo.co.za/php/getTimeline.php', true)
    xhr.send();
    xhr.onload =() => {
        if (xhr.status === 200){
            let time = xhr.responseText;      
            let timeline = JSON.parse(time)
            // console.log(timeline.Timeline[516])
            displayData(timeline)
        }

    };
})



let displayData = (timeline) => {
    let htmlTemplate = `<p>ID: ${timeline.Timeline[516].Id}</p>
                        <p>TITLE: ${timeline.Timeline[516].Title}</p>
                        <p>MEDIA: ${timeline.Timeline[516].Media}</p>
                        <p>DESCRIPTION: ${timeline.Timeline[516].Description}</p>
                        <img src="https://arthurfrost.qflo.co.za/Images/CommunionThumb.jpg" alt=""/>
                    
                        <p>ICON: ${timeline.Timeline[516].Icon}</p>


                        <audio controls autoplay >
                            <source src="https://arthurfrost.qflo.co.za/MP3/v44FFKm6L8g.mp3" type="audio/ogg">
                        </audio>                
                        <p>REMOTE ID: ${timeline.Timeline[516].RemoteId}</p>
                        <p>STATUS: ${timeline.Timeline[516].Status}</p>
                        <p>IS ACTIVE: ${timeline.Timeline[516].isActive}</p>
                        <p>IN ID: ${timeline.Timeline[516].inId}</p>
                        <p>CREATE DATE: ${timeline.Timeline[516].CreateDate}</p>
                        <p>MEDIA NAME: ${timeline.Timeline[516].MediaName}</p>
                        <p>CATEGORY: ${timeline.Timeline[516].Category}</p>
                        <p>EPOCH: ${timeline.Timeline[516].Epoch}</p>
                        <p>AUDIO SIZE: ${timeline.Timeline[516].AudioSize}</p>
    `;
    document.querySelector('#api-card').innerHTML = htmlTemplate;
};



