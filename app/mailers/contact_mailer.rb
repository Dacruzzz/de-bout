class ContactMailer < ActionMailer::Base
  default to: 'jelte.cruz@gmail.com'
  
  def contact_email(name, email, body)
    @name = name
    @email = email
    @body = body
    
    mail(from: email, subject: 'Bericht van wasenstrijkdebout.nl')
  end
end