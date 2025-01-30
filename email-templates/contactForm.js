const CONTACT_HTML_EN = (email, name, phone, message) => {
  return `<p>Hello Team Rebin,<br><br>
           It looks like ${name} was interested in your offering:<br><br>

           Email: ${email}<br>
           Phone: ${phone}<br>
           Message: ${message}<br><br>

           <div>Rebin</div>
          </p>`;
};



 
 
 const CONTACT_TEXT_EN = (email, name, phone, message)  => {
   return `Hello team Rebin,
 
         It looks like ${name} was interested in your offering:

         Email: ${email}
         Phone: ${phone}
         Message: ${message}

         Rebin
         `
 }
  
 
 module.exports = {CONTACT_HTML_EN, CONTACT_TEXT_EN};