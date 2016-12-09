class Contact < ActiveRecord::Base
  validates :name,
    presence: {:message => "Voer uw naam in"}
  validates_format_of :email,
    :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, :message => "Het ingevoerde emailadres is onjuist", presence: {:message => "Vul uw emailadres in"}
  validates :comments,
    presence: {:message => "Voer een bericht in"}
end