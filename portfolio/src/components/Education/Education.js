import React from 'react'
import './Edu.css'
import $ from 'jquery'
function Education() {
    //education carousel
var i=0;
setInterval(function() {
    var chosen = $('#choice input[name="choose"]')[i].value;
    switch(chosen){
        case 'uem':
            $('#uem').attr('checked',true);
            $('#isc').attr('checked',false);
            $('#icse').attr('checked',false);
            $('#marks').text("9.78 CGPA");
            $("#standard").text("2nd Sem");
            break;
        case 'isc':
            $('#uem').attr('checked',false);
            $('#isc').attr('checked',true);
            $('#icse').attr('checked',false);
            $('#marks').text("96%");
            $("#standard").text("XII (ISC)");
            break;
        case 'icse':
            $('#uem').attr('checked',false);
            $('#isc').attr('checked',false);
            $('#icse').attr('checked',true);
            $('#marks').text("97%");
            $("#standard").text("X (ICSE)");
        break;
    }
    i++;
    if(i==3){
        i=0;
    }     
}, 2000);
$('#choice input').on('change', function(){
    var chosen = this.value;
    switch(chosen){
        case 'uem':
            $('#marks').text("9.78 CGPA");
            $("#standard").text("2nd Sem");
            i=0;
        break;
        case 'isc':
            $('#marks').text("96%");
            $("#standard").text("XII (ISC)");
            i=1;
        break;
        case 'icse':
            $('#marks').text("97%");
            $("#standard").text("X (ICSE)");
            i=2;
        break;
    }
});

  return (
    <section class="education-section">
        <div id="eduaction" class="education">
            <div class="edu-left">
                <h1>Educational Qualifications</h1>
            </div>
            <div class="edu-right">
                <div class="credentials">
                    <h1 id="marks" class="marks">9.78 CGPA</h1>
                    <h2 id="standard" class="standard">2nd Sem</h2>
                </div>
                <div id="choice" class="radio">
                    <input type="radio" class="radio-btn" id="uem" name="choose" value="uem"/>
                    <input type="radio" class="radio-btn" id="isc" name="choose" value="isc"/>
                    <input type="radio" class="radio-btn" id="icse" name="choose" value="icse"/>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Education