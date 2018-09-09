require 'jwt'
require 'Auth'

class Api::SessionsController < ApplicationController

    def login
      # raise params.inspect

      user = User.find_by(email: params[:email])
      if user && user.authenticate(params[:password])
        token = Auth.create_token({ id: user.id, name: user.name})
        # current_user = Auth.decode_token(token)
        render json: { token: Auth.create_token(user) }
      else
        render json: { errors: { message: "Unable to find a user with those credentials" } }, status: 401
      end
    end
  
    def find
        binding.pry 
      # raise params.inspect
      current_user = Auth.decode_token(params[:token])
      if current_user
        render json: { user: current_user }
      else
        render json: { errors: { message: "Unable to find user" } }, status: 401
      end
    end
  
  end