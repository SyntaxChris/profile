class WelcomeController < ApplicationController
  def index
  	 @message = Message.new
  end

  def create
    message = Message.new(params[:message])
    
    if message.valid?
      ContactMailer.new_message(message).deliver
      # redirect_to(root_path, :notice => "Message was successfully sent.")
    else
    	# Handle this appropriately

		# flash.now.alert = "Please fill all fields."
		# render :new
    end
  end
end
