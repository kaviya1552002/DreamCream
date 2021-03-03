function submitCustomerInfo(form) {
    var fullName= $('#fullName').val();
    var mobileNumber= $('#mobileNumber').val();
    var emailAddress=$('#emailAddress').val();
    var message= $('#message').val();
    if(fullName && mobileNumber && emailAddress && message){
        let notifier = new AWN();
        
        Email.send({
            Host:"smtp.gmail.com",
            Username:"kavis1552002@gmail.com",
            password:"******",
            To:"brindha1722001@gmail.com",
            From:"kavis1552002@gmail.com",
            Subject:"Customer Request",
            Body:'<html><h2>Customer Details</h2><br>\n\
            <div> Name:'+ fullName+'</div><br>\n\
            <div> Mobile Number:'+ mobileNumber +'</div><br>\n\
            <div> Customer Mail Id:'+ emailAddress +'</div><br>\n\
            <div> Message:'+message +'</div></html>'
            
        }).then(function(message){
            console.log('------->>>', message);
            
            if(message =="ok"){
                notifier.success('Successfully Submitted');
                console.log('------->>>',message);
                form.reset();
            }else{
                notifier.alert('Service Error');
                
                }
            
                
                });
            }
        }
            
        
   
            
