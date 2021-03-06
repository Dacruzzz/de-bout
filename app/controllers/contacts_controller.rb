class ContactsController < ApplicationController
  
    def new
        @contact = Contact.new
    end
  
    def create
        @contact = Contact.new(contact_params)
        if @contact.save
            name = params[:contact][:name]
            email = params[:contact][:email]
            body = params[:contact][:comments]
            ContactMailer.contact_email(name, email, body).deliver
            flash[:success] = "Bericht verstuurd, u krijgt zo spoedig mogelijk reactie!"
            redirect_to root_path
        else
            render new_contact_path
        end
    end
  
    private
    def contact_params
        params.require(:contact).permit(:name, :email, :comments)
    end
end